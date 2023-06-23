import { OrderList } from "@/widgets/OrderList";
import { Center, Flex } from "@chakra-ui/react";

export function OrdersPage() {
  return (
    <Flex flex={1}>
        <Center className="main-page" justifyContent='center'>
          <OrderList/>
        </Center>
    </Flex>
  )
}