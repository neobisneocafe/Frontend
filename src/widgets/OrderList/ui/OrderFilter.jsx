import { Button, HStack } from "@chakra-ui/react";

export function OrderFilter() {
    return (
      <HStack w="full" gap={0} h="87px">
        <Button
          w="50%"
          h="full"
          bg="#FF8B5B"
          color="#fff"
          borderRadius={0}
          fontSize="26px"
          _hover={{
            bg: "#ff9d74",
            color: "#000",
          }}
        >
          На вынос
        </Button>
        <Button
          w="50%"
          h="full"
          bg="#DCEDFF"
          color="#000"
          borderRadius={0}
          fontSize="26px"
          _hover={{
            bg:"#a8bacc",
            color:"#fff"
          }}
        >
          В заведении
        </Button>
      </HStack>
    );
  };