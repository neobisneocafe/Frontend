import { OrderList } from "@/widgets/barista/OrderList";
import { Center } from "@chakra-ui/react";

export function OrdersPage() {
  return (
        <Center className="main-page" justifyContent='center'>
          <OrderList/>
        </Center>
  )
}