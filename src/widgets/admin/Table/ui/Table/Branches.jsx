import { endpoints } from "@/shared/api/apiConfig";
import {
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { EditButton } from "../components/EditButton";

export function BranchesTable() {
  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    async function fetctBranchList() {
      const { data } = await axios.get(endpoints.branchList);
      setBranchList(data);
    }
    fetctBranchList();
  }, []);

  console.log(branchList);

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
          <Tbody>
            {branchList.length > 0 ? (
              branchList.map((b, i) => (
                <Tr key={i}>
                  <Td color={"rgba(0, 49, 93, 1)"} fontWeight={700}>№{i+1}</Td>
                  <Td>Neocafe {b.name}</Td>
                  <Td>{b.adress}</Td>
                  <Td>
                    С {b.opening_time} до {b.closing_time}
                  </Td>
                  <Td>
                    <EditButton />
                  </Td>
                </Tr>
              ))
            ) : (
              <Heading size={"md"} textAlign="center" w={"full"}>
                Пока филиалов нет
              </Heading>
            )}
          </Tbody>
        </Table>
  );
}
