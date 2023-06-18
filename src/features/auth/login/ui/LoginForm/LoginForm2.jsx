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
  
  
  export function LoginForm2({ nextStep, phoneNumber }) {
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
            fontWeight={700}>Код подтверждения был отправлен на номер <br /> {phoneNumber}
          </Text>

          <VStack spacing={6}>
            <FormControl mt={'32px'}>
              <FormLabel fontWeight={600} textAlign={'center'} color='#8F8F8F'>
                Код из СМС
              </FormLabel>
              <Input type="number" placeholder="0 0 0 0" textAlign="center" minHeight={70} bg='#EDEDED' />
            </FormControl>

            <Button
                w={'100%'}
                minHeight='70px'
                onClick={nextStep}
                borderColor = '#FF8B5B'
                bg='#FF8B5B'
                _hover='#e57546'
                color='white'
                variant="outline">
                Войти
            </Button>

            <Button
                w={'100%'}
                minHeight='20px'
                borderColor = 'unset'
                bg='inherit'
                _hover='unset'
                color='#8F8F8F'
                variant="unstyled">
                Отправить повторно
            </Button>

          </VStack>
      </Box>
    );
  };