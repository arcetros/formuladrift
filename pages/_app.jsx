import { createContext } from 'react'
import App from 'next/app'
import 'tailwindcss/tailwind.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { AnimatePresence } from 'framer-motion'
import { fetchAPI } from '../lib/api'
import { Header, Footer } from '../components'
import '/styles/globals.css'

const queryClient = new QueryClient()
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps
  return (
    <>
      <GlobalContext.Provider value={global}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </QueryClientProvider>
      </GlobalContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  const global = await fetchAPI('/global')
  return { ...appProps, pageProps: { global } }
}

export default MyApp
