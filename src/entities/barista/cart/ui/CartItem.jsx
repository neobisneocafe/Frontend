import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  List,
  ListItem,
  Text,
  useNumberInput,
  VStack,
  VisuallyHidden
} from "@chakra-ui/react";

export function CartItem({ dish }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Box>
      <VStack py="20px">
        <Flex w={"full"}>
          <Image src={dish.image} />
          <Flex
            w={"full"}
            direction="column"
            justify={"space-between"}
            pl="16px"
          >
            <Text w={"full"} fontSize={"20px"} fontWeight="700">
              {dish.name}
            </Text>
            <Flex justify={"space-between"}>
              {dish.notes ? (
                <List
                  color={"#fff"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="end"
                  fontSize="16px"
                  fontWeight="400"
                >
                  <ListItem>{dish.notes.milkType}</ListItem>
                  <ListItem>{dish.notes.syrup}</ListItem>
                </List>
              ) : (
                <VisuallyHidden>No Notes</VisuallyHidden>
              )}
              {/* <List color={"#fff"} display="flex" flexDirection="column" justifyContent="end" fontSize="16px" fontWeight="400" >
                <ListItem>
                  {dish.notes.milkType}
                </ListItem>
                <ListItem>
                  {dish.notes.syrup}
                </ListItem>
              </List> */}
              <Flex
                w="40%"
                fontSize="18px"
                color={"#FF8B5B"}
                textAlign="right"
                gap={"12px"}
                flexDirection="column"
                fontWeight="700"
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
                    p={"5px"}
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
            </Flex>
          </Flex>
        </Flex>
      </VStack>
      <Divider borderBottomWidth="2px" opacity={1} borderRadius="30px" />
    </Box>
  );
}
