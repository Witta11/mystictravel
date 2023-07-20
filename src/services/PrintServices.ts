import apolloClient from '../graphql';
import { GET_BLOG_POST_PREVIEW_ELEMENT,
  GET_HOMEPAGE_BANNER,
  GET_THREE_IMAGES_CTA_ELEMENT,
  GET_QUICK_CTA_CLUSTER_ELEMENT,
  GET_CATEGORY_ITEM_FIRST_LEVEL,
  GET_MYSTIC_SUB, GET_YOGA_SUB, GET_TRAVEL_SUB } from './queries';

class PrintServices {
  private homepageBannerResponse;
  private blogPostPreviewResponse;
  private threeImagesCTAResponse;
  private ctaClusterResponse;
  private categoryItemResponse;
  private mysticCategoriesResponse;
  private yogaCategoriesResponse;
  private travelCategoriesResponse;

  async getHomepageImageBanner() {
    try {
      this.homepageBannerResponse = await apolloClient.query({
        query: GET_HOMEPAGE_BANNER,
        variables: {}
      });

      if (!this.homepageBannerResponse || !this.homepageBannerResponse.data){
        throw Error('No data available');
      }

      return this.homepageBannerResponse;
    } catch(error) {
      throw error;
    }
  }

  async getBlogPostPreviewElement() {
    try {
      this.blogPostPreviewResponse = await apolloClient.query({
        query: GET_BLOG_POST_PREVIEW_ELEMENT,
        variables: {}
      });

      if (!this.blogPostPreviewResponse || !this.blogPostPreviewResponse.data){
        throw Error('No data available');
      }

      return this.blogPostPreviewResponse;
    } catch(error) {
      throw error;
    }
  }

  async getThreeImagesCTAElement() {
    try {
      this.threeImagesCTAResponse = await apolloClient.query({
        query: GET_THREE_IMAGES_CTA_ELEMENT,
        variables: {}
      });

      if (!this.threeImagesCTAResponse || !this.threeImagesCTAResponse.data){
        throw Error('No data available');
      }

      return this.threeImagesCTAResponse;
    } catch(error) {
      throw error;
    }
  }

  async getQuickCTAClusterElement() {
    try {
      this.ctaClusterResponse = await apolloClient.query({
        query: GET_QUICK_CTA_CLUSTER_ELEMENT,
        variables: {}
      });

      if (!this.ctaClusterResponse || !this.ctaClusterResponse.data){
        throw Error('No data available');
      }

      return this.ctaClusterResponse;
    } catch(error) {
      throw error;
    }
  }

  async getCategoryItemsOne() {
    try {
      this.categoryItemResponse = await apolloClient.query({
        query: GET_CATEGORY_ITEM_FIRST_LEVEL,
        variables: {}
      });

      if (!this.categoryItemResponse || !this.categoryItemResponse.data){
        throw Error('No data available');
      }

      return this.categoryItemResponse;
    } catch(error) {
      throw error;
    }
  }

  async getMysticCategories() {
    try {
      this.mysticCategoriesResponse = await apolloClient.query({
        query: GET_MYSTIC_SUB,
        variables: {}
      });

      if (!this.mysticCategoriesResponse || !this.mysticCategoriesResponse.data){
        throw Error('No data available');
      }

      return this.mysticCategoriesResponse;
    } catch(error) {
      throw error;
    }
  }

  async getYogaCategories() {
    try {
      this.yogaCategoriesResponse = await apolloClient.query({
        query: GET_YOGA_SUB,
        variables: {}
      });

      if (!this.yogaCategoriesResponse || !this.yogaCategoriesResponse.data){
        throw Error('No data available');
      }

      return this.yogaCategoriesResponse;
    } catch(error) {
      throw error;
    }
  }

  async getTravelCategories() {
    try {
      this.travelCategoriesResponse = await apolloClient.query({
        query: GET_TRAVEL_SUB,
        variables: {}
      });

      if (!this.travelCategoriesResponse || !this.travelCategoriesResponse.data){
        throw Error('No data available');
      }

      return this.travelCategoriesResponse;
    } catch(error) {
      throw error;
    }
  }
}

export default new PrintServices();
