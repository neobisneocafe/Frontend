import { Header } from "@/widgets/admin/Header";
import { Search } from "@/widgets/admin/Header/ui/Header/components/Search";
import { WarehouseTable } from "@/widgets/admin/Table";
import { format } from "date-fns";
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
import { useState } from "react";
import apiConfig from "@/shared/api/apiConfig"
import { endpoints } from "@/shared/api/apiConfig";

export function WarehousePage() {
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
      <Header name="Склад" />
      <Flex
        w="full"
        justifyContent={"space-between"}
        gap={"2rem"}
        alignItems="baseline"
      >
        <Search />
        <CreateButton />
      </Flex>
      <WarehouseTable />
    </Center>
  );
}

export function CreateButton() {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
    weight: 0,
    expiration_date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await apiConfig.post(endpoints.productList, formData);
      toast({
        title: "Новый продукт создан",
        description: "Продукт успешно добвален",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log("Product created successfully");
    } catch (error) {
      toast({
        title: "Ошибка при создании",
        description: "Продукт не добвален",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error creating product:", error.message);
    } finally {
      onClose();
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"30px"} minW={"600px"} padding={"32px"}>
          <ModalHeader p={0} fontSize={"24px"} fontWeight={700} mb="24px">
            Новая продукция
          </ModalHeader>
          <ModalCloseButton fontSize={"xl"} top={6} right={6}/>
          <ModalBody p={0}>
            <VStack as="form">
              <Box w={"full"}>
                <Text fontWeight={600} fontSize="22px">
                  Наименование, категория и стоимость
                </Text>
                <FormControl mt={"16px"}>
                  <FormLabel fontSize={"16"} color="rgba(193, 193, 195, 1)">
                    Наименование
                  </FormLabel>
                  <Input
                    height={"65px"}
                    background="rgba(237, 237, 237, 1)"
                    border="none"
                    isRequired
                    name="name"
                    placeholder="Введите название продукции"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <Flex gap={6} mt={"16px"}>
                  <FormControl>
                    <FormLabel fontSize={"16"} color="rgba(193, 193, 195, 1)">
                      Кол-во (в гр, мл, л, кг)
                    </FormLabel>
                    <Input
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      isRequired
                      name="weight"
                      placeholder="Например: 50"
                      type="number"
                      value={formData.weight}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                      Сырье
                    </FormLabel>
                    <Select
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      placeholder="Выберите категорию"
                    >
                      <option value="product">Сырье</option>
                      <option value="dish">Готовая продукция</option>
                    </Select>
                  </FormControl>
                </Flex>
                <Flex gap={6} mt={"16px"}>
                  <FormControl>
                    <FormLabel fontSize={"16"} color="rgba(193, 193, 195, 1)">
                      Минимальный лимит
                    </FormLabel>
                    <Input
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      placeholder="Например: 2 кг"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={"16"} color="rgba(193, 193, 195, 1)">
                      Дата прихода
                    </FormLabel>
                    <Input
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      isRequired
                      name="expiration_date"
                      type="date"
                      placeholder={format(new Date(), "yyyy-MM-dd")}
                      value={formData.expiration_date}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Flex>
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
              _hover={{ background:"rgb(29 122 205)"}}
              type="submit"
              onClick={handleSave}
            >
              Сохранить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
