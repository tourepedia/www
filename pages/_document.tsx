import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import appConfig from './../config/app'
import services from './../config/services'
import { ThemeConsumer } from './../components/ThemeProvider'

function Link({ href, ...props }) {
  return <link href={appConfig.basePath + href} {...props} />
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="google-site-verification"
            content={services.ga.googleSiteVerification}
          />
          <ThemeConsumer>
            {theme => <meta name="theme-color" content={theme.primary} />}
          </ThemeConsumer>
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />

          <Link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <Link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <Link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
