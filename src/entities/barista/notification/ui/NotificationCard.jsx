import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";

export function NotificationCard({ order }) {
  return (
    <Box>
      <VStack py="20px">
        <Flex
          justifyContent={"space-between"}
          w="full"
          fontWeight={700}
          fontSize="24px"
        >
          <Text>
            {order.table_id ? `Стол №${order.table_id}` : order.order_place}
          </Text>
          <Text>{order.order_time}</Text>
        </Flex>
        <Box w="full" fontSize="18px">
          {order.order_id} ({order.order_place})
        </Box>
        <Box
          w="full"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          fontWeight={600}
          fontSize="18px"
        >
          {order.order_items
            .map((item) => `${item.dish_name} х${item.quantity}`)
            .join(", ")}
        </Box>
      </VStack>
      <Divider borderBottomWidth="2px" opacity={1} borderRadius="30px"/>
    </Box>
  );
}
