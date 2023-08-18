import instance, { endpoints } from "@/shared/api/apiConfig";
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
  const toast = useToast();
  const [branchList, setBranchList] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    branch: "",
    phone_number: "",
    birth_date: "",
  });

  useEffect(() => {
    async function fetctBranchList() {
      const { data } = await instance.get(endpoints.branchList);
      setBranchList(data);
    }
    fetctBranchList();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: name === "branch" ? Number(value) : value,
    }));
  };

  const handleCreateEmployee = async () => {
    try {
      await instance.post(endpoints.employeesList, newEmployee);
      onClose();
      toast({
        title: "Сотрудник добавлен",
        description: "Сотрудник успешно добавлен",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log(`stuff added successfully`, newEmployee);
    } catch (error) {
      toast({
        title: "Ошибка при добавлении сотрудника",
        description: "Сотрудник не добавлен",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error creating employee:", error);
    }
  };

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
                    onChange={handleInputChange}
                    value={newEmployee.name}
                    name="name"
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
                    onChange={handleInputChange}
                    value={newEmployee.position}
                    name="position"
                  >
                    <option value="бариста">Бариста</option>
                    <option value="официант">Официант</option>
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
                    onChange={handleInputChange}
                    value={newEmployee.birth_date}
                    name="birth_date"
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
                    placeholder="Введите номер телефона"
                    onChange={handleInputChange}
                    value={newEmployee.phone_number}
                    name="phone_number"
                  />
                </FormControl>
                <FormControl mt={"16px"}>
                  <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                    Филиал
                  </FormLabel>
                  {branchList.length > 0 ? (
                    <Select
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      isRequired
                      placeholder="Выберите филиал"
                      onChange={handleInputChange}
                      value={newEmployee.branch}
                      name="branch"
                    >
                      {branchList.map((b, i) => (
                        <option key={i} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </Select>
                  ) : (
                    <Text>First add branches</Text>
                  )}
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
              onClick={handleCreateEmployee}
            >
              Создать
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
