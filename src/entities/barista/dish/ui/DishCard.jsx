import { addToCart } from "@/baristaApp/cartSlice";
import instance, { endpoints } from "@/shared/api/apiConfig";
import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function DishCard({ dish }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [productList, setProductList] = useState([]);
  const [productNames, setProductNames] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchProductList() {
      try {
        const { data } = await instance.get(endpoints.productList);
        setProductList(data);
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    }
    fetchProductList();
  }, []);

  useEffect(() => {
    const products = dish.products;
    const productInfoArray = products.map((productId) => {
      const product = productList.find((item) => item.id === productId);
      return product
        ? `${product.name} - ${product.weight} г/мл`
        : "loading...";
    });
    setProductNames(productInfoArray);
  }, [dish.products, productList]);


  return (
    <>
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
          <Heading fontWeight={700} fontSize="20px" onClick={onOpen}>
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
            zIndex={100}
            _hover={{background:"#FF8B5B"}}
            onClick={() => dispatch(addToCart(dish))}
          />
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          my={"auto"}
          borderRadius={"30px"}
          minW={"600px"}
          padding={"16px"}
        >
          <ModalHeader p={0} pl={3} fontWeight={700} fontSize="32px" mb="24px">
            {dish.name}
          </ModalHeader>
          <ModalCloseButton fontSize={"xl"} top={4} right={4} />
          <ModalBody>
            <VStack>
              <Flex className="dish_description" gap={4}>
                <Image src={dish.image} alt={dish.name} />
                <Text fontSize={"18px"} fontWeight="600">
                  {dish.description}
                </Text>
              </Flex>
              <Box w={"full"} textAlign={"left"} my="32px">
                <Text fontSize={"22px"} fontWeight={700}>
                  Основные ингредиенты:
                </Text>
                <UnorderedList id="dish_decs">

                  {productNames.length > 0 ? 
                  productNames.map((productInfo, i) => (
                    <ListItem
                      fontSize={"20px"}
                      fontWeight={600}
                      key={i}
                    >
                      {productInfo}
                    </ListItem>
                  )) :
                  <ListItem>
                  <Stack>
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                  </Stack>
                </ListItem>
                  }
                </UnorderedList>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              height="55px"
              w="full"
              border="none"
              color="#fff"
              background="rgba(255, 139, 91, 1)"
              fontWeight={700}
              fontSize="20px"
              borderRadius={"15px"}
              onClick={() => dispatch(addToCart(dish.name, dish.price, dish.image))}
            >
              Добавить в заказ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
