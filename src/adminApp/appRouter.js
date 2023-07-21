import { createBrowserRouter, Navigate, useLocation } from "react-router-dom";
import { ErrorPage } from "@/pages/error";
import { LoginPage } from "@/pages/admin/login";
import { Flex } from "@chakra-ui/react";
import { MenuPage } from "@/pages/admin/menu";
import { SideNavbar } from "@/widgets/admin/SideNavbar";
import { WarehousePage } from "@/pages/admin/warehouse";
import { BranchesPage } from "@/pages/admin/branches";
import { EmployeesPage } from "@/pages/admin/employees";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  /* TODO: paste authentication logic here */ 
  const isAuthenticated = true;

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

export const AdminRouter = () =>
  createBrowserRouter([
    {
      path: "/admin",
      element: <LoginPage/>,
    },
    {
      path: "/admin/menu",
      element: <PrivateRoute component={MenuPage} />,
      exact: true,
    },
    {
      path: "/admin/warehouse",
      element: <PrivateRoute component={WarehousePage} />,
      exact: true,
    },
    {
      path: "/admin/branches",
      element: <PrivateRoute component={BranchesPage} />,
      exact: true,
    },
    {
      path: "/admin/employees",
      element: <PrivateRoute component={EmployeesPage} />,
      exact: true,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
