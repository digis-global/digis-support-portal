import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Digis Support Portal</title>

        <meta name="theme-color" content="#000" />
        <meta name="description" content="Installable web support request portal for" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/pwa-512x512.png.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
