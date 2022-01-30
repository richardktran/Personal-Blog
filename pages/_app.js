import '../styles/globals.css'
import Layout from '../layouts'
import Fonts from '../components/fonts'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
