import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class Layout extends Component {
  render() {
    const { helmet } = this.props
    return <html>
      <head>
        <title>{this.props.title}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
        <meta name="keywords" content={this.props.keywords}></meta>
        <meta name="description" content={this.props.description}></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        <link rel="stylesheet" href="/public/css/publicpack.css"></link>
        { helmet && helmet.link.toComponent() }
        <link rel="stylesheet" href="/public/js/swiper-4.3.3.min.css"></link>
      </head>
      <body style={{paddingTop: '60px'}}>
        <div id="app">{this.props.children}</div>
      </body>
      <script src="/public/js/swiper-4.3.3.min.js"></script>
      <script src="/public/js/my.js"></script>
    </html>;
  }
}
