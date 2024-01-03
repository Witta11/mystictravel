import React, { useEffect, useState } from "react";
import PrintServices from '../../services/PrintServices';
import { Link } from "gatsby";

interface BlogPreviewElementProps {
  blogPreviewElementId?: number; // Define the type for blogPreviewElementId
}

interface BlogPreviewElementData {
  headline: string | null;
  subheadline: string | null;
  previewText: string | null;
  image: { url: string; title: string } | null;
  slug: string | null;
}

const BlogPreviewElement: React.FC<BlogPreviewElementProps> = ({ blogPreviewElementId = 0 }) => {
  const componentName = 'blog-preview';
  const [blogData, setBlogData] = useState<BlogPreviewElementData | null>(null);

  useEffect(() => {
    const fetchPrint = async () => {
      return PrintServices.getBlogPostPreviewElement();
    }

    fetchPrint().then(value => {
      const previewElement = value.data.blogPostPreviewElementCollection.items.find((obj) => {
        return obj.pointingId === blogPreviewElementId;
      });

      setBlogData({
        headline: previewElement?.headline || null,
        subheadline: previewElement?.subheadline || null,
        previewText: previewElement?.previewText || null,
        image: previewElement?.image || null,
        slug: previewElement?.slug || null,
      });
    });
  }, [blogPreviewElementId]);

  if (!blogData) {
    // Render a loading state or return null
    return null;
  }

  const { headline, subheadline, previewText, image, slug } = blogData;

  return (
    <div className={`${componentName}__wrapper`}>
      <div className={`${componentName}__image-wrapper`}>
        <Link to={slug || ""}>
          <img
            src={image?.url || ""}
            className={`${componentName}__image`}
            alt={image?.title || ""}
          />
        </Link>
      </div>
      <Link to={slug || ""} className={`${componentName}__text-wrapper`}>
        <div className={`${componentName}__text`}>
          <div className={`${componentName}__title`}>{headline || ""}</div>
          <div className={`${componentName}__sub-title`}>{subheadline || ""}</div>
          <div className={`${componentName}__blog-text`}>{previewText || ""}</div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPreviewElement;
