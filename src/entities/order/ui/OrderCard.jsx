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
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";

export function OrderCard({ order }) {
  const displayedItems = order.order_items.slice(0, 3);
  const remainingItemCount = order.order_items.length - 3;

  return (
    <Card w="243px" h="294px" boxShadow="none" p={4} borderRadius="10px">
      <IconButton
        icon={<CloseIcon />}
        position="absolute"
        right="8px"
        top="8px"
        bg="unset"
        _hover={{
            bg:"unset",
            color:"#FF8B5B"
        }}
      />
      <CardHeader p={0} pb={0}>
        <Heading fontSize="22px">{order.order_id}</Heading>
        <Text fontSize="18px" color={"#8F8F8F"} mt="6px">
          {order.customer_name}
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
              {item.quantity} {item.dish_name}
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
            bg:"#FF8B5B",
            color:"#fff"
          }}
        >
          Принять
        </Button>
      </CardFooter>
    </Card>
  );
}
