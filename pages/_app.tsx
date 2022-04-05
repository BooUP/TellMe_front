import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global-styles";
import { theme } from "../styles/theme";
import Layout from "./layout";
import { wrapper } from "../store";
import { prefix } from "../config";
import { TellMeProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TellMeProvider value={{ prefix }}>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </TellMeProvider>
  );
}
export default wrapper.withRedux(MyApp);
