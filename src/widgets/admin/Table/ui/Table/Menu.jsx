import { useState } from "react";
import {
  Container,
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

export function MenuTable() {
  const recordPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const currentMenuData = MenuData.slice(firstIndex, lastIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container w={"full"} p={0} maxWidth={"full"}>
      <TableContainer w={"full"} height={"65vh"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Наименование</Th>
              <Th>Категория</Th>
              <Th>Состав блюда и граммовка</Th>
              <Th>Стоимость</Th>
              <Th>Ред.</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentMenuData.map((d, i) => (
              <Tr key={i}>
                <Td>{d.id}</Td>
                <Td>{d.name}</Td>
                <Td>{d.category}</Td>
                <Td>{d.composition}</Td>
                <Td>{d.price}</Td>
                <Td>
                  <EditButton />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(MenuData.length / recordPerPage)}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}
