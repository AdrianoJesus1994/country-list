import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/",
  cache: cache,
  resolvers: {
    Mutation: {
      editCountry: (_root, variables, { cache }) => {
        cache.modify({
          _id: cache.identify({
            name: "Country",
            _id: variables._id,
          }),
          fields: {
            name: (value: any) => variables.name,
          },
        });
        return null;
      },
    },
  },
});
