import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Button,
    VStack,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
  
  
  export function LoginForm3() {
    const navigate = useNavigate()
    return (
      <Box
        p={9}
        as="form">
          <VStack spacing={6}>
            <FormControl>
              <FormLabel fontWeight={600} textAlign={'center'} color='#8F8F8F'>
                Имя
              </FormLabel>
              <Input type="text" placeholder="Как вас зовут?" textAlign="center" minHeight={70} bg='#EDEDED' />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight={600} textAlign={'center'} color='#8F8F8F'>
                Фамилия
              </FormLabel>
              <Input type="text" placeholder="Ваша фамилия?" textAlign="center" minHeight={70} bg='#EDEDED' />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight={600} textAlign={'center'} color='#8F8F8F'>
                Дата рождения
              </FormLabel>
              <Input type="date" placeholder="01.01.1991" textAlign="center" minHeight={70} bg='#EDEDED' />
            </FormControl>

            <Button
                w={'100%'}
                minHeight={70}
                borderColor = '#FF8B5B'
                bg='#FF8B5B'
                _hover='#e57546'
                color='white'
                variant="outline"
                onClick={() => navigate('orders')}>
                Войти
            </Button>
          </VStack>
      </Box>
    );
  };