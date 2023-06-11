import React, { useEffect, useState } from "react";
import PrintServices from '../../services/PrintServices';

const BlogPreviewElement = () => {
  const componentName = 'blog-preview';
  const [blogTitle, setBlogTitle] = useState(null);
  const [blogSubTitle, setBlogSubTitle] = useState(null);
  const [blogPreviewText, setBlogPreviewText] = useState(null);
  const [blogImage, setBlogImage] = useState(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getBlogPostPreviewElement();
    }

    fetchPrint().then(value => {
      setBlogTitle(value.data.blogPostPreviewElementCollection.items[0].headline);
      setBlogSubTitle(value.data.blogPostPreviewElementCollection.items[0].subheadline);
      setBlogPreviewText(value.data.blogPostPreviewElementCollection.items[0].previewText);
      setBlogImage(value.data.blogPostPreviewElementCollection.items[0].image);
    })
  });


  return (
    <div className={`${componentName}__wrapper`}>
      <div className={`${componentName}__image-wrapper`}>
        <img src={blogImage && blogImage.url} className={`${componentName}__image`} alt={blogImage && blogImage.title}/>
      </div>
      <div className={`${componentName}__text`}>
          <div className={`${componentName}__title`}>{blogTitle}</div>
          <div className={`${componentName}__sub-title`}>{blogSubTitle}</div>
          <div className={`${componentName}__blog-text`}>{blogPreviewText}</div>
      </div>
    </div>
  );
};

export default BlogPreviewElement;
