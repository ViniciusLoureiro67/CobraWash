// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon personalizado */}
        <link rel="icon" href="/cobrawashicone.png" type="image/png" />

        {/* Meta tags extras para reforçar a marca */}
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="CobraWash" />
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
