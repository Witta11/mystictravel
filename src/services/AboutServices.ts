import apolloClient from '../graphql';
import { GET_ABOUT_DATA } from './queries';

class AboutServices {
  private aboutResponse;

  async getAboutData() {
    try {
      this.aboutResponse = await apolloClient.query({
        query: GET_ABOUT_DATA,
        variables: {}
      });

      if (!this.aboutResponse || !this.aboutResponse.data){
        throw Error('No data available');
      }

      return this.aboutResponse;
    } catch(error) {
        throw error;
    }
  }
}

export default new AboutServices();
