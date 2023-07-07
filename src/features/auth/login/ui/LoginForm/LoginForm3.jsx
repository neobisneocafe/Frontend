import { login } from "@/app/appStore";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginForm3() {
  const navigate = useNavigate();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const dispatch = useDispatch();

  const handleFirstNameChange = (event) => {
    setUserFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setUserLastName(event.target.value);
  };

  const handleLoginSubmit = () => {
    dispatch(login({firstname: userFirstName, lastname: userLastName}))
    navigate("orders")
  };
  

  return (
    <Box p={9} as="form">
      <VStack spacing={6}>
        <FormControl>
          <FormLabel fontWeight={600} textAlign={"center"} color="#8F8F8F">
            Имя
          </FormLabel>
          <Input
            type="text"
            placeholder="Как вас зовут?"
            textAlign="center"
            minHeight={70}
            bg="#EDEDED"
            value={userFirstName}
            onChange={handleFirstNameChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={600} textAlign={"center"} color="#8F8F8F">
            Фамилия
          </FormLabel>
          <Input
            type="text"
            placeholder="Ваша фамилия?"
            textAlign="center"
            minHeight={70}
            bg="#EDEDED"
            value={userLastName}
            onChange={handleLastNameChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={600} textAlign={"center"} color="#8F8F8F">
            Дата рождения
          </FormLabel>
          <Input
            type="date"
            placeholder="01.01.1991"
            textAlign="center"
            minHeight={70}
            bg="#EDEDED"
          />
        </FormControl>

        <Button
          w={"100%"}
          minHeight={70}
          borderColor="#FF8B5B"
          bg="#FF8B5B"
          _hover="#e57546"
          color="white"
          variant="outline"
          onClick={handleLoginSubmit}
        >
          Войти
        </Button>
      </VStack>
    </Box>
  );
}
