import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  IconButton,
  List,
  ListItem,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  VisuallyHidden,
  CloseButton,
  DrawerBody,
  Container,
  Box,
  Flex,
  Divider,
  Image,
  Stack,
  Skeleton,
  HStack,
  useNumberInput,
  Input,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import instance, { endpoints } from "@/shared/api/apiConfig";

export function OrderCard({ order }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const { data } = await instance.get(endpoints.dishList);
      setDishes(data);
    }
    fetchDishes();
  }, []);

  const displayedItems = order.order_content.slice(0, 3);
  const remainingItemCount = order.order_content.length - 3;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getDishesForOrder = () => {
    return displayedItems.map((itemId) => {
      return dishes.find((dish) => dish.id === itemId);
    });
  };

  const orderDishes = getDishesForOrder();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const getButtonText = () => {
    switch (order.status) {
      case "новый":
        return "Принять";
      case "в_процессе":
        return "Завершить";
      case "готово":
        return "Заказ готов";
      case "отменено":
        return "Заказ отменен";
      case "оплачено":
        return "Заказ завершен";
      default:
        return "Статус неизвестен";
    }
  }

  return (
    <>
      <Card
        w="243px"
        h="294px"
        boxShadow="none"
        p={4}
        borderRadius="10px"
        _hover={{ bg: "#DCEDFF" }}
        cursor="pointer"
        onClick={onOpen}
      >
        <IconButton
          icon={<CloseIcon />}
          position="absolute"
          right="8px"
          top="8px"
          bg="unset"
          _hover={{
            bg: "unset",
            color: "#FF8B5B",
          }}
        />
        <CardHeader p={0} pb={0}>
          <Heading fontSize="22px">M-{order.id}</Heading>
          <Text fontSize="18px" color={"#8F8F8F"} my="6px">
            Стол №{order.table}
          </Text>
        </CardHeader>
        <CardBody p={0}>
          <List>
            {dishes.length > 0 ? (
              orderDishes.map((dish, i) => (
                <ListItem
                  fontSize="18px"
                  color="#000"
                  fontWeight="600"
                  mb="6px"
                  key={i}
                >
                  {/* {console.log(dish)} */}
                  x1 {dish.name}
                </ListItem>
              ))
            ) : (
              <ListItem>
                <Stack>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              </ListItem>
            )}
          </List>
          <Button
            fontSize="16px"
            fontWeight="600"
            color="#FFA580"
            variant="link"
            visibility={remainingItemCount > 0 ? "visible" : "hidden"}
          >
            Еще +{order.order_content.length - 3}
          </Button>
        </CardBody>
        <CardFooter p={0}>
          <Button
            variant="outline"
            w="full"
            h="46px"
            border="2px solid #FF8B5B"
            color="#FF8B5B"
            borderRadius="10px"
            _hover={{
              bg: "#FF8B5B",
              color: "#fff",
            }}
          >
          {getButtonText()}
          </Button>
        </CardFooter>
      </Card>

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={"#023462"}
          color={"#fff"}
          px={"32px"}
          maxWidth={"495px"}
        >
          <DrawerHeader
            justifyContent={"space-between"}
            display={"flex"}
            px={0}
            alignItems={"center"}
          >
            <VisuallyHidden position={"unset"}>empty</VisuallyHidden>
            <Text fontSize="26px" fontWeight={600}>
              Заказ {order.is_takeaway ? "на вынос" : "в заведении"}
            </Text>
            <CloseButton size={"lg"} onClick={onClose} />
          </DrawerHeader>
          <DrawerBody
            px={0}
            display="flex"
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Container>
              <Box>
                <List>
                  {dishes.length > 0 ? (
                    orderDishes.map((dish, i) => (
                      <ListItem
                        fontSize="18px"
                        color="#000"
                        fontWeight="600"
                        key={i}
                      >
                        <HStack
                          color={"#fff"}
                          alignItems="start"
                          justifyContent="space-between"
                          py={4}
                        >
                          <Image
                            src={dish.image}
                            object-fit="cover"
                            width="104px"
                            height="104px"
                            borderRadius="25px"
                          />
                          <Text>{dish.name}</Text>
                          <Flex
                            w="40%"
                            fontSize="18px"
                            color={"#FF8B5B"}
                            textAlign="right"
                            gap={"12px"}
                            flexDirection="column"
                            fontWeight="700"
                            height="13vh"
                            justifyContent="space-between"
                          >
                            <Text>{dish.price}</Text>
                            <Box color={"#fff"}>
                              <Button
                                borderRadius={"50px"}
                                background="#8F8F8F"
                                color={"#fff"}
                                {...dec}
                              >
                                -
                              </Button>
                              <Input
                                border={"none"}
                                p={"10px"}
                                width="20%"
                                fontWeight="700"
                                {...input}
                              />
                              <Button
                                borderRadius={"50px"}
                                background="#FF8B5B"
                                color={"#fff"}
                                {...inc}
                              >
                                +
                              </Button>
                            </Box>
                          </Flex>
                          {/* </Flex> */}
                        </HStack>
                        <Divider
                          borderBottomWidth="2px"
                          opacity={1}
                          borderRadius="30px"
                        />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <Stack>
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                      </Stack>
                    </ListItem>
                  )}
                </List>
              </Box>
              <Button
                height={"60px"}
                mt={"20px"}
                w={"full"}
                variant="outline"
                color="#FF8B5B"
                borderColor="#FF8B5B"
                borderRadius="10px"
                _hover={{
                  background: "#FF8B5B",
                  color: "#fff",
                }}
              >
                Добавить
              </Button>
            </Container>
            <Container w={"full"}>
              <Box
                display={"flex"}
                justifyContent="space-between"
                w={"full"}
                fontWeight={700}
                fontSize={"22px"}
              >
                <Text>Итого</Text>
                <Text>{order.total_price} сом</Text>
              </Box>
              <Button
                height={"60px"}
                mt={"24px"}
                mb={"32px"}
                w={"full"}
                fontSize={"18px"}
                background="#FF8B5B"
                color="white"
                borderRadius="10px"
                _hover={{ background: "#FFC1A8" }}
              >
                Закрыть счет
              </Button>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
