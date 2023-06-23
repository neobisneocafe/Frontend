import { OrderCard } from "@/entities/order";
import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { OrderFilter } from "./OrderFilter";
import { OrderStatusFilter } from "./OrderStatusFilter";

const orders = [
  {
    order_id: "M-47", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-48", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо 2", quantity: "x1" },
    ],
  },
  {
    order_id: "M-49", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" }
    ],
  },
  {
    order_id: "M-50", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-51", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-47", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-48", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо 2", quantity: "x1" },
    ],
  },
  {
    order_id: "M-49", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" }
    ],
  },
  {
    order_id: "M-50", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-51", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-47", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-48", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо 2", quantity: "x1" },
    ],
  },
  {
    order_id: "M-49", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" }
    ],
  },
  {
    order_id: "M-50", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
    ],
  },
  {
    order_id: "M-51", 
    customer_name: "Валентина",
    order_status: "Новый",
    order_items: [
      { dish_name: "Капучино", quantity: "x1" },
      { dish_name: "Багровый закат", quantity: "x1" },
      { dish_name: "Мохито Клубничный", quantity: "x1" },
      { dish_name: "Другое блюдо", quantity: "x1" },
      { dish_name: "Еще одно блюдо", quantity: "x1" },
    ],
  },
];


export function OrderList() {

  const [activeFilter, setActiveFilter] = useState("");

  const filteredOrders = activeFilter
    ? orders.filter((order) => order.order_status === activeFilter)
    : orders;
  return (
    <VStack w="full" >
      <OrderFilter />
      <OrderStatusFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      <Flex gap={8} w="full" mt={6} pl={8} flexWrap="wrap">
      {
        filteredOrders.map((order)=>(
          <OrderCard key={order.order_id} order={order}/>
        ))
      }
      </Flex>
    </VStack>
  );
}
