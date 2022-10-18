import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CryptoNews</title>
        <link rel="icon" href="/btc-logo.png" />
      </Head>
      <div className="bg-[#ecf1f8] dark:bg-[#0f172a] font-roboto overflow-hidden">
        <ThemeProvider attribute="class">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
