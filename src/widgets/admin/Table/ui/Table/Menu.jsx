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
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./Table.scss";
import instance, { endpoints } from "@/shared/api/apiConfig";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { DotsIcon } from "../components/DotsIcon";
import { Paginaiton } from "@/widgets/admin/Pagination";

export function MenuTable() {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [dishList, setDishList] = useState([]);

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
      <TableContainer w={"full"} height={"60vh"}>
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
                          // onClick={() => handleDelete(d.id)}
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
      <Paginaiton currentPage={currentPage}
        totalPages={Math.ceil(combinedData.length / itemsPerPage)}
        onPageChange={handlePageChange}/>
    </Container>
  );
}
