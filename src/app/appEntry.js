import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter';

const customTheme = extendTheme({
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
  },
});

export const createApp = () => {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={appRouter()}/>
      </ChakraProvider>
    </React.StrictMode>
  );
};