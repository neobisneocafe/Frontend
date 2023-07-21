import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export function EmployeesTable() {
  return (
    <TableContainer w={"full"}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>№</Th>
            <Th>Имя</Th>
            <Th>Должность</Th>
            <Th>Выберите филиал</Th>
            <Th>Телефон</Th>
            <Th>График работы</Th>
            <Th>Ред.</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
          <Tr>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>centimetres (cm)</Td>
            <Td>centimetres (cm)</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>metres (m)</Td>
            <Td>metres (m)</Td>
            <Td>metres (m)</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>metres (m)</Td>
            <Td>metres (m)</Td>
            <Td>metres (m)</Td>
          </Tr>
        </Tbody>
      </Table>
      {/* <Pagination/> */}
    </TableContainer>
  );
}
