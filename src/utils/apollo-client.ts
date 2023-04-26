import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

const TOKEN = import.meta.env.CONTENTFUL_ACCESS_TOKEN;
const SPACE = import.meta.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const http = new HttpLink({
  uri: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const link = ApolloLink.from([http]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link,
  cache,
});

export default client;
