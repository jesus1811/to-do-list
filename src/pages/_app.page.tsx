import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Store } from "../redux/store";
import { Global} from "@/styled-components";
import { theme } from "@/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
