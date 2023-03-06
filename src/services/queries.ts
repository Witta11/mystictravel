import { gql } from 'graphql-tag';

export const GET_PRINT = gql`
  query getAllPrints {
    listingPrintArtCollection {
      items {
        printCollection {
          items {
            title
            url
            description
          }
        }
      }
    }
  }
`;

export const GET_HOMEPAGE_IMG = gql`
  query getHomepageImages {
    homePageImagesCollection {
      items {
        homePageAssetsCollection {
          items {
            title
            url
          }
        }
      }
    }
  }
`;

export const GET_CONTACT_PAGE_INFO = gql`
  query getContactPageInfos {
    contactPageCollection {
      items {
        contactHeader
        contactDescriptionTextfield
        contactDescriptionTextfield2
      }
    }
  }
`;

export const GET_IMPRESSUM_DATA = gql`
  query Impressumsdata {
    impressumCollection {
      items {
        datenschutz {
          url
        }
      }
    }
  }
`;

export const GET_ABOUT_DATA = gql`
  query AboutData {
    aboutContentCollection {
      items {
        aboutText
        aboutPicture {
					url
        }
      }
    }
  }
`;

export const GET_SEO_DATA = gql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
