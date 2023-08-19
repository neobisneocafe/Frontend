import { Center, Flex, Spinner, VStack } from "@chakra-ui/react";
import { MenuCategoryFilter } from "./MenuCategoryFilter";
import { useEffect, useState } from "react";
import { DishCard } from "@/entities/barista/dish";
import instance, { endpoints } from "@/shared/api/apiConfig";


export function MenuList() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState(1);
  const [dishList, setDishList] = useState([]);

  useEffect(() => {
    async function fetchDishList() {
      const { data } = await instance.get(endpoints.dishList);
      setDishList(data);
    }
    fetchDishList();
  }, []);


  const filteredDishList = dishList.filter(
    (dish) =>
      dish.category === activeCategoryFilter
  );
  return (
    <VStack w="full">
      <Center w="100%" h="87px" bg="#FF8B5B" color="#fff" fontSize="26px" fontWeight={600}>
        Меню
      </Center>
      <MenuCategoryFilter activeFilter={activeCategoryFilter} setActiveFilter={setActiveCategoryFilter}/>
      {dishList ? (
      <Flex gap={4} w="full" mt={6} px={8} flexWrap="wrap">
        {
          filteredDishList.map(dish => (
            <DishCard key={dish.name} dish = {dish}/>
          ))
        }
      </Flex>
      ):
      (
        <Spinner/>
      )}
    </VStack>
  );
}
