import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  concat,
} from '@apollo/client';
import React from 'react';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:3333/graphql',
});

const testMiddleware = new ApolloLink((operation, forward) => {
  console.log('Making request ', operation.operationName);
  return forward(operation);
});

const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(testMiddleware, httpLink),
});

const ApiProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>;
};

export default ApiProvider;
