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
  
  export function WarehouseTable() {
    return (
      <TableContainer w={"full"}>
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
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
        {/* <Pagination/> */}
      </TableContainer>
    );
  }
  