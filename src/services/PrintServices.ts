import apolloClient from '../graphql';
import { GET_HOMEPAGE_IMG, GET_PRINT } from './queries';

class PrintServices {
  private printResponse;
  private homePageResponse;

  async getPrints() {
    try {
      this.printResponse = await apolloClient.query({
        query: GET_PRINT,
        variables: {}
      });

      if (!this.printResponse || !this.printResponse.data){
        throw Error('No data available');
      }

      return this.printResponse;
    } catch(error) {
      throw error;
    }
  }

  async getHomePageImages() {
    try {
      this.homePageResponse = await apolloClient.query({
        query: GET_HOMEPAGE_IMG,
        variables: {}
      });

      if (!this.homePageResponse || !this.homePageResponse.data){
        throw Error('No data available');
      }

      return this.homePageResponse;
    } catch(error) {
      throw error;
    }
  }
}

export default new PrintServices();
