import { useState } from 'react';
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch} from 'react-redux';
import { login } from '@/baristaApp/appStore';

export function LoginForm1({ nextStep, setPhoneNumber }) {
  const [phoneNumberValue, setPhoneNumberValue] = useState('');

  const dispatch = useDispatch()

  const handleNext = () => {
    setPhoneNumber(phoneNumberValue);
    dispatch(login({phoneNumber: phoneNumberValue}))
    nextStep();
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    const formattedInput = input.replace(/^(\d{3})(\d{3})(\d{3})$/, '($1) $2 $3');
    setPhoneNumberValue(formattedInput);
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema,
    onSubmit: handleNext,
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;

  return (
    <Box p={9} as="form" onSubmit={handleSubmit}>
      <Heading w="100%" textAlign={'center'} fontSize="72px" fontWeight={700} mb="2%">
        Вход
      </Heading>

      <Text textAlign={'center'} fontSize="24px" fontWeight={700}>
        Введите номер телефона, на который <br /> придет код
      </Text>

      <VStack spacing={6} mt={8}>
        <FormControl isInvalid={errors.phoneNumber && touched.phoneNumber}>
          <FormLabel fontWeight={600} textAlign={'center'} color="#8F8F8F">
            Номер телефона
          </FormLabel>
          <Input
            type="tel"
            placeholder="(555) 555 555"
            textAlign="center"
            // maxLength={9}
            minHeight={70}
            bg="#EDEDED"
            {...getFieldProps('phoneNumber')}
            value={phoneNumberValue}
            onChange={handlePhoneNumberChange}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <Text color="red" fontSize="sm" mt={1}>
              {errors.phoneNumber}
            </Text>
          )}
        </FormControl>

        <Button
          type="submit"
          w={'100%'}
          minHeight={70}
          bg="#FF8B5B"
          borderColor="#FF8B5B"
          _hover="#e57546"
          color="white"
          variant="outline"
          isDisabled={!phoneNumberValue || phoneNumberValue.length < 13}
          onClick={handleNext}
        >
          Получить код
        </Button>
      </VStack>
    </Box>
  );
}

