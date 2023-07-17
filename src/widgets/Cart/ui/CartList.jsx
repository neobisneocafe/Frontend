import { CartItem } from "@/entities/cart";
import { CartItems } from "@/shared/lib";
import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";

export function CartList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        position="absolute"
        right={5}
        bottom={5}
        width="420px"
        height="80px"
        background="#FF8B5B"
        color="white"
        display={"flex"}
        justifyContent="space-between"
        borderRadius={"50px"}
        fontSize="26px"
        py="24px"
        px="32px"
        _hover={{ background: "#FFC1A8" }}
      >
        <Text>Заказ на вынос</Text>
        <Text>0 сом</Text>
      </Button>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={"#023462"}
          color={"#fff"}
          px={"32px"}
          maxWidth={"495px"}
        >
          <DrawerHeader
            justifyContent={"space-between"}
            display={"flex"}
            px={0}
            alignItems={"center"}
          >
            <VisuallyHidden position={"unset"}>empty</VisuallyHidden>
            <Text fontSize="26px" fontWeight={600}>
              Заказ на вынос
            </Text>
            <CloseButton size={"lg"} onClick={onClose} />
          </DrawerHeader>
          <DrawerBody
            px={0}
            display="flex"
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Container>
              {CartItems.map((dish) => (
                <CartItem key={dish.dish_id} dish={dish} />
              ))}
              <Button
                height={"60px"}
                mt={"20px"}
                w={"full"}
                variant="outline"
                color="#FF8B5B"
                borderColor="#FF8B5B"
                borderRadius="10px"
                _hover={{
                    background:"#FF8B5B",
                    color:"#fff"
                }}
              >
                Добавить
              </Button>
            </Container>
            <Container w={"full"}>
              <Box display={"flex"} justifyContent="space-between" w={"full"}>
                <Text>Итого</Text>
                <Text>380 сом</Text>
              </Box>
              <Button
                height={"60px"}
                mt={"24px"}
                mb={"32px"}
                w={"full"}
                background="#FF8B5B"
                color="white"
                borderRadius="10px"
                _hover={{ background: "#FFC1A8" }}
              >
                Заказать
              </Button>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
