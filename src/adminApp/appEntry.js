import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { AdminRouter} from "./appRouter";
import { appAdminStore } from "./appStore";

const customTheme = extendTheme({
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#FEFEFE",
      },
    },
  },
});

export const createAdminApp = () => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <ReduxProvider store={appAdminStore}>
          <RouterProvider router={AdminRouter()} />
        </ReduxProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
};
