import React, { useEffect, useState } from "react";
import "../../../scss/index.scss";
import PrintServices from '../../../services/PrintServices';

const NavbarImage = () => {
  const componentName = 'navbarImage';
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getHomepageImageBanner();
    }

    fetchPrint().then(value => {
      setImage(value.data.homepageCollection.items[0].homepageBanner);
    })
  });

  return (
    <div className={`${componentName}`}>
      <div className={`${componentName}__wrapper`}>
        <img src={image && image.url} className={`${componentName}__image`} alt={image && image.title}/>
      </div>
    </div>
  );
};

export default NavbarImage;
