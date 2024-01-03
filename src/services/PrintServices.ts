import apolloClient from '../graphql';
import {
  GET_BLOG_POST_PREVIEW_ELEMENT,
  GET_HOMEPAGE_BANNER,
  GET_THREE_IMAGES_CTA_ELEMENT,
  GET_QUICK_CTA_CLUSTER_ELEMENT,
  GET_MYSTIC_SUB,
  GET_YOGA_SUB,
  GET_TRAVEL_SUB,
  GET_ALL_BLOGS,
} from './queries';

class PrintServices {
  private homepageBannerResponse: any;
  private blogPostPreviewResponse: any;
  private threeImagesCTAResponse: any;
  private ctaClusterResponse: any;
  private blogPostResponse: any;
  private mysticCategoriesResponse: any;
  private yogaCategoriesResponse: any;
  private travelCategoriesResponse: any;

  async getHomepageImageBanner(): Promise<any> {
    try {
      this.homepageBannerResponse = await apolloClient.query({
        query: GET_HOMEPAGE_BANNER,
        variables: {},
      });

      if (!this.homepageBannerResponse || !this.homepageBannerResponse.data) {
        throw Error('No data available');
      }

      return this.homepageBannerResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getBlogPostPreviewElement(): Promise<any> {
    try {
      this.blogPostPreviewResponse = await apolloClient.query({
        query: GET_BLOG_POST_PREVIEW_ELEMENT,
        variables: {},
      });

      if (!this.blogPostPreviewResponse || !this.blogPostPreviewResponse.data) {
        throw Error('No data available');
      }

      return this.blogPostPreviewResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getThreeImagesCTAElement(): Promise<any> {
    try {
      this.threeImagesCTAResponse = await apolloClient.query({
        query: GET_THREE_IMAGES_CTA_ELEMENT,
        variables: {},
      });

      if (!this.threeImagesCTAResponse || !this.threeImagesCTAResponse.data) {
        throw Error('No data available');
      }

      return this.threeImagesCTAResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getQuickCTAClusterElement(): Promise<any> {
    try {
      this.ctaClusterResponse = await apolloClient.query({
        query: GET_QUICK_CTA_CLUSTER_ELEMENT,
        variables: {},
      });

      if (!this.ctaClusterResponse || !this.ctaClusterResponse.data) {
        throw Error('No data available');
      }

      return this.ctaClusterResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getBlogPosts(): Promise<any> {
    try {
      this.blogPostResponse = await apolloClient.query({
        query: GET_ALL_BLOGS,
        variables: {},
      });

      if (!this.blogPostResponse || !this.blogPostResponse.data) {
        throw Error('No data available');
      }

      return this.blogPostResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getMysticCategories(): Promise<any> {
    try {
      this.mysticCategoriesResponse = await apolloClient.query({
        query: GET_MYSTIC_SUB,
        variables: {},
      });

      if (!this.mysticCategoriesResponse || !this.mysticCategoriesResponse.data) {
        throw Error('No data available');
      }

      return this.mysticCategoriesResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getYogaCategories(): Promise<any> {
    try {
      this.yogaCategoriesResponse = await apolloClient.query({
        query: GET_YOGA_SUB,
        variables: {},
      });

      if (!this.yogaCategoriesResponse || !this.yogaCategoriesResponse.data) {
        throw Error('No data available');
      }

      return this.yogaCategoriesResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getTravelCategories(): Promise<any> {
    try {
      this.travelCategoriesResponse = await apolloClient.query({
        query: GET_TRAVEL_SUB,
        variables: {},
      });

      if (!this.travelCategoriesResponse || !this.travelCategoriesResponse.data) {
        throw Error('No data available');
      }

      return this.travelCategoriesResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PrintServices();
