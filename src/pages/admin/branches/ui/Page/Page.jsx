import { Header } from "@/widgets/admin/Header";
import { BranchesTable } from "@/widgets/admin/Table";
import { Center } from "@chakra-ui/react";

export function BranchesPage() {
  return (
    <Center
      className="main-page"
      justifyContent="flex-start"
      height="100vh"
      alignItems="flex-start"
      m={0}
      flexDirection="column"
      padding="24px 44px 0 22px"
      gap={"3rem"}
    >
      <Header name="Филиалы" />
      <BranchesTable />
    </Center>
  );
}
