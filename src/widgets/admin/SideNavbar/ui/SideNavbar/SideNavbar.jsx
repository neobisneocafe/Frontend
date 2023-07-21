import React from "react";
import { Flex, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutButton } from "@/features/auth/logout";
import { Logo } from "../Icons/header_logo";
import "./SideNavbar.scss";

const LinkItems = [
  { name: "Меню", path: "/admin/menu" },
  { name: "Склад", path: "/admin/warehouse" },
  { name: "Филиалы", path: "/admin/branches" },
  { name: "Сотрудники", path: "/admin/employees" },
];

export function SideNavbar() {
  return (
    <Flex
      // pos="fixed"
      h="100vh"
      bg="#FEFEFE"
      w={"14%"}
      flexDir={"column"}
      justifyContent={"space-between"}
      boxShadow="0 0 10px rgba(136, 118, 197, 0.2);"
      p={7}
    >
      <Logo />

      <Flex
        flexDir="column"
        alignItems="center"
        as="nav"
        h="50vh"
        gap="2rem"
        m={"10px"}
      >
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            title={link.name}
            icon={link.icon}
            path={link.path}
          />
        ))}
      </Flex>

      <LogoutButton />
    </Flex>
  );
}

const NavItem = ({ title, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Flex flexDir="column" w="100%">
      <Menu placement="right">
        <Link
          w="100%"
          color="#000"
          className="nav_item"
          id={location.pathname === path ? "active" : ""}
          onClick={() => navigate(path)}
        >
          <MenuButton>
            <Flex
              flexDir="column"
              alignItems="center"
              fontWeight={700}
              fontSize={"18px"}
            >
              <Text>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};
