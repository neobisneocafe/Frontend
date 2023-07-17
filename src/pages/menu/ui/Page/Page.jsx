import { CartList } from "@/widgets/Cart";
import { MenuList } from "@/widgets/MenuList";
import { Center } from "@chakra-ui/react";

export function MenuPage() {
  return (
    <Center className="main-page" justifyContent="center" height="100vh" alignItems="flex-start">
      <MenuList />
      <CartList />
    </Center>
  );
}
