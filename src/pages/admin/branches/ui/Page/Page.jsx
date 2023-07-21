import { Header } from "@/widgets/admin/Header";
import { Center } from "@chakra-ui/react";

export function BranchesPage() {
  return (
    <Center className="main-page" justifyContent="center" height="100vh" alignItems="flex-start" m={0}>
      <Header name = "Филиалы"/>
    </Center>
  );
}
