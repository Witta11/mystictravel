import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// HTTP link
const httpLink = new HttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/we23sul8g558/environments/master?access_token=w9FVP1kYgU4h48tC0TtMA2jqAoFHXQ2Z-nq8YvLcqLk'
});

// Apollo Client instance
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink), // Combine error handling link with HTTP link
});

export default client;
