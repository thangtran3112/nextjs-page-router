import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * We are able to overwrite some default values, Such as:
 * - lang of html document
 * - Add a div overlay or modal backdrop, etc
 * - Add bootstrap css and boostrap bundled js as well
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
