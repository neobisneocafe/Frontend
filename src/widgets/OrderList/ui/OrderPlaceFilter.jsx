import { Button, HStack } from "@chakra-ui/react";

export function OrderPlaceFilter({ activeFilter, setActiveFilter }) {
  const handleFilterClick = (place) => {
    setActiveFilter(place === activeFilter ? "" : place);
  };

  return (
    <HStack w="full" gap={0} h="87px">
      <Button
        w="50%"
        h="full"
        bg={activeFilter === "На вынос" ? "#FF8B5B" : "#DCEDFF"}
        color={activeFilter === "На вынос" ? "#fff" : "#000"}
        borderRadius={0}
        fontSize="26px"
        _hover={{
        }}
        onClick={() => handleFilterClick("На вынос")}
      >
        На вынос
      </Button>
      <Button
        w="50%"
        h="full"
        bg={activeFilter === "В заведении" ?   "#FF8B5B" : "#DCEDFF"}
        color={activeFilter === "В заведении" ?   "#fff" : "#000"}
        borderRadius={0}
        fontSize="26px"
        _hover={{
        }}
        onClick={() => handleFilterClick("В заведении")}
      >
        В заведении
      </Button>
    </HStack>
  );
}
