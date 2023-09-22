import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
// import CookieConsentComponent from "../utils/cookie/CookieConsentComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <script
        defer
        data-domain="blog.cuvar.dev"
        type="text/plain"
        data-cookiecategory="analytics"
        src="https://plausible.io/js/script.js"
      ></script>
      <script
        defer
        src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.9.2/dist/cookieconsent.js"
      ></script>
      <script defer src="cookieconsent-init.js"></script>
    </>
  );
}
