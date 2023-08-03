import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Pagination } from "../Pagination";
import "./Table.scss";
import MenuData from "./MenuData.json";
import { EditButton } from "../components/EditButton";
import axios from "axios";
import instance, { endpoints } from "@/shared/api/apiConfig";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
} from "@chakra-ui/icons";

export function MenuTable() {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [dishList, setDishList] = useState([]);

  useEffect(() => {
    async function fetctCategoryList() {
      const { data } = await axios.get(endpoints.categoryList);
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

    // Find the category for the current dish
    const category = categoryList.find(
      (category) => category.id === dish.category
    );

    return {
      id: dish.id,
      name: dish.name,
      category: category ? category.name : "", // Use category name if found, otherwise empty string
      composition: productsInDish.map((product) => product.name).join(", "),
      price: dish.price,
      description: dish.description,
      image: dish.image,
    };
  });
  return (
    <Container maxW={"full"}>
      <TableContainer w={"full"} height={"55vh"}>
        <Table variant="simple">
          <Thead>
            <Tr borderBottom={"2px solid #000"}>
              <Th>№</Th>
              <Th>Наименование</Th>
              <Th>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        rightIcon={
                          isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />
                        }
                      >
                        Категория
                      </MenuButton>
                      <MenuList p={0} minW={"190px"}>
                        {categoryList.map((item) => (
                          <MenuItem
                            py={3}
                            _hover={{ color: "red" }}
                            key={item.id}
                          >
                            {item.name} <DeleteIcon visibility={"hidden"} />
                          </MenuItem>
                        ))}
                        <MenuItem py={3} _hover={{ color: "green" }}>
                          Добавить <AddIcon ml={2} fontSize={"15px"} />
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Th>
              <Th>Состав блюда и граммовка</Th>
              <Th>Стоимость</Th>
              <Th>Ред.</Th>
            </Tr>
          </Thead>
          <Tbody background={"rgba(249, 249, 249, 1)"}>
            {combinedData.map((d, i) => (
              <Tr key={i}>
                <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                  №{i + 1}
                </Td>

                <Td>{d.name}</Td>
                <Td>{d.category}</Td>
                <Td>{d.composition}</Td>
                <Td>{d.price} сом</Td>
                <Td>
                  <EditButton />
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
    </Container>
  );
}
