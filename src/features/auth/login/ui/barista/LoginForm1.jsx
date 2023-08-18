import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "@/baristaApp/appStore";
import instance, { endpoints } from "@/shared/api/apiConfig";

export function LoginForm1({ nextStep, setPhoneNumber }) {
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const dispatch = useDispatch();

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    setPhoneNumberValue(input);
  };

  const handleNext = async () => {
    const formattedPhoneNumber = `996${phoneNumberValue}`;
    setPhoneNumber(formattedPhoneNumber);
    dispatch(login({ phoneNumber: formattedPhoneNumber }));

    try {
      const response = await instance.post(endpoints.baristaSendCode, {
        phoneNumber: formattedPhoneNumber,
      });
      const { access_token, refreshToken } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refreshToken);

      if (response.status === 201) {
        nextStep();
      }
    } catch (error) {
      console.error("Error sending verification code", error);
    }
  };

  //Formik settings
  const validationSchema = Yup.object({
    phoneNumber: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: handleNext,
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;

  return (
    <Box p={9} as="form" onSubmit={handleSubmit}>
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="72px"
        fontWeight={700}
        mb="2%"
      >
        Вход
      </Heading>

      <Text textAlign={"center"} fontSize="24px" fontWeight={700}>
        Введите номер телефона, на который <br /> придет код
      </Text>

      <VStack spacing={6} mt={8}>
        <FormControl isInvalid={errors.phoneNumber && touched.phoneNumber}>
          <FormLabel fontWeight={600} textAlign={"center"} color="#8F8F8F">
            Номер телефона
          </FormLabel>
          <InputGroup>
            <InputLeftAddon
              children="+996"
              minHeight={70}
              border={"none"}
              bg="#EDEDED"
              width={"43%"}
              justifyContent="right"
              p={0}
            />
            <Input
              type="tel"
              placeholder="555-55-55-55"
              justifyContent="left"
              maxLength={28}
              minHeight={70}
              bg="#EDEDED"
              border={"none"}
              boxShadow="none !important"
              p="0"
              pl={"2%"}
              {...getFieldProps("phoneNumber")}
              value={phoneNumberValue}
              onChange={handlePhoneNumberChange}
            />
          </InputGroup>
          {errors.phoneNumber && touched.phoneNumber && (
            <Text color="red" fontSize="sm" mt={1}>
              {errors.phoneNumber}
            </Text>
          )}
        </FormControl>

        <Button
          type="submit"
          w={"100%"}
          minHeight={70}
          bg="#FF8B5B"
          borderColor="#FF8B5B"
          _hover="#e57546"
          color="white"
          variant="outline"
          isDisabled={!phoneNumberValue || phoneNumberValue.length < 9}
          onClick={handleNext}
        >
          Получить код
        </Button>
      </VStack>
    </Box>
  );
}
