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
        slug
        pointingId
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

export const GET_QUICK_CTA_CLUSTER_ELEMENT = gql`
  query getQuickCTAClusterElement {
    quickCtaClusterElementCollection {
      items {
        headline
        subheadline
        ctaOneHeadline
        ctaOneImage {
          url
        }
        ctaTwoHeadline
        ctaTwoImage {
          url
        }
        ctaThreeHeadline
        ctaThreeImage {
          url
        }
      }
    }
  }
`;

export const GET_ALL_BLOGS = gql`
query getBlogPosts {
  blogPostCollection {
    items {
      id
      title
      category
      slug
      mediaCollection{
        items{
          width
        }
      }
      
    }
  }
}
`;

export const GET_MYSTIC_SUB= gql`
  query getBlogPostOne {
    blogPostCollection(where: { parentId: 1 }) {
      items {
        title
        id
        slug
        mediaContent {
          title
          url
        }
      }
    }
  }
`;

export const GET_YOGA_SUB= gql`
  query getBlogPostOne {
    blogPostCollection(where: { parentId: 2 }) {
      items {
        title
        id
        slug
      }
      mediaContent {
        title
        url
      }
    }
  }
`;

export const GET_TRAVEL_SUB= gql`
  query getBlogPostOne {
    blogPostCollection(where: { parentId: 3 }) {
      items {
        title
        id
        slug
        mediaContent {
          title
          url
        }
      }
    }
  }
`;
