import App from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { Layout } from "../components/Layout";

//Store Strapi Global object in context
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
        {showLayout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
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
