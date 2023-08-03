import { Header } from "@/widgets/admin/Header";
import { Search } from "@/widgets/admin/Header/ui/Header/components/Search";
import { EmployeesTable } from "@/widgets/admin/Table";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export function EmployeesPage() {
  return (
    <Center
      className="main-page"
      justifyContent="flex-start"
      height="100vh"
      alignItems="flex-start"
      m={0}
      flexDirection="column"
      padding="24px 44px 0 22px"
      gap={"3rem"}
    >
      <Header name="Сотрудники" />
      <Flex
        w="full"
        justifyContent={"space-between"}
        gap={"2rem"}
        alignItems="baseline"
      >
        <Search />
        <CreateButton />
      </Flex>
      <EmployeesTable />
    </Center>
  );
}

export function CreateButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w={"13%"}
        background="rgba(0, 49, 93, 1)"
        color={"#fff"}
        _hover={{}}
        onClick={onOpen}
      >
        Создать
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} alignItems="center">
        <ModalOverlay />
        <ModalContent borderRadius={"30px"} minW={"600px"} padding={"32px"}>
          <ModalHeader p={0} fontWeight={700} fontSize="24px" mb="24px">
            Новый сотрудник
          </ModalHeader>
          <ModalCloseButton fontSize={"xl"} top={6} right={6} />
          <ModalBody p={0}>
            <VStack gap={7} alignItems="start" as="form">
              <Box w={"full"}>
                <Text fontWeight={600} fontSize="22px">
                  Личные данные
                </Text>
                <FormControl mt={"16px"}>
                  <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                    Имя
                  </FormLabel>
                  <Input
                    height={"65px"}
                    background="rgba(237, 237, 237, 1)"
                    border="none"
                    isRequired
                    placeholder="Как зовут сотрудника"
                  />
                </FormControl>
                <FormControl mt={"16px"}>
                  <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                    Должность
                  </FormLabel>
                  <Select
                    height={"65px"}
                    background="rgba(237, 237, 237, 1)"
                    border="none"
                    isRequired
                    placeholder="Выберите должность"
                  >
                    <option value="option1">Бармен</option>
                    <option value="option2">Официант</option>
                  </Select>
                </FormControl>
                <FormControl mt={"16px"}>
                  <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                    День рождения
                  </FormLabel>
                  <Input
                    height={"65px"}
                    background="rgba(237, 237, 237, 1)"
                    border="none"
                    isRequired
                    type={"date"} 
                  />
                </FormControl>
                <FormControl mt={"16px"}>
                  <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                    Номер телефона
                  </FormLabel>
                  <Input
                    height={"65px"}
                    background="rgba(237, 237, 237, 1)"
                    border="none"
                    isRequired
                    type={"number"}
                    placeholder="Введите номер телефона"
                  />
                </FormControl>
                <FormControl mt={"16px"}>
                  <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                    Филиал
                  </FormLabel>
                  <Select
                    height={"65px"}
                    background="rgba(237, 237, 237, 1)"
                    border="none"
                    isRequired
                    placeholder="Выберите филиал"
                  >
                    <option value="option1">Филиал - 1</option>
                    <option value="option2">Филиал - 2</option>
                    <option value="option3">Филиал - 3</option>
                    <option value="option4">Филиал - 4</option>
                  </Select>
                </FormControl>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter p={0} mt="48px" gap={6}>
            <Button
              height="55px"
              w="full"
              border="1px solid rgba(0, 49, 93, 1)"
              color="rgba(0, 49, 93, 1)"
              background="#fff"
              onClick={onClose}
            >
              Отмена
            </Button>
            <Button
              height="55px"
              w="full"
              background="rgba(0, 49, 93, 1)"
              color="#fff"
              _hover={{ background: "rgb(29 122 205)" }}
              type="submit"
            >
              Создать
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
