import React from "react";
import "./SideNavbar.scss";
import {
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import { BookOpen } from "../Icons/BookOpen";
import { Notepad } from "../Icons/Notepad";
import { UserCircle } from "../Icons/UserCircle";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutButton } from "@/features/auth/logout";
import { NotificationList } from "@/widgets/barista/NotificationList";

const LinkItems = [
  { name: "Заказы", icon: Notepad, path: "/orders" },
  { name: "Меню", icon: BookOpen, path: "/menu" },
  { name: "Профиль", icon: UserCircle, path: "/profile" },
];

export function SideNavbar() {
  return (
    <Flex pos="fixed" h="full" bg="#023462" w={"7%"} flexDir={"column"}>
      <NotificationList/>

      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        as="nav"
        h="85vh"
        gap="6rem"
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

      <LogoutButton/>
    </Flex>
  );
}

const NavItem = ({ title, icon: IconComponent, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Flex flexDir="column" w="100%">
      <Menu placement="right">
        <Link
          w="100%"
          color="#fff"
          className="nav-item"
          id={location.pathname === path ? "active" : ""}
          onClick={() => navigate(path)}
        >
          <MenuButton>
            <Flex flexDir="column" alignItems="center">
              <Icon as={IconComponent} />
              <Text>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};
