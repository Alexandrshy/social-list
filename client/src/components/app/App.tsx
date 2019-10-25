import React from "react";
import ApolloClien from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { Button } from "../button/Button";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Footer } from "../footer/Footer";

import s from "./App.module.css";

const client = new ApolloClien({
  uri: "http://localhost:3005/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className={s.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
