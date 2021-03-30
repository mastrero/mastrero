import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { NextSeo } from 'next-seo';
import {} from '@emotion/styled';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>ArunKumar Nadikattu | Mastrero</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="vieport" />
          <NextSeo
            title="ArunKumar Nadikattu | Mastrero"
            description="Hello 👋, I'm ArunKumar Nadikattu. a passionate Full Stack Web Developer who loves coding, designing and building tech products and tools."
            canonical="https://mastrero.vercel.app/"
            openGraph={{
              url: 'https://mastrero.vercel.app/',
              title: 'ArunKumar Nadikattu ~ Mastrero',
              description:
                "Hello 👋, I'm ArunKumar Nadikattu. a passionate Full Stack Web Developer who loves coding, designing and building tech products and tools.",
              images: [
                {
                  url: 'https://mastrero.vercel.app/ak_stick.png',
                },
              ],
              site_name: 'ArunKumar Nadikattu ~ Mastrero, My Portfolio',
            }}
            twitter={{
              handle: '@mastrero',
              site: '@mastrero',
              cardType: 'summary_large_image',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
