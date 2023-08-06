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
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DotsIcon } from "../components/DotsIcon";

export function BranchesTable() {
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    async function fetctBranchList() {
      const { data } = await instance.get(endpoints.branchList);
      setBranchList(data);
    }
    fetctBranchList();
  }, []);

  return (
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
      <Tbody background={"rgba(249, 249, 249, 1)"}>
        {branchList.length > 0 ? (
          branchList.map((b, i) => (
            <Tr key={i}>
              <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>
                №{i + 1}
              </Td>
              <Td>Neocafe {b.name}</Td>
              <Td>{b.address}</Td>
              <Td>{b.working_time}</Td>
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
  );
}
