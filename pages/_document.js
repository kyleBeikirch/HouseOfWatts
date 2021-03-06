import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import AppIcons from '../components/AppIcons';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...page, styleTags, helmet: Helmet.rewind() };
  }

  // should render on <html>
  helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <head>
  helmetHeadComponents() {
    const keys = Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes')
      .map(el => this.props.helmet[el].toComponent())
      .filter(
        el =>
          el.length > 0 ||
          !(Object.keys(el).length === 0 && el.constructor === Object)
      );

    return keys.length ? keys : [];
  }

  render() {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents()}>
        <Head>
          <title>
            {this.props.title && this.props.title !== ''
              ? `${this.props.title} :: House of Watts`
              : 'House of Watts'}
          </title>
          <meta name="robots" content="index,follow" />
          <meta httpEquiv="expires" content="10800" />
          {this.helmetHeadComponents()}
          {AppIcons()}
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900"
            rel="stylesheet"
            key="Montserrat"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
