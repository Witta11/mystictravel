import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBoxSmall from "../components/ProductBoxSmall";
import PrintServices from '../services/PrintServices';
import "../scss/pages/listing.scss";
import { Helmet } from "react-helmet"
// import favicon from '../images/favicon-256x256.png';

function Mystic() {

  useEffect(() => {
    const fetchMysticLevel = async () => {
      return PrintServices.getMysticCategories();
    }

    fetchMysticLevel().then(value => {
      console.log(value.data.categoryItemCollection.items);
    });

  });

  return (
      <>
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
        <div className="wrapper is--body">
          <div className={'mystic'}>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Mystic;
