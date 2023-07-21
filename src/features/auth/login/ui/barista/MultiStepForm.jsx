import React, { useState } from 'react';
import {
  Box,
  Text,
  Stack,
  IconButton,
  Flex,
} from '@chakra-ui/react';

import { ArrowBackIcon} from '@chakra-ui/icons'

import { LoginForm1 } from './LoginForm1';
import { LoginForm2 } from './LoginForm2';
import { LoginForm3 } from './LoginForm3';

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');

  const getStepDescription = () => {
    if (step === 1) {
      return 'Укажите номер телефона';
    } else if (step === 2) {
      return 'Введите код подтверждения';
    } else if (step === 3) {
      return 'Заполните личные данные';
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  
  return (
    <>
        <Box
          bg='#FEFEFE'
          borderRadius={20}
          maxWidth={614}
          maxHeight={628}
          m="5% auto"
          overflow={'hidden'}
          textAlign={'center'} 
        >

        <Stack 
          textAlign={'center'} 
          bg='#FF8B5B' 
          color='#FFF'
          m={0}
          py={'16px'}
          w="100%">
            {step !== 1 ? (
                <Flex align="center" justify="flex-start">
                    <IconButton 
                        bg={'inherit'}
                        _hover={'inherit'}
                        color='#fff'
                        onClick={handlePrevStep}
                        icon={<ArrowBackIcon />} 
                    />
                    <Text fontSize='24px' fontWeight={700} ml='13rem' >Шаг {step} из 3</Text>
                </Flex>
                ) : 
                <Text fontSize='24px' fontWeight={700} >Шаг {step} из 3</Text>
            }
            <Text fontSize='18px' fontWeight={600}>{getStepDescription()}</Text>
        </Stack>
            
        {
          step === 1 ? <LoginForm1 nextStep = {handleNextStep} setPhoneNumber={setPhoneNumber}/> : 
          step === 2 ? <LoginForm2 nextStep = {handleNextStep} phoneNumber={phoneNumber}/> : 
          <LoginForm3 />
        }

        </Box>
    </>
  );
}