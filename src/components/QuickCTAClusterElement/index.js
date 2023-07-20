import React, { useEffect, useState } from "react";
import PrintServices from '../../services/PrintServices';

const QuickCTAClusterElement = () => {
  const componentName = 'cta-cluster';
  const [clusterTitle, setClusterTitle] = useState(null);
  const [clusterSubtitle, setClusterSubTitle] = useState(null);
  const [clusterCTAHeadlineOne, setClusterCTAHeadlineOne] = useState(null);
  const [clusterCTAHeadlineTwo, setClusterCTAHeadlineTwo] = useState(null);
  const [clusterCTAHeadlineThree, setClusterCTAHeadlineThree] = useState(null);
  const [clusterCTAImageOne, setClusterCTAImageOne] = useState(null);
  const [clusterCTAImageTwo, setClusterCTAImageTwo] = useState(null);
  const [clusterCTAImageThree, setClusterCTAImageThree] = useState(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getQuickCTAClusterElement();
    }

    fetchPrint().then(value => {
      setClusterTitle(value.data.quickCtaClusterElementCollection.items[0].headline);
      setClusterSubTitle(value.data.quickCtaClusterElementCollection.items[0].subheadline);
      setClusterCTAHeadlineOne(value.data.quickCtaClusterElementCollection.items[0].ctaOneHeadline);
      setClusterCTAHeadlineTwo(value.data.quickCtaClusterElementCollection.items[0].ctaTwoHeadline);
      setClusterCTAHeadlineThree(value.data.quickCtaClusterElementCollection.items[0].ctaThreeHeadline);
      setClusterCTAImageOne(value.data.quickCtaClusterElementCollection.items[0].ctaOneImage);
      setClusterCTAImageTwo(value.data.quickCtaClusterElementCollection.items[0].ctaTwoImage);
      setClusterCTAImageThree(value.data.quickCtaClusterElementCollection.items[0].ctaThreeImage);
    })
  });


  return (
    <div className={`${componentName}__wrapper`}>
      <div className={`${componentName}__text`}>
        <div className={`${componentName}__title`}>{clusterTitle}</div>
        <div className={`${componentName}__sub-title`}>{clusterSubtitle}</div>
      </div>
      <div className={`${componentName}__link-wrapper`}>
        <div className={`${componentName}__link-box`}>
          <div className={`${componentName}__link-title`}>{clusterCTAHeadlineOne}</div>
          <img src={clusterCTAImageOne && clusterCTAImageOne.url} className={`${componentName}__image`} alt={clusterCTAImageOne && clusterCTAHeadlineOne.title}/>
        </div>
        <div className={`${componentName}__link-box`}>
          <div className={`${componentName}__link-title`}>{clusterCTAHeadlineTwo}</div>
          <img src={clusterCTAImageTwo && clusterCTAImageTwo.url} className={`${componentName}__image`} alt={clusterCTAImageTwo && clusterCTAHeadlineTwo.title}/>
        </div>
        <div className={`${componentName}__link-box`}>
          <div className={`${componentName}__link-title`}>{clusterCTAHeadlineThree}</div>
          <img src={clusterCTAImageThree && clusterCTAImageThree.url} className={`${componentName}__image`} alt={clusterCTAImageThree && clusterCTAHeadlineThree.title}/>
        </div>
      </div>
    </div>
  );
};

export default QuickCTAClusterElement;
