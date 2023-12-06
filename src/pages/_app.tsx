import { store } from "@/store";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
