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
