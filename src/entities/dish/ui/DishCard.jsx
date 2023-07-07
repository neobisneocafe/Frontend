import { AddIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";

export function DishCard({ dish }) {
  return (
    <Card
      w={318}
      h={136}
      flexDirection="row"
      px="20px"
      py="16px"
      justifyContent="space-between"
      borderRadius="15px"
      boxShadow={0}
      _hover={{ bg: "#DCEDFF" }}
      cursor="pointer"
    >
      <Image
        objectFit="cover"
        w={104}
        h={104}
        src={dish.image}
        alt={dish.name}
      />

      <CardBody
        p={0}
        pl="16px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Heading fontWeight={700} fontSize="20px">
          {dish.name}
        </Heading>
        <Text fontWeight={700} fontSize="18px">
          {dish.price} с
        </Text>
      </CardBody>
      <CardFooter p={0} alignItems="end">
        <IconButton
          bg="#FF8B5B"
          color="#fff"
          borderRadius="50%"
          icon={<AddIcon />}
        />
      </CardFooter>
    </Card>
  );
}
