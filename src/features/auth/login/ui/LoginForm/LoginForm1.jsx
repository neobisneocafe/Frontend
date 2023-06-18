import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';


export function LoginForm1({ nextStep, setPhoneNumber }) {
  const [phoneNumberValue, setPhoneNumberValue] = useState('')

  const handleNext = () => {
    setPhoneNumber(phoneNumberValue); 
    nextStep();
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumberValue(event.target.value); 
  };
  return (
    <Box
      p={9}
      as="form">
        <Heading w="100%" textAlign={'center'} fontSize='72px' fontWeight={700} mb="2%">
          Вход
        </Heading>


        <Text 
          textAlign={'center'} 
          fontSize='24px' 
          fontWeight={700}>Введите номер телефона, на который <br /> придет код
        </Text>

        <VStack spacing={6} mt={8}>
          <FormControl>
            <FormLabel fontWeight={600} textAlign={'center'} color='#8F8F8F'>
              Номер телефона
            </FormLabel>
            <Input 
              type="tel" 
              placeholder="(555) 555 555" 
              textAlign="center" 
              minHeight={70} 
              bg='#EDEDED'
              value={phoneNumberValue}
              onChange={handlePhoneNumberChange}
              />
          </FormControl>

          <Button
                w={'100%'}
                minHeight={70}
                // onClick={nextStep}
                onClick={handleNext}
                bg='#FF8B5B'
                borderColor = '#FF8B5B'
                _hover='#e57546'
                color='white'
                variant="outline">
                Получить код
            </Button>
          </VStack>
    </Box>
  );
};