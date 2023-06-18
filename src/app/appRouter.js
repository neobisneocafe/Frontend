import { ErrorPage } from "@/pages/error";
import { LoginPage } from "@/pages/login";
import { MainPage } from "@/pages/main";
import { MenuPage } from "@/pages/menu";
import { ProfilePage } from "@/pages/profile";
import { 
        createBrowserRouter,
        useLocation,
        Navigate
      } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  
  const isAuthenticated = /* TODO: paste authentication logic here */ true;

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/', state: { from: location.pathname } }} />;
  }

  return (
    <>
      <Component {...rest} />
    </>
  )
};

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/main',
      element: <PrivateRoute component={MainPage} />,
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