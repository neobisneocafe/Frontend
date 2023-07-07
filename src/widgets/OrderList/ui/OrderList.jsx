import { OrderCard } from "@/entities/order";
import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { OrderPlaceFilter } from "./OrderPlaceFilter";
import { OrderStatusFilter } from "./OrderStatusFilter";
import { orders } from "@/shared/lib";


export function OrderList() {

  const [activeStatusFilter, setActiveStatusFilter] = useState("Новый");
  const [activePlaceFilter, setActivePlaceFilter] = useState("На вынос");

  const filteredOrders = orders.filter(
    (order) =>
      order.order_status === activeStatusFilter &&
      order.order_place === activePlaceFilter
  );

  return (
    <VStack w="full" >
      <OrderPlaceFilter activeFilter={activePlaceFilter} setActiveFilter={setActivePlaceFilter}/>
      <OrderStatusFilter activeFilter={activeStatusFilter} setActiveFilter={setActiveStatusFilter}/>
      <Flex gap={6} w="full" mt={6} justifyContent="center" flexWrap="wrap">
      {
        filteredOrders.map((order)=>(
          <OrderCard key={order.order_id} order={order}/>
        ))
      }
      </Flex>
    </VStack>
  );
}
