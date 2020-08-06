import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./configs/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
