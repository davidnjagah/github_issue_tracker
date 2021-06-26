import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import * as UserUtils from "../utils/user";
import { GraphQLClient} from 'graphql-request';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const token = "Put_token_here";

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: cache,
  link: concat(authMiddleware, link),
});

export default client;
