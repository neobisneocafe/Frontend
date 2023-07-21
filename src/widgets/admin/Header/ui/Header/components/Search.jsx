import { SearchIcon } from "@chakra-ui/icons";
import {Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export function Search({isEmployeesPage}) {
  return (
      <InputGroup width={isEmployeesPage? "65%" : "83%"}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Поиск" background={"rgba(231, 231, 231, 1)"} border="none"/>
      </InputGroup>
  );
}
