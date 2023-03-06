import apolloClient from '../graphql';
import { GET_CONTACT_PAGE_INFO, GET_IMPRESSUM_DATA} from './queries';

class ContactServices {
  private contactResponse;
  private impressumResponse;

  async getContactInfo() {
    try {
      this.contactResponse = await apolloClient.query({
        query: GET_CONTACT_PAGE_INFO,
        variables: {}
      });

      if (!this.contactResponse || !this.contactResponse.data){
        throw Error('No data available');
      }

      return this.contactResponse;
    } catch(error) {
        throw error;
    }
  }

  async getDataProtection() {
    try {
      this.impressumResponse = await apolloClient.query({
        query: GET_IMPRESSUM_DATA,
        variables: {}
      });

      if (!this.impressumResponse || !this.impressumResponse.data){
        throw Error('No data available');
      }

      return this.impressumResponse;
    } catch(error) {
        throw error;
    }
  }
}

export default new ContactServices();
