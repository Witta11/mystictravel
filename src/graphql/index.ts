import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.contentful.com/content/v1/spaces/v67uvat55jk0/environments/master?access_token=9SWDivWfGjq8ak5JDUMbNXdAHVoFT_eOhUCQLMxjjYQ'
})
