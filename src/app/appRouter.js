import { ErrorPage } from "@/pages/error";
import { LoginPage } from "@/pages/login";
import { OrdersPage } from "@/pages/orders";
import { MenuPage } from "@/pages/menu";
import { ProfilePage } from "@/pages/profile";
import { Header } from "@/widgets/Header";
import { 
        createBrowserRouter,
        useLocation,
        Navigate
      } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  
  const isAuthenticated = /* TODO: paste authentication logic here */ true;

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/', state: { from: location.pathname } }} />;
  }

  return (
    <Flex>
      <Header/>
      <Component {...rest} />
    </Flex>
  )
};

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/orders',
      element: <PrivateRoute component={OrdersPage} />,
    },
    {
      path: '/menu',
      element: <PrivateRoute component={MenuPage} />,
    },
    {
      path: '/profile',
      element: <PrivateRoute component={ProfilePage} />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    }
  ]);