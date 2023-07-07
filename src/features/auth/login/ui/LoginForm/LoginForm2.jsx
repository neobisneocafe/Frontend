import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function LoginForm2({ nextStep }) {
  const code = 3333;

  const [secretCodeValue, setSecretCodeValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const phone = useSelector((state) => state.user.value.phoneNumber);

  const handleNext = () => {
    if (secretCodeValue === code.toString()) {
      nextStep();
    } else {
      setErrorMessage("Неправильный код");
    }
  };

  const handleSecretCodeChange = (event) => {
    const code = event.target.value;
    setSecretCodeValue(code);
    setErrorMessage("");
  };

  const isInvalid = errorMessage !== "";

  const resendTimer = 10;
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimerValue, setResendTimerValue] = useState(resendTimer);

  const handleResendClick = () => {
    setSecretCodeValue("");
    setIsResendDisabled(true);
    setResendTimerValue(resendTimer);
  };

  useEffect(() => {
    let intervalId;

    if (resendTimerValue > 0) {
      intervalId = setInterval(() => {
        setResendTimerValue((prevValue) => prevValue - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [resendTimerValue]);

  const minutes = Math.floor(resendTimerValue / 60);
  const seconds = resendTimerValue % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <Box p={9} as="form">
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
        Код подтверждения был отправлен на номер <br /> +996 {phone}
      </Text>

      <VStack spacing={6} my={"25px"}>
        <FormControl isInvalid={isInvalid}>
          <FormLabel
            fontWeight={600}
            textAlign={"center"}
            color={isInvalid ? "red" : "#8F8F8F"}
          >
            {isInvalid ? "Неправильный код" : "Код из СМС"}
          </FormLabel>
          <Input
            type="number"
            placeholder="0 0 0 0"
            textAlign="center"
            minHeight={70}
            bg="#EDEDED"
            maxLength={4}
            value={secretCodeValue}
            onChange={handleSecretCodeChange}
          />
        </FormControl>

        <Button
          w={"100%"}
          minHeight="70px"
          // onClick={nextStep}
          borderColor="#FF8B5B"
          bg="#FF8B5B"
          _hover="#e57546"
          color="white"
          variant="outline"
          isDisabled={
            (!secretCodeValue || secretCodeValue.length < 4) && isResendDisabled
          }
          onClick={handleNext}
        >
          Войти
        </Button>

        <Button
          w={"100%"}
          minHeight="20px"
          borderColor="unset"
          bg="inherit"
          _hover="unset"
          color={"#8F8F8F"}
          variant="unstyled"
          // isDisabled={isResendDisabled}
          onClick={handleResendClick}
        >
          {isResendDisabled
            ? `Отправить ещё раз через ${formattedTime}`
            : "Отправить повторно"}
        </Button>
      </VStack>
    </Box>
  );
}
