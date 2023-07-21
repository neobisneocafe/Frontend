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
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
// import { CartItem } from "@/entities/barista/cart";

export function OrderCard({ order }) {
  const displayedItems = order.order_items.slice(0, 3);
  const remainingItemCount = order.order_items.length - 3;
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Heading fontSize="22px">{order.order_id}</Heading>
          <Text fontSize="18px" color={"#8F8F8F"} mt="6px">
            {order.customer_name}, {order.order_place}
          </Text>
        </CardHeader>
        <CardBody p={0}>
          <List>
            {displayedItems.map((item) => (
              <ListItem
                fontSize="18px"
                color="#000"
                fontWeight="600"
                mb="6px"
                key={item.order_id}
              >
                x{item.quantity} {item.dish_name}
              </ListItem>
            ))}
          </List>
          <Button
            fontSize="16px"
            fontWeight="600"
            color="#FFA580"
            variant="link"
            visibility={remainingItemCount > 0 ? "visible" : "hidden"}
          >
            Еще +{order.order_items.length - 3}
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
            Принять
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
              Заказ на вынос
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
              {order.order_items.map((dish) => (
                console.log(dish)
                // <CartItem key={dish.dish_id} dish={dish} />
              ))}
              <Button
                height={"60px"}
                mt={"20px"}
                w={"full"}
                variant="outline"
                color="#FF8B5B"
                borderColor="#FF8B5B"
                borderRadius="10px"
                _hover={{
                    background:"#FF8B5B",
                    color:"#fff"
                }}
              >
                Добавить
              </Button>
            </Container>
            <Container w={"full"}>
              <Box display={"flex"} justifyContent="space-between" w={"full"}>
                <Text>Итого</Text>
                <Text>380 сом</Text>
              </Box>
              <Button
                height={"60px"}
                mt={"24px"}
                mb={"32px"}
                w={"full"}
                background="#FF8B5B"
                color="white"
                borderRadius="10px"
                _hover={{ background: "#FFC1A8" }}
              >
                Заказать
              </Button>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
