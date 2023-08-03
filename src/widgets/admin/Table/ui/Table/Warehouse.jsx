import { useEffect, useState } from "react";
import {
  Container,
  Select,
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
} from "@chakra-ui/react";
import { Pagination } from "../Pagination";
import "./Table.scss";
import MenuData from "./MenuData.json";
import axios from "axios";
import instance, { endpoints } from "@/shared/api/apiConfig";
import { DotsIcon } from "../components/DotsIcon";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

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

  const lowQuantityProducts = productList.filter(
    (product) => product.quantity <= product.min_limit
  );

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

  // const recordPerPage = 5;
  // const [currentPage, setCurrentPage] = useState(1);

  // const lastIndex = currentPage * recordPerPage;
  // const firstIndex = lastIndex - recordPerPage;
  // const currentMenuData = MenuData.slice(firstIndex, lastIndex);
  // const currentProductList = productList.slice(firstIndex, lastIndex);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

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
                <Tbody>
                  {dishList.map((d, i) => (
                    <Tr key={i}>
                      <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                        №{i + 1}
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
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            {/* <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(MenuData.length / recordPerPage)}
              onPageChange={handlePageChange}
            /> */}
          </TabPanel>
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
                <Tbody>
                  {productList.map((d, i) => (
                    <Tr key={i}>
                      <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                        №{i + 1}
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
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            {/* <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(MenuData.length / recordPerPage)}
              onPageChange={handlePageChange}
            /> */}
          </TabPanel>
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
                <Tbody>
                  {lowQuantityProducts.length > 0 ? (
                    lowQuantityProducts.map((d, i) => (
                      <Tr key={i}>
                        <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                          №{i + 1}
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
                      <Td colSpan={6} textAlign="center">
                        Всё в достатке
                      </Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
