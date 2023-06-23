import React from "react";
import "./Header.scss";
import {
  Flex,
  Icon,
  Link,
  IconButton,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import { BellSimple } from "../Icons/BellSimple";
import { BookOpen } from "../Icons/BookOpen";
import { Notepad } from "../Icons/Notepad";
import { UserCircle } from "../Icons/UserCircle";
import { useLocation, useNavigate } from "react-router-dom";

const LinkItems = [
  // { name: "Заказы", icon: <Notepad/> },
  { name: "Заказы", icon: Notepad, path: "/orders" },
  { name: "Меню", icon: BookOpen, path: "/menu" },
  { name: "Профиль", icon: UserCircle, path: "/profile" },
];

export function Header() {
  return (
    <Flex pos="fixed" h="full" bg="#023462" w={"7%"} flexDir={"column"}>
      <IconButton
        m="13px auto"
        bg="#FEFEFE"
        borderRadius="50%"
        w="60px"
        h="60px"
        icon={<BellSimple />}
      />

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
