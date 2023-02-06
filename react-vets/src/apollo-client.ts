import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { VETS_SVC } from './constants';

const link = new HttpLink({
  uri: VETS_SVC
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export { client };
