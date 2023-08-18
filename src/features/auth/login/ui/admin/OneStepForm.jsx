import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  InputRightElement,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance, { endpoints } from "@/shared/api/apiConfig";

export function OneStepForm() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleClick = () => setShow(!show);

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUsernameChange = (event) => {
    const input = event.target.value;
    setUsernameValue(input);
    setLoginError(false); 
  };

  const handlePasswordChange = (event) => {
    const input = event.target.value;
    setPasswordValue(input);
    setLoginError(false); 
  };

  const handleLogin = async () => {
    try {
      const response = await instance.post(
        endpoints.adminAuth,
        {
          username: usernameValue,
          password: passwordValue,
        }
      );


      const { access_token, refreshToken } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refreshToken);

      navigate("/admin/menu");
    } catch (error) {
      console.error("Login failed:", error.message);
      setLoginError(true); 
    }
  };

  return (
    <Box m={4} p={9} bg="#FEFEFE" borderRadius={20} maxWidth={"614px"} maxHeight={"548px"} overflow={"hidden"} textAlign={"center"}>
      <Heading w="100%" textAlign={"center"} fontSize="72px" fontWeight={700}>
        Вход
      </Heading>
      <Stack spacing={6} my={12}>
      {loginError && <Text color="red">Логин или пароль неверный, попробуйте еще раз</Text>}
        <FormControl id="email">
          <Input
            type="text"
            placeholder="Логин"
            textAlign={"center"}
            minHeight={66}
            bg="#EDEDED"
            pattern="[A-Za-z]"
            fontWeight={600}
            border={loginError ? "2px solid red" : "none"} 
            value={usernameValue}
            onChange={handleUsernameChange}
          />
        </FormControl>
        <FormControl id="password">
          <InputGroup size="md">
            <Input
              type={show ? "text" : "password"}
              placeholder="Пароль"
              textAlign={"center"}
              minHeight={66}
              bg="#EDEDED"
              fontWeight={600}
              border={loginError ? "2px solid red" : "none"} 
              value={passwordValue}
              onChange={handlePasswordChange}
            />
            <InputRightElement onClick={handleClick} width="4.5rem" height={"full"}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
      <Button
        mb={6}
        type="submit"
        w={"100%"}
        minHeight={70}
        bg="rgba(0, 49, 93, 1)"
        border={"none"}
        _hover={{ background: "#86add1" }}
        color="white"
        variant="outline"
        isDisabled={!usernameValue || !passwordValue}
        onClick={handleLogin} 
      >
        Войти
      </Button>
    </Box>
  );
}
