import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export function ProfileEditForm() {
  const user = useSelector((state) => state.user.value);
  
  return (
    <Flex h="80vh" mt="80px" align={"start"} justify={"center"}>
      <Stack
        borderRadius="30px"
        p="32px"
        bg="#FEFEFE"
        w="706px"
        h="417px"
        gap={0}
      >
        <Heading lineHeight="32.74px" fontSize="24px" fontWeight={700}>
          Личные данные
        </Heading>
        <Box pt="24px" pb="40px">
          <HStack pb="32px">
            <FormControl id="name">
              <FormLabel fontWeight="400" color="#8F8F8F">
                Имя
              </FormLabel>
              <Input
              value={user.firstname}
                placeholder="Имя"
                type="text"
                h="50px"
                bg="#F3F5F7"
                border="none"
              />
            </FormControl>
            <FormControl id="lastname">
              <FormLabel fontWeight="400" color="#8F8F8F">
                Фамилия
              </FormLabel>
              <Input
                value={user.lastname}
                placeholder="Фамилия"
                type="text"
                h="50px"
                bg="#F3F5F7"
                border="none"
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl id="phone">
              <FormLabel fontWeight="400" color="#8F8F8F">
                Номер телефона
              </FormLabel>
              <Input
              value={user.phoneNumber}
                placeholder="Номер телефона"
                type="tel"
                h="50px"
                bg="#F3F5F7"
                border="none"
              />
            </FormControl>
            <FormControl id="date">
              <FormLabel fontWeight="400" color="#8F8F8F">
                Дата рождения
              </FormLabel>
              <Input type="date" h="50px" bg="#F3F5F7" border="none" />
            </FormControl>
          </HStack>
        </Box>
        <Button
          variant="outline"
          w="300px"
          h="64px"
          border="2px solid #FF8B5B"
          color="#FF8B5B"
          borderRadius="10px"
          m="0 auto"
          _hover={{
            bg: "#FF8B5B",
            color: "#fff",
          }}
        >
          Редактировать
        </Button>
      </Stack>
    </Flex>
  );
}
