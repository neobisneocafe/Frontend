import instance, { endpoints } from "@/shared/api/apiConfig";
import {
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BellSimple } from "./Icons/BellSimple";

export function NotificationList() {
  const [productList, setProductList] = useState([]);
  const [dishList, setDishList] = useState([]);

  useEffect(() => {
    async function fetchProductList() {
      const { data } = await instance.get(endpoints.productList);
      setProductList(data);
    }
    fetchProductList();
  }, []);

  useEffect(() => {
    async function fetchDishList() {
      const { data } = await instance.get(endpoints.dishList);
      setDishList(data);
    }
    fetchDishList();
  }, []);

  const lowQuantityProducts = [...productList, ...dishList].filter((item) => {
    const quantity = parseInt(item.quantity, 10);
    const minLimit = parseInt(item.min_limit, 10);
    return quantity <= minLimit;
  });

  console.log(lowQuantityProducts);
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            background={"rgba(0, 49, 93, 1)"}
            borderRadius="50%"
            w="55px"
            h="55px"
            _hover={{}}
          >
            <BellSimple />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          background={"rgba(0, 49, 93, 1)"}
          inset={"10px auto auto -10px;"}
          color="#fff"
          width="440px"
        >
          <PopoverCloseButton top={2}/>
          <PopoverHeader textAlign={"center"}>Уведомления</PopoverHeader>
          <PopoverBody>
            <Text textAlign={"right"} m="5px auto 10px" width="400px">
              Очистить всё
            </Text>
            {lowQuantityProducts.length > 0 ? (
              lowQuantityProducts.map((p, i) => (
              <Box
                width="400px"
                background="#fff"
                color="rgba(0, 49, 93, 1)"
                borderRadius={"6px"}
                m="0 auto"
                p={"10px"}
              >
                <VStack alignItems={"start"}>
                  <Flex
                    alignItems={"center"}
                    width={"100%"}
                    justifyContent="space-between"
                  >
                    <Text fontWeight={700}>Oт {p.arrival_date}</Text>
                    <CloseButton height={"unset"} />
                  </Flex>
                  <Text>Заканчивается продукт: {p.name}</Text>
                  <Text>Филиал:</Text>
                </VStack>
              </Box>))

            ):(
              <Box
                width="400px"
                background="#fff"
                color="rgba(0, 49, 93, 1)"
                borderRadius={"6px"}
                m="0 auto"
                p={"10px"}
              >
                <Center>Всё в достатке</Center>
              </Box>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
