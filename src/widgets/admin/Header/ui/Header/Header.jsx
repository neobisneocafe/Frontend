import { Button, Checkbox, Flex, Heading, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { NotificationList } from "./components/NotificationList";
import { Search } from "./components/Search";

export function Header({ name }) {
  const location = useLocation();
  const isEmployeesPage = location.pathname.includes("/employees");

  return (
    <VStack w={"full"} margin="24px 44px 0 22px" gap={7}>
      <Flex w={"full"} justifyContent="space-between">
        <Heading fontSize={"48px"} fontWeight={600}>
          {name}
        </Heading>
        <NotificationList />
      </Flex>
      <Flex w="full" justifyContent={"space-between"} gap={"2rem"} alignItems="baseline">
        <Search isEmployeesPage={isEmployeesPage}/>
        <Button
          w={"15%"}
          background="rgba(0, 49, 93, 1)"
          color={"#fff"}
          _hover={{}}
        >
          Создать
        </Button>
        { isEmployeesPage? (<Checkbox >Фильтр по рейтингу</Checkbox>):"" }
      </Flex>
    </VStack>
  );
}
