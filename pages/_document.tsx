import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
  
      return initialProps;
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap"
              rel="stylesheet"
            />
            <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
            <link
              rel="shortcut icon"
              href="../assets/img/global/logo.svg"
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
  