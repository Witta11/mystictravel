import React, { useEffect, useState } from "react";
import PrintServices from '../../services/PrintServices';

const ThreeImagesCtaElement = () => {
  const componentName = 'three-element';
  const [threeElementHeadline, setThreeElementHeadline] = useState(null);
  const [threeElementSubHeadline, setThreeElementSubHeadline] = useState(null);
  const [threeElementImageLeft, setThreeElementImageLeft] = useState(null);
  const [threeElementImageCenter, setThreeElementImageCenter] = useState(null);
  const [threeElementImageRight, setThreeElementImageRight] = useState(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getThreeImagesCTAElement();
    }

    fetchPrint().then(value => {
      setThreeElementHeadline(value.data.threeImagesCtaElementCollection.items[0].headline);
      setThreeElementSubHeadline(value.data.threeImagesCtaElementCollection.items[0].subheadline);
      setThreeElementImageLeft(value.data.threeImagesCtaElementCollection.items[0].imageLeft);
      setThreeElementImageCenter(value.data.threeImagesCtaElementCollection.items[0].imageCenter);
      setThreeElementImageRight(value.data.threeImagesCtaElementCollection.items[0].imageRight);
    })
  });


  return (
    <div className={`${componentName}__wrapper`}>
      <div className={`${componentName}__text`}>
          <div className={`${componentName}__title`}>{threeElementHeadline}</div>
          <div className={`${componentName}__sub-title`}>{threeElementSubHeadline}</div>
      </div>
      <div className={`${componentName}__image-wrapper`}>
        {/* <Link to="/contact" className="footer__link"> */}
          <img
            src={threeElementImageLeft && threeElementImageLeft.url}
            className={`${componentName}__image`}
            alt={threeElementImageLeft && threeElementImageLeft.title}
          />
        {/* </Link> */}
        <img
          src={threeElementImageCenter && threeElementImageCenter.url}
          className={`${componentName}__image`}
          alt={threeElementImageCenter && threeElementImageCenter.title}
        />
        <img
          src={threeElementImageRight && threeElementImageRight.url}
          className={`${componentName}__image`}
          alt={threeElementImageRight && threeElementImageRight.title}
        />
      </div>
    </div>
  );
};

export default ThreeImagesCtaElement;
