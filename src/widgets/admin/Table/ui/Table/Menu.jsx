import { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  IconButton,
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
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import "./Table.scss";
import instance, { endpoints } from "@/shared/api/apiConfig";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { DotsIcon } from "../components/DotsIcon";
import { Paginaiton } from "@/widgets/admin/Pagination";
import { Categories } from "@/entities/admin/categories";

export function MenuTable() {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [dishList, setDishList] = useState([]);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function fetctCategoryList() {
      const { data } = await instance.get(endpoints.categoryList);
      setCategoryList(data);
    }
    fetctCategoryList();
  }, []);

  useEffect(() => {
    async function fetchProductList() {
      const { data } = await instance.get(endpoints.productList);
      setProductList(data);
    }
    fetchProductList();
  }, []);

  useEffect(() => {
    async function fetchDishList() {
      const { data } = await instance.get(endpoints.dishList);
      setDishList(data);
    }
    fetchDishList();
  }, []);

  const combinedData = dishList.map((dish) => {
    const productsInDish = dish.products.map((productId) =>
      productList.find((product) => product.id === productId)
    );

    const category = categoryList.find(
      (category) => category.id === dish.category
    );

    return {
      id: dish.id,
      name: dish.name,
      category: category ? category.name : "",
      composition: productsInDish.map((product) => product.name).join(", "),
      price: dish.price,
      description: dish.description,
      image: dish.image,
    };
  });

  const handleDelete = async (dishId) => {
    try {
      await instance.delete(`${endpoints.dishList}${dishId}`);
      toast({
        title: "Позиция удален",
        description: "Позиция успешно удален",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log(`Product  deleted successfully - ${dishId}`);
    } catch (error) {
      toast({
        title: "Ошибка при удалении Позиция",
        description: "Позиция не удалена",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error on deleting product:", error.message);
    }
  };

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = combinedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const startingIndex = (currentPage - 1) * itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={"full"}>
      {paginatedData ? (
        <TableContainer w={"full"} height={"60vh"}>
          <Table variant="simple">
            <Thead>
              <Tr borderBottom={"2px solid #000"}>
                <Th>№</Th>
                <Th>Наименование</Th>
                <Th>
                  <Categories />
                </Th>
                <Th>Состав блюда</Th>
                <Th>Стоимость</Th>
                <Th>Ред.</Th>
              </Tr>
            </Thead>
            <Tbody background={"rgba(249, 249, 249, 1)"}>
              {combinedData.length > 0 ? (
                paginatedData.map((d, i) => (
                  <Tr key={i}>
                    <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                      №{startingIndex + i + 1}
                    </Td>
                    <Td>{d.name}</Td>
                    <Td>{d.category}</Td>
                    <Td>{d.composition}</Td>
                    <Td>{d.price} сом</Td>
                    <Td>
                      <Menu>
                        <MenuButton
                          as={IconButton}
                          aria-label="Options"
                          icon={<DotsIcon />}
                          variant="outline"
                          border={"none"}
                          _hover={{}}
                        />
                        <MenuList>
                          <MenuItem icon={<EditIcon />}>Редактировать</MenuItem>
                          <MenuItem
                            icon={<DeleteIcon />}
                            onClick={
                              onOpen
                            }
                          >
                            Удалить
                          </MenuItem>
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent
                              margin={"auto"}
                              borderRadius={"30px"}
                              minW={"600px"}
                              padding={"32px"}
                            >
                              <ModalHeader
                                p={0}
                                fontWeight={700}
                                fontSize="24px"
                                mb="24px"
                                textAlign={"center"}
                              >
                                Удаление
                              </ModalHeader>
                              <ModalCloseButton
                                fontSize={"xl"}
                                top={6}
                                right={6}
                              />
                              <ModalBody p={0}>
                                <Center fontWeight={600} fontSize="22px" textAlign={"center"}>
                                  Вы действительно хотите удалить позицию <br />
                                  "{d.name}"?
                                </Center>
                              </ModalBody>

                              <ModalFooter p={0} mt="48px" gap={6}>
                                <Button
                                  height="55px"
                                  w="full"
                                  border="1px solid rgba(0, 49, 93, 1)"
                                  color="rgba(0, 49, 93, 1)"
                                  background="#fff"
                                  onClick={()=>handleDelete(d.id)}
                                >
                                  Да
                                </Button>
                                <Button
                                  height="55px"
                                  w="full"
                                  background="rgba(0, 49, 93, 1)"
                                  color="#fff"
                                  _hover={{ background: "rgb(29 122 205)" }}
                                  type="submit"
                                  onClick={onClose}
                                >
                                  Нет
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={8}>
                    <Center>
                      <Spinner size="xl" />
                    </Center>
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Spinner />
      )}
      <Paginaiton
        currentPage={currentPage}
        totalPages={Math.ceil(combinedData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}
