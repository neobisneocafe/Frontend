import { Box, Button, HStack } from "@chakra-ui/react";
import { orderStatus } from "@/shared/lib";

export function OrderStatusFilter({ activeFilter, setActiveFilter }) {
  const handleFilterClick = (status) => {
    setActiveFilter(status === activeFilter ? "" : status);
  };

  return (
    <HStack w="full" h="49px" justifyContent="center" mt={8}>
      {orderStatus.map((item) => (
        <Button
          w="153px"
          h="full"
          key={item.status}
          leftIcon={<Box w="6px" h="6px" borderRadius="50%" bg={item.color} />}
          mr="16px"
          borderRadius="30px"
          fontSize="18px"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
          }}
          color={activeFilter === item.status ? "#fff" : "#000"}
          bg={activeFilter === item.status ? "#FF8B5B" : "inherit"}
          onClick={() => handleFilterClick(item.status)}
        >
          {item.status}
        </Button>
      ))}
    </HStack>
  );
}
