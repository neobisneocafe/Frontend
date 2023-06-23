import { VStack } from "@chakra-ui/react";
import { OrderFilter } from "./OrderFilter";
import { OrderStatusFilter } from "./OrderStatusFilter";


export function MenuList() {
  return (
    <VStack w="full">
      <OrderFilter />
      <OrderStatusFilter/>
      <h1>Orders</h1>
    </VStack>
  );
}
