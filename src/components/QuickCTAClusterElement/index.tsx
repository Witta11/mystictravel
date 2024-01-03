import React, { useEffect, useState } from "react";
import PrintServices from '../../services/PrintServices';

interface ClusterElementData {
  headline: string;
  subheadline: string;
  ctaOneHeadline: string;
  ctaTwoHeadline: string;
  ctaThreeHeadline: string;
  ctaOneImage: {
    url: string;
    title: string;
  };
  ctaTwoImage: {
    url: string;
    title: string;
  };
  ctaThreeImage: {
    url: string;
    title: string;
  };
}

const QuickCTAClusterElement: React.FC = () => {
  const componentName = 'cta-cluster';
  const [clusterData, setClusterData] = useState<ClusterElementData | null>(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getQuickCTAClusterElement();
    }

    fetchPrint().then(value => {
      setClusterData(value.data.quickCtaClusterElementCollection.items[0]);
    })
  }, []);

  if (!clusterData) {
    return null; // You can return a loading indicator or handle the loading state as needed
  }

  return (
    <div className={`${componentName}__wrapper`}>
      <div className={`${componentName}__text`}>
        <div className={`${componentName}__title`}>{clusterData.headline}</div>
        <div className={`${componentName}__sub-title`}>{clusterData.subheadline}</div>
      </div>
      <div className={`${componentName}__link-wrapper`}>
        <div className={`${componentName}__link-box`}>
          <div className={`${componentName}__link-title`}>{clusterData.ctaOneHeadline}</div>
          <img src={clusterData.ctaOneImage.url} className={`${componentName}__image`} alt={clusterData.ctaOneImage.title}/>
        </div>
        <div className={`${componentName}__link-box`}>
          <div className={`${componentName}__link-title`}>{clusterData.ctaTwoHeadline}</div>
          <img src={clusterData.ctaTwoImage.url} className={`${componentName}__image`} alt={clusterData.ctaTwoImage.title}/>
        </div>
        <div className={`${componentName}__link-box`}>
          <div className={`${componentName}__link-title`}>{clusterData.ctaThreeHeadline}</div>
          <img src={clusterData.ctaThreeImage.url} className={`${componentName}__image`} alt={clusterData.ctaThreeImage.title}/>
        </div>
      </div>
    </div>
  );
};

export default QuickCTAClusterElement;
