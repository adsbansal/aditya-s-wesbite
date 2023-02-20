import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import {DefaultSeo} from 'next-seo';
import { Analytics } from '@vercel/analytics/react';

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
              site: '',
              cardType: 'summary',
          }}
      />
      <Head>
      {/* make this right */}
        <title> Adi's Corner </title> 
        <link rel="icon" type="image/x-icon" sizes="48x48" href="images/favicon2.ico" />
        <meta name="google-site-verification" content="B1sqf_k9wB6mxC7ykNyDyK3GJgwBjlyBbeFYsY4rkPA" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
