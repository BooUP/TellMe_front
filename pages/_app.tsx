import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global-styles';
import {theme} from '../styles/theme';
import Layout from './layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp;
