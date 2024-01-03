import React, { useEffect, useState } from "react";
import "../../../scss/index.scss";
import PrintServices from '../../../services/PrintServices';

interface HomepageBanner {
  url: string;
  title: string;
  // Add other properties as needed
}

const NavbarImage: React.FC = () => {
  const componentName = 'navbarImage';
  const [image, setImage] = useState<HomepageBanner | null>(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getHomepageImageBanner();
    }

    fetchPrint().then(value => {
      setImage(value.data.homepageCollection.items[0].homepageBanner);
    });
  }, []);

  return (
    <div className={componentName}>
      <div className={`${componentName}__wrapper`}>
        <img src={image?.url || ''} className={`${componentName}__image`} alt={image?.title || ''} />
      </div>
    </div>
  );
};

export default NavbarImage;
