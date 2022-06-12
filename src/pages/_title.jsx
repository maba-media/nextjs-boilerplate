import Head from 'next/head'

export default function Title({ title }) {
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

export async function getStaticProperties({ params: parameters = {} } = {}) {
  return {
    props: {
      title: `${parameters.title}`,
    },
  }
}
