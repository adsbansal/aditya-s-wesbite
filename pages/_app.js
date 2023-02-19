import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import {DefaultSeo} from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
          title="Adi's Corner"
          description="This is Aditya Bansal's portfolio website aka. his space on the internet. This contains more information on him,
          a list of his projects and a some blogs he's penned down. Website developed by Aditya."
          openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: 'https://www.url.ie/',
              siteName: 'SiteName',
          }}
          twitter={{
              handle: '@adsbansal',
              site: 'adsbansal.org',
              cardType: 'summary',
          }}
      />
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
