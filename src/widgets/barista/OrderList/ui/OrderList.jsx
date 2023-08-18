
import { Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { OrderPlaceFilter } from "./OrderPlaceFilter";
import { OrderStatusFilter } from "./OrderStatusFilter";
// import { orders } from "@/shared/lib";
import { OrderCard } from "@/entities/barista/order";
import instance, { endpoints } from "@/shared/api/apiConfig";


export function OrderList() {

  const [activeStatusFilter, setActiveStatusFilter] = useState("новый");
  const [activePlaceFilter, setActivePlaceFilter] = useState(false);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    async function fetctOrderList() {
      const { data } = await instance.get(endpoints.orderList);
      setOrderList(data);
    }
    fetctOrderList();
  }, []);


  const filteredOrders = orderList.filter(
    (order) =>
      order.status === activeStatusFilter 
      &&
      order.is_takeaway === activePlaceFilter
  );

  return (
    <VStack w="full" >
      <OrderPlaceFilter activeFilter={activePlaceFilter} setActiveFilter={setActivePlaceFilter}/>
      <OrderStatusFilter activeFilter={activeStatusFilter} setActiveFilter={setActiveStatusFilter}/>
      <Flex gap={6} w="full" mt={6} justifyContent="center" flexWrap="wrap">
      {
        filteredOrders.map((order)=>(
          <OrderCard key={order.id} order={order}/>
        ))
      }
      </Flex>
    </VStack>
  );
}
