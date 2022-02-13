import '../styles/globals.css'
import Layout from '../layouts'
import Fonts from '../components/fonts'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
