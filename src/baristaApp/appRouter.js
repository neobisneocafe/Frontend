// import { ErrorPage } from "@/pages/error";
import { LoginPage } from "@/pages/barista/login";
import { OrdersPage } from "@/pages/barista/orders";
import { MenuPage } from "@/pages/barista/menu";
import { ProfilePage } from "@/pages/barista/profile";
import { SchedulePage } from "@/pages/barista/schedule";
import { ProfileEditForm } from "@/features/profile";
import { 
        createBrowserRouter,
        useLocation,
        Navigate
      } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { SideNavbar } from "@/widgets/barista/SideNavbar";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  const accessToken = localStorage.getItem("access_token");

  const isAuthenticated = true
  // const isAuthenticated = !!accessToken;

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/', state: { from: location.pathname } }} />;
  }

  return (
    <Flex>
      <SideNavbar/>
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
      children: [
            { path: '', element: <ProfileEditForm /> },
            { path: 'schedule', element: <SchedulePage /> },
          ],
    },
  ]);