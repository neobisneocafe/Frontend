import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
// import { Pagination } from "../Pagination";
  
  export function BranchesTable() {
    return (
      <TableContainer w={"full"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Название кофейни</Th>
              <Th>Адрес</Th>
              <Th>Время работы</Th>
              <Th>Ред.</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>Категория</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>Категория</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Td>Категория</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>Категория</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Td>Категория</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>Категория</Td>
            </Tr>
          </Tbody>
        </Table>
        {/* <Pagination/> */}
      </TableContainer>
    );
  }
  