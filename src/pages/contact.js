import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactServices from "../services/ContactServices";
import "../scss/pages/contact.scss";
import axios from "axios";
import { Helmet } from "react-helmet"
// import favicon from '../images/favicon-256x256.png';

export default function Contact() {
  const componentName = 'contact';
  const [contactInfoTitle, setContactInfoTitle] = useState(null);
  const [contactInfoTextField, setContactInfoTextField] = useState(null);
  const [contactInfoTextField2, setContactInfoTextField2] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      return ContactServices.getContactInfo();
    }
    fetchContact().then(value => {
      setContactInfoTitle(value.data.contactPageCollection.items[0].contactHeader);
      setContactInfoTextField(value.data.contactPageCollection.items[0].contactDescriptionTextfield);
      setContactInfoTextField2(value.data.contactPageCollection.items[0].contactDescriptionTextfield2);
    })
  });

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/d2d4bab2-ffcc-49cb-af27-377696129800",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <>
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
      <div className="wrapper is--body">
        <div className={`${componentName}`}>
          <div className={`${componentName}__form-wrapper`}>
            <div className={`${componentName}__form-title title`}>Write me a message</div>
            <form onSubmit={handleOnSubmit} className={`${componentName}__form`}>
              <input type="email" name="email" placeholder="Your Email"/>
              <input type="text" name="name" placeholder="Your Name"/>
              <textarea rows='6' name="message" placeholder="The Print you wanna order"/>
              <button type="submit" className={`${componentName}__form-btn btn`}>Send</button>
            </form>
          </div>
          <div className={`${componentName}__divider`}></div>
          <div className={`${componentName}__right-box`}>
            <div className={`${componentName}__title title`}>{contactInfoTitle}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
