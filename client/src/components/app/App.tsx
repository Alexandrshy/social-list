import React from "react";
import ApolloClien from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Footer } from "../footer/Footer";

const client = new ApolloClien({
  uri: "http://localhost:3005/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Main />
      <Footer />
    </ApolloProvider>
  );
};

export default App;
