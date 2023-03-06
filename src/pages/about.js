import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutServices from "../services/AboutServices";
import "../scss/pages/about.scss";
import { Helmet } from "react-helmet";
// import favicon from '../images/favicon-256x256.png';

export default function About() {
  const [aboutPic, setAboutPic] = useState(null);
  const [aboutText, setAboutText] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      return AboutServices.getAboutData();
    }
    fetchAbout().then(value => {
      setAboutPic(value.data.aboutContentCollection.items[0].aboutPicture.url);
      setAboutText(value.data.aboutContentCollection.items[0].aboutText);
    })
  });
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <description></description>
        <link
            rel='icon'
            type='image/png'
            // href={favicon}
            sizes='32x32'
          />
      </Helmet>
      <Header />
      <div className="about is--body">
      </div>
      <Footer />
    </div>
  );
}
