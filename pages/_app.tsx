import { AppKit } from "@/components/Web3Instance";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "AppKit",
  description: "AppKit Example",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppKit>
        <ToastContainer />
        <Component {...pageProps} />
      </AppKit>
    </>
  );
}
