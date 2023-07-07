import { DishCard } from "@/entities/dish";
import { Center, Flex, VStack } from "@chakra-ui/react";
import { MenuCategoryFilter } from "./MenuCategoryFilter";
import { DishList } from "@/shared/lib";
import { useState } from "react";


export function MenuList() {

  const [activeCategoryFilter, setActiveCategoryFilter] = useState("Кофе");

  const filteredDishList = DishList.filter(
    (dish) =>
      dish.category === activeCategoryFilter
  );

  return (
    <VStack w="full">
      <Center w="100%" h="87px" bg="#FF8B5B" color="#fff" fontSize="26px" fontWeight={600}>
        Меню
      </Center>
      <MenuCategoryFilter activeFilter={activeCategoryFilter} setActiveFilter={setActiveCategoryFilter}/>
      <Flex gap={4} w="full" mt={6} px={8} flexWrap="wrap">
        {
          filteredDishList.map(dish => (
            <DishCard key={dish.name} dish = {dish}/>
          ))
        }
      </Flex>
    </VStack>
  );
}
