import instance, { endpoints } from "@/shared/api/apiConfig";
import { Paginaiton } from "@/widgets/admin/Pagination";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DotsIcon } from "../components/DotsIcon";

export function EmployeesTable() {
  const toast = useToast();
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

  const handleDelete = async (empID) => {
    try {
      await instance.delete(`${endpoints.employeesList}${empID}`);
      toast({
        title: "Сотрудник удален",
        description: "Сотрудник успешно удален",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log(`Emp deleted successfully - ${empID}`);
    } catch (error) {
      toast({
        title: "Ошибка при удалении Сотрудника",
        description: "Сотрудник не удален",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error on deleting product:", error.message);
    }
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = employeesList.slice(
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
        <TableContainer w={"full"} height="55vh">
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
                paginatedData.map((employee, i) => {
                  const branch = branchList.find(
                    (branch) => branch.id === employee.branch
                  );
                  const workingTime = branch ? branch.working_time : "N/A";
                  return (
                    <Tr key={i}>
                      <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                      №{startingIndex + i + 1}
                      </Td>
                      <Td>{employee.name}</Td>
                      <Td>{employee.position}</Td>
                      <Td>{branch ? branch.name : "N/A"}</Td>
                      <Td>{employee.phone_number}</Td>
                      <Td>{workingTime}</Td>
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
                              onClick={() => handleDelete(employee.id)}
                            >
                              Удалить
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  );
                })
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
        totalPages={Math.ceil(employeesList.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}
