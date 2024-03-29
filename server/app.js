const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema");
const DB = require("./conf");

const app = express();
const PORT = 3005;

mongoose.connect(
  `mongodb://${DB.LOGIN}:${DB.PASSWORD}@${DB.INF}:29668/${DB.TABLE}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const dbConnection = mongoose.connection;
dbConnection.on("error", err => console.log(`Connection error: ${err}`));
dbConnection.once("open", () => console.log(`Connection DB`));

app.listen(PORT, err => {
  err ? console.log(err) : console.log("Server started");
});
