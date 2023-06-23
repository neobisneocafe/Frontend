import { Box, Button, HStack } from "@chakra-ui/react";

const orderStatus = [
  { color: "#FF5151", status: "Новый" },
  { color: "#F9B70F", status: "В процессе" },
  { color: "#37D400", status: "Готово" },
  { color: "#171717", status: "Отменено" },
  { color: "#717171", status: "Завершено" },
];

export function OrderStatusFilter({ activeFilter, setActiveFilter }) {
    const handleFilterClick = (status) => {
        setActiveFilter(status === activeFilter ? "" : status);
      };

  return (
    <HStack w="full" h="49px" justifyContent='flex-start' mt={8} pl={8}>
      {orderStatus.map((item) => (
        <Button
          w='153px'
          h="full"
          key={item.status}
          leftIcon={<Box w="6px" h="6px" borderRadius="50%" bg={item.color} />}
          mr="16px"
          borderRadius="30px"
          fontSize="18px"
          transition="0.3s ease-in-out"
          _hover={{
            transform:"scale(1.1)"
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
