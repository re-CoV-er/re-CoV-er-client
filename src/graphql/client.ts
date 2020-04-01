import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import store from "../redux";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const state = store.getState();
  const token = state.authentication.accessToken;
  console.log(state);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "merda pudenta",
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({ link: authLink.concat(httpLink), cache });
export default client;
