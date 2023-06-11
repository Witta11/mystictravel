import { gql } from 'graphql-tag';

export const GET_HOMEPAGE_BANNER = gql`
  query getHomepageImageBanner {
    homepageCollection {
      items {
        homepageBanner {
          title
          url
        }
      }
    }
  }
`;

export const GET_BLOG_POST_PREVIEW_ELEMENT = gql`
  query getBlogPostPreviewElement {
    blogPostPreviewElementCollection {
      items {
        headline
        subheadline
        previewText
        image {
          url
        }
      }
    }
  }
`;

export const GET_THREE_IMAGES_CTA_ELEMENT = gql`
  query getThreeImagesCTAElement {
    threeImagesCtaElementCollection {
      items {
        headline
        subheadline
        imageLeft {
          title
          url
        }
        imageCenter {
          title
          url
        }
        imageRight {
          title
          url
        }
      }
    }
  }
`;
