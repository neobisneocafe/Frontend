import { Box, Button, HStack, Image } from "@chakra-ui/react";
import "./MenuList.scss";
import { useEffect, useState } from "react";
import instance, { endpoints } from "@/shared/api/apiConfig";

export function MenuCategoryFilter({ activeFilter, setActiveFilter }) {
  const [categoryList, setCategoryList] = useState([]);
  // console.log(activeFilter)

  useEffect(() => {
    async function fetctCategoryList() {
      const { data } = await instance.get(endpoints.categoryList);
      setCategoryList(data.sort((a, b) => a.id - b.id));
    }
    fetctCategoryList();
  }, []);


  const handleFilterClick = (id) => {
    setActiveFilter(id === activeFilter ? "" : id);
  };

  return (
    <HStack w="full" h="49px" justifyContent="center" mt={8}>
      {categoryList.map((item) => (
        <Box w="153px"
        h="full"
        key={item.id}
        mr="16px"
        borderRadius="30px"
        fontSize="18px"
        transition="0.3s ease-in-out"
        display="flex"
        flexDirection="row-reverse"
        justifyContent="space-evenly"
        alignItems="center"
        _hover={{
          transform: "scale(1.1)",
        }}
        bg={activeFilter === item.id ? "#FF8B5B" : "inherit"}>
          <Button
            _hover={{
              background: "unset",
            }}
            color={activeFilter === item.id ? "#fff" : "#000"}
            p={0}
            bg={"transparent"}
            onClick={() => handleFilterClick(item.id, item.name)}
          >
            {item.name}
          </Button>
          <Image src={item.photo} width="35px"/>
        </Box>
      ))}
    </HStack>
  );
}
