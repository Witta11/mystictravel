import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrintServices from '../services/PrintServices';
import "../scss/pages/yoga.scss";
import { Helmet } from "react-helmet";
// import favicon from '../images/favicon-256x256.png';

function Yoga() {

  useEffect(() => {
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <link
            rel='icon'
            type='image/png'
            // href={favicon}
            sizes='32x32'
          />
      </Helmet>
      <Header />
      <div className="">

      </div>
      <Footer />
    </div>
  );
}

export default Yoga;
