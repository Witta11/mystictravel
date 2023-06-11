import apolloClient from '../graphql';
import { GET_BLOG_POST_PREVIEW_ELEMENT, GET_HOMEPAGE_BANNER, GET_THREE_IMAGES_CTA_ELEMENT } from './queries';

class PrintServices {
  private homepageBannerResponse;
  private blogPostPreviewResponse;
  private threeImagesCTAResponse;

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
}

export default new PrintServices();
