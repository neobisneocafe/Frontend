import { removeFromCart } from "@/baristaApp/cartSlice";
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
  CloseButton,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export function CartItem({dish}) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const dispatch = useDispatch()


  return (
      <Box>
      <VStack py="20px">
        <Flex w={"full"}>
          <CloseButton position={"absolute"} right={12} onClick={onOpen}/>
          <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Удаление позиции
            </AlertDialogHeader>

            <AlertDialogBody>
              Вы точно хотите удалить "{dish.name}" из корзины?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Нет
              </Button>
              <Button colorScheme='red' onClick={() => dispatch(removeFromCart({id: dish.id}))} ml={3}>
                Да, удалить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
          <Image src={dish.image} width="104px" height={"104px"} borderRadius="24px"/>
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
                <Box visibility={"hidden"} >No Notes</Box>
              )}
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
