import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => properties =>
            sheet.collectStyles(<App {...properties} />),
        })

      const initialProperties = await Document.getInitialProps(context)
      return {
        ...initialProperties,
        styles: (
          <>
            {initialProperties.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Head>
        <title>{title}</title>
        <meta charSet="utf8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="MABA MEDIA <contato@maba.me>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="MABA MEDIA" />
        <meta name="keywords" content="maba, media, maba media, maba media" />
        <meta name="description" content={`Saiba mais sobre ${title}`} />
        <meta property="og:title" content={`${title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
  }
}

export async function getStaticProperties({ params: parameters = {} } = {}) {
  return {
    props: {
      title: `${parameters.title}`,
    },
  }
}
