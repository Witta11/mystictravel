import React, { useEffect, useState } from "react";
import "../scss/index.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPreviewElement from "../components/BlogPreviewElement"
import PrintServices from '../services/PrintServices';
import { Helmet } from "react-helmet"
// import favicon from '../images/favicon-256x256.png';
import { navigate } from 'gatsby';

const IndexPage = () => {
  const componentName = 'home-page';
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getHomepageImageBanner();
    }

    fetchPrint().then(value => {
      setImage(value.data.homepageCollection.items[0].homepageBanner);
    })
  });

  const goToListing = () => {
    navigate('/listing')
  }

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
          <div className={`${componentName}`}>
            <BlogPreviewElement />
          </div>
        </div>
        <Footer />
      </>
    );
};

export default IndexPage;
