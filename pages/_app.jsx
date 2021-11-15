import { createContext } from "react";
import App from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { AnimatePresence } from "framer-motion";
import { fetchAPI } from "../lib/api";
import { Layout } from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const queryClient = new QueryClient();
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  const router = useRouter();

  const showLayout =
    router.pathname === "/article/[slug]" ||
    router.pathname === "/drivers/[driver]"
      ? false
      : true;
  return (
    <>
      <GlobalContext.Provider value={global}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </QueryClientProvider>
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
