import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import instance, { endpoints } from "@/shared/api/apiConfig";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { CloudArrowUp } from "./CloudArrowUp";

export function Categories() {
  const [categoryList, setCategoryList] = useState([]);
  // const [newCategoryName, setNewCategoryName] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function fetctCategoryList() {
      const { data } = await instance.get(endpoints.categoryList);
      setCategoryList(data);
    }
    fetctCategoryList();
  }, []);


  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              Категория
            </MenuButton>
            <MenuList p={0} minW={"190px"}>
              {categoryList.map((item) => (
                <MenuItem py={3} _hover={{ color: "red" }} key={item.id}>
                  {item.name} <DeleteIcon visibility={"hidden"} />
                </MenuItem>
              ))}
              <MenuItem py={3} _hover={{ color: "green" }} onClick={onOpen}>
                Добавить <AddIcon ml={2} fontSize={"15px"} />
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"30px"} minW={"600px"} padding={"32px"} margin="auto 0">
          <ModalHeader p={0} fontWeight={700} fontSize="24px" mb="24px">
            Новая категория
          </ModalHeader>
          <ModalCloseButton fontSize={"xl"} top={6} right={6}/>
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
                      // onChange={handleFileChange}
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
                Наименование
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
                    placeholder="Введите название категории"
                  />
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
              // onClick={createCategory}
              type="button"
            >
              Создать
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
