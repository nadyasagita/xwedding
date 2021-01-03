import '@assets/css/bootstrap.css';
/**
 * list of 3rd party CSS
 */
import '@assets/css/icomoon.css';
import '@assets/css/style.css';
/**
 * Local assets
 */
import Favicon from '@assets/images/wedding-logo.png';
import { node } from 'prop-types';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';


function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Zahid ❤️  Nadya</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:card" content="" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        {/* <link href="https://fonts.googleapis.com/css?family=Sacramento" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
