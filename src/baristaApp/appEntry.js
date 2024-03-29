import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import { appBaristaStore } from "./appStore";

const customTheme = extendTheme({
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#F5F5F5",
      },
    },
  },
});

export const createBaristaApp = () => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <ReduxProvider store={appBaristaStore}>
          <RouterProvider router={appRouter()} />
        </ReduxProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
};
