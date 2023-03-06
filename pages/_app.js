import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'
import LayoutComponent from '../components/Layout.js'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ChakraProvider>

    </>
  )
}
