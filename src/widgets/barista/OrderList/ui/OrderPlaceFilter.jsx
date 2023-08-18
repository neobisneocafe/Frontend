import { Button, HStack } from "@chakra-ui/react";

export function OrderPlaceFilter({ activeFilter, setActiveFilter }) {

  const handleFilterClick = (is_takeaway) => {
    setActiveFilter(is_takeaway);
  };

  return (
    <HStack w="full" gap={0} h="87px">
      <Button
        w="50%"
        h="full"
        bg={activeFilter  ? "#FF8B5B" : "#DCEDFF"}
        color={activeFilter ? "#fff" : "#000"}
        borderRadius={0}
        fontSize="26px"
        _hover={{
        }}
        onClick={() => handleFilterClick(true)}
      >
        На вынос
      </Button>
      <Button
        w="50%"
        h="full"
        bg={activeFilter ?    "#DCEDFF": "#FF8B5B"}
        color={activeFilter ? "#000":  "#fff" }
        borderRadius={0}
        fontSize="26px"
        _hover={{
        }}
        onClick={() => handleFilterClick(false)}
      >
        В заведении
      </Button>
    </HStack>
  );
}
