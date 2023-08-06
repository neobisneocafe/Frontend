import { Header } from "@/widgets/admin/Header";
import { Search } from "@/widgets/admin/Header/ui/Header/components/Search";
import { MenuTable } from "@/widgets/admin/Table";
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
import { CloudArrowUp } from "./CloudArrowUp";

export function MenuPage() {
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
      <Header name="Меню" />
      <Flex
        w="full"
        justifyContent={"space-between"}
        gap={"2rem"}
        alignItems="baseline"
      >
        <Search />
        <CreateButton />
      </Flex>
      <MenuTable />
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
            Новая позиция
          </ModalHeader>
          <ModalCloseButton fontSize={"xl"} top={6} right={6} />
          <ModalBody p={0}>
            <VStack gap={7} alignItems="start" as="form">
              <Box w={"full"}>
                <Text fontWeight={600} fontSize="22px">
                  Добавьте фотографию к позиции
                </Text>
                <Center
                  width="530px"
                  height="210px"
                  background="rgba(244, 244, 244, 1)"
                >
                  <FormControl
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    border="1px dashed rgba(205, 211, 221, 1)"
                    width="450px"
                    height="170px"
                    background="#fff"
                  >
                    <CloudArrowUp />
                    <input
                      className="input-field"
                      type={"file"}
                      accept="image/*"
                      hidden
                    />
                    <Text textAlign="center">
                      Перетащите изображение для добавления
                    </Text>
                    <Text
                      textDecoration="underline"
                      cursor="pointer"
                      onClick={() =>
                        document.querySelector(".input-field").click()
                      }
                    >
                      или обзор
                    </Text>
                  </FormControl>
                </Center>
              </Box>

              <Box w={"full"}>
                <Text fontWeight={600} fontSize="22px">
                  Наименование, категория и стоимость
                </Text>
                <FormControl mt={"16px"}>
                  <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                    Наименование
                  </FormLabel>
                  <Input
                    height={"65px"}
                    background="rgba(237, 237, 237, 1)"
                    border="none"
                    isRequired
                    placeholder="Введите название новой позиции"
                  />
                </FormControl>
                <Flex mt={"16px"} gap={7}>
                  <FormControl>
                    <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                      Категория
                    </FormLabel>
                    <Select
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      isRequired
                      placeholder="Категория"
                    >
                      <option value="option1">Чай</option>
                      <option value="option2">Кофе</option>
                      <option value="option3">Десерт</option>
                      <option value="option4">Выпечка</option>
                      <option value="option5">Коктейли</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                      Стоимость
                    </FormLabel>
                    <Input
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      isRequired
                      placeholder="Введите стоимость"
                    />
                  </FormControl>
                </Flex>
              </Box>

              <Box w={"full"}>
                <Text fontWeight={600} fontSize="22px">
                  Состав блюда и граммовка
                </Text>
                <Flex mt={"16px"} gap={7}>
                  <FormControl>
                    <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                      Наименование
                    </FormLabel>
                    <Input
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      isRequired
                      placeholder="Например: Молоко"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"rgba(193, 193, 195, 1)"} fontSize="16px">
                      Кол-во (в гр, мл, л, кг)
                    </FormLabel>
                    <Input
                      height={"65px"}
                      background="rgba(237, 237, 237, 1)"
                      border="none"
                      isRequired
                      placeholder="Кол-во"
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
              _hover={{ background: "rgb(29 122 205)" }}
              type="submit"
            >
              Сохранить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
