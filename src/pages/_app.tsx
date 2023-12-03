import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";

import type { AppProps } from "next/app";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
