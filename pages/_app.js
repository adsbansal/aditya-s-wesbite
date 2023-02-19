import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Adi's Corner </title>
        <link rel="icon" type="image/x-icon" sizes="48x48" href="images/favicon2.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
