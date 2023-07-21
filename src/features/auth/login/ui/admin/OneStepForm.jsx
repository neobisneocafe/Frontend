import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function OneStepForm() {
  const navigate = useNavigate()
  return (
    <Box
    m={4}
      p={9}
      bg="#FEFEFE"
      borderRadius={20}
      maxWidth={"614px"}
      maxHeight={"548px"}
      // m="10% auto"
      overflow={"hidden"}
      textAlign={"center"}
    >
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="72px"
        fontWeight={700}
      >
        Вход
      </Heading>
      <Stack spacing={6} my={12}>
        <FormControl id="email">
          <Input
            type="email"
            placeholder="Логин"
            textAlign={"center"}
            minHeight={66}
            bg="#EDEDED"
            // color="#C1C1C3"
            fontWeight={600}
            border={"none"}
          />
        </FormControl>
        <FormControl id="password">
          <Input
            type="password"
            placeholder="Пароль"
            textAlign={"center"}
            minHeight={66}
            bg="#EDEDED"
            // color="#C1C1C3"
            fontWeight={600}
            border={"none"}
          />
        </FormControl>
      </Stack>
        <Button
        mb={6}
          type="submit"
          w={"100%"}
          minHeight={70}
          bg="#5C7994"
          border={"none"}
          _hover={{background:"#86add1"}}
          color="white"
          variant="outline"
          onClick={()=>navigate("/admin/menu")}
        >
          Войти
        </Button>
    </Box>
  );
}
