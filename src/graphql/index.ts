import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.contentful.com/content/v1/spaces/we23sul8g558/environments/master?access_token=w9FVP1kYgU4h48tC0TtMA2jqAoFHXQ2Z-nq8YvLcqLk'
})
