import apolloClient from '../graphql';
import { GET_HOMEPAGE_BANNER } from './queries';

class PrintServices {
  private homepageBannerResponse;

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
}

export default new PrintServices();
