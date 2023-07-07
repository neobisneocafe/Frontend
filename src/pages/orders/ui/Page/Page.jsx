import { OrderList } from "@/widgets/OrderList";
import { Center } from "@chakra-ui/react";

export function OrdersPage() {
  return (
        <Center className="main-page" justifyContent='center'>
          <OrderList/>
        </Center>
  )
}