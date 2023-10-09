import React, { useEffect, useState } from "react";
import PrintServices from '../../services/PrintServices';
import { Link } from "gatsby";

const BlogPreviewElement = ({ blogPreviewElementId = 0 }) => {
  const componentName = 'blog-preview';
  const [blogTitle, setBlogTitle] = useState(null);
  const [blogSubTitle, setBlogSubTitle] = useState(null);
  const [blogPreviewText, setBlogPreviewText] = useState(null);
  const [blogImage, setBlogImage] = useState(null);
  const [blogSlug, setBlogSlug] = useState(null);
  const [blogPointingId, setBlogPointingId] = useState(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getBlogPostPreviewElement();
    }

    fetchPrint().then(value => {
      const previewElement = value.data.blogPostPreviewElementCollection.items.find(function (obj) {
        return obj.pointingId === blogPreviewElementId
      });

      setBlogTitle(previewElement.headline);
      setBlogSubTitle(previewElement.subheadline);
      setBlogPreviewText(previewElement.previewText);
      setBlogImage(previewElement.image);
      setBlogSlug(previewElement.slug);
    })
  });

  return (
    <div className={`${componentName}__wrapper`}>
      <div className={`${componentName}__image-wrapper`}>
        <Link to={blogSlug}>
          <img
            src={blogImage && blogImage.url} className={`${componentName}__image`}
            alt={blogImage && blogImage.title}
          />
        </Link>
      </div>
      <Link to={blogSlug} className={`${componentName}__text-wrapper`}>
        <div className={`${componentName}__text`}>
          <div className={`${componentName}__title`}>{blogTitle}</div>
          <div className={`${componentName}__sub-title`}>{blogSubTitle}</div>
          <div className={`${componentName}__blog-text`}>{blogPreviewText}</div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPreviewElement;
