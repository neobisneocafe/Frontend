import { Button, HStack } from "@chakra-ui/react";
import { Coffee } from "../Icons/Coffee";
import { Dessert } from "../Icons/Dessert";
import { Bakery } from "../Icons/Bakery";
import { Cocktail } from "../Icons/Cocktail";
import { Tea } from "../Icons/Tea";
import "./MenuList.scss"

const CategoryItems = [
    { icon: <Coffee/>, category: "Кофе" },
    { icon: <Dessert/>, category: "Десерты" },
    { icon: <Bakery/> , category: "Выпечка" },
    { icon: <Cocktail/>, category: "Коктейли" },
    { icon: <Tea/>, category: "Чай" },
  ];

export function MenuCategoryFilter({ activeFilter, setActiveFilter }){
  const handleFilterClick = (category) => {
    setActiveFilter(category === activeFilter ? "" : category);
  };

    return (
        <HStack w="full" h="49px" justifyContent='center' mt={8}>
        {CategoryItems.map((item) => (
          <Button
            className={activeFilter === item.category ? "active" : "inactive"}
            w='153px'
            h="full"
            key={item.category}
            leftIcon={item.icon}
            mr="16px"
            borderRadius="30px"
            fontSize="18px"
            transition="0.3s ease-in-out"
            _hover={{
              transform:"scale(1.1)"
            }}
            color={activeFilter === item.category ? "#fff" : "#000"}
            bg={activeFilter === item.category ? "#FF8B5B" : "inherit"}
            onClick={() => handleFilterClick(item.category)}
          >
            {item.category}
          </Button>
        ))}
      </HStack>
    )
}