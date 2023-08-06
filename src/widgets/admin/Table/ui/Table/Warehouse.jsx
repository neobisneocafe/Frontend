import { useEffect, useState } from "react";
import {
  Container,
  Tab,
  TabIndicator,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
  Center,
  Spinner,
} from "@chakra-ui/react";
import "./Table.scss";
import instance, { endpoints } from "@/shared/api/apiConfig";
import { DotsIcon } from "../components/DotsIcon";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Paginaiton } from "@/widgets/admin/Pagination";

export function WarehouseTable() {
  const toast = useToast();
  const [productList, setProductList] = useState([]);
  const [dishList, setDishList] = useState([]);

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

  const lowQuantityProducts = [...productList, ...dishList].filter((item) => {
    const quantity = parseInt(item.quantity, 10);
    const minLimit = parseInt(item.min_limit, 10);
    return quantity <= minLimit;
  });


  const handleDelete = async (productId) => {
    try {
      await instance.delete(`${endpoints.productList}${productId}`);
      toast({
        title: "Продукт удален",
        description: "Продукт успешно удален",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log("Product deleted successfully");
    } catch (error) {
      toast({
        title: "Ошибка при удалении",
        description: "Продукт не удален",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error on deleting product:", error.message);
    }
  };

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const dishListData = dishList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const productListData = productList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const lowQuantityProductsData = lowQuantityProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const startingIndex = (currentPage - 1) * itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={"full"}>
      <Tabs position="relative">
        <TabList>
          <Tab>Готовая продукция</Tab>
          <Tab>Сырье</Tab>
          <Tab color={"red"}>Заканчивающаяся продукция</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          {/* Dishes */}
          <TabPanel>
            <TableContainer w={"full"} height={"55vh"}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>№</Th>
                    <Th>Наименование</Th>
                    <Th>Количество</Th>
                    <Th>Лимит</Th>
                    <Th>Дата прихода</Th>
                    <Th>Ред.</Th>
                  </Tr>
                </Thead>
                <Tbody background={"rgba(249, 249, 249, 1)"}>
                  {dishList.length > 0 ? (
                    dishListData.map((d, i) => (
                      <Tr key={i}>
                        <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                          №{startingIndex + i + 1}
                        </Td>
                        <Td>{d.name}</Td>
                        <Td>{d.quantity} шт</Td>
                        <Td>{d.min_limit} шт</Td>
                        <Td>{d.arrivalDate}</Td>
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
                              <MenuItem icon={<EditIcon />}>
                                Редактировать
                              </MenuItem>
                              <MenuItem
                                icon={<DeleteIcon />}
                                onClick={() => console.log(d.id)}
                              >
                                Удалить
                              </MenuItem>
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
            <Paginaiton
              currentPage={currentPage}
              totalPages={Math.ceil(dishList.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </TabPanel>
          {/* Products */}
          <TabPanel>
            <TableContainer w={"full"} height={"55vh"}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>№</Th>
                    <Th>Наименование</Th>
                    <Th>Количество</Th>
                    <Th>Лимит</Th>
                    <Th>Дата прихода</Th>
                    <Th>Ред.</Th>
                  </Tr>
                </Thead>
                <Tbody background={"rgba(249, 249, 249, 1)"}>
                  {productList.length > 0 ? (
                    productListData.map((d, i) => (
                      <Tr key={i}>
                        <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                          №{startingIndex + i + 1}
                        </Td>
                        <Td>{d.name}</Td>
                        <Td>{d.quantity} кг/л</Td>
                        <Td>{d.min_limit} кг/л</Td>
                        <Td>{d.arrival_date}</Td>
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
                              <MenuItem icon={<EditIcon />}>
                                Редактировать
                              </MenuItem>
                              <MenuItem
                                icon={<DeleteIcon />}
                                onClick={() => handleDelete(d.id)}
                              >
                                Удалить
                              </MenuItem>
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
            <Paginaiton
              currentPage={currentPage}
              totalPages={Math.ceil(dishList.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </TabPanel>
          {/* LowQuantity */}
          <TabPanel>
            <TableContainer w={"full"} height={"55vh"}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>№</Th>
                    <Th>Наименование</Th>
                    <Th>Количество</Th>
                    <Th>Лимит</Th>
                    <Th>Дата прихода</Th>
                    <Th>Ред.</Th>
                  </Tr>
                </Thead>
                <Tbody background={"rgba(249, 249, 249, 1)"}>
                  {lowQuantityProducts.length > 0 ? (
                    lowQuantityProductsData.map((d, i) => (
                      <Tr key={i}>
                        <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                          №{startingIndex + i + 1}
                        </Td>
                        <Td>{d.name}</Td>
                        <Td>{d.quantity} кг/л</Td>
                        <Td>{d.min_limit} кг/л</Td>
                        <Td>{d.arrival_date}</Td>
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
                              <MenuItem icon={<EditIcon />}>
                                Редактировать
                              </MenuItem>
                              <MenuItem
                                icon={<DeleteIcon />}
                                onClick={() => handleDelete(d.id)}
                              >
                                Удалить
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Tr>
                      <Td colSpan={8} textAlign="center">
                        Всё в достатке
                      </Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
            <Paginaiton
              currentPage={currentPage}
              totalPages={Math.ceil(dishList.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
