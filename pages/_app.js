import Image from "next/image";
import LidlLogo from "../public/Lidl-Logo.png";
import Layout from "../components/Layout";
import "../styles/globals.css";
// import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    {/* <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head> */}
    <main>
      <Component {...pageProps} />
    </main>
    <Image src={LidlLogo} width={400} height={400} alt="preview" placeholder="blur" />
  </Layout>
);

export default MyApp;
