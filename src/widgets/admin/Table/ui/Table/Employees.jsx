import instance, { endpoints } from "@/shared/api/apiConfig";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Center,
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
import { useEffect, useState } from "react";
import { DotsIcon } from "../components/DotsIcon";

export function EmployeesTable() {
  const [employeesList, setEmployeesList] = useState([]);
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    async function fetctBranchList() {
      const { data } = await instance.get(endpoints.branchList);
      setBranchList(data);
    }
    fetctBranchList();
  }, []);

  useEffect(() => {
    async function fetchEmployeestList() {
      const { data } = await instance.get(endpoints.employeesList);
      setEmployeesList(data);
    }
    fetchEmployeestList();
  }, []);


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
        <Tbody background={"rgba(249, 249, 249, 1)"}>
          {employeesList.length > 0 ? (
            employeesList.map((employee, i) => {
              const branch = branchList.find(branch => branch.id === employee.branch);
            const workingTime = branch ? branch.working_time : "N/A";
              return (
              <Tr key={i}>
                <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                  №{i + 1}
                </Td>
                <Td>{employee.name}</Td>
                <Td>{employee.position}</Td>
                <Td>{branch ? branch.name : "N/A"}</Td>
                <Td>{employee.phone_number}</Td>
                <Td>график работы {workingTime}</Td>
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
                        onClick={() => console.log(employee.id)}
                      >
                        Удалить
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            )})
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
      {/* <Pagination/> */}
    </TableContainer>
  );
}
