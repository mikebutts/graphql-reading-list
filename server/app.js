const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  "mongodb://graphqlninja:test123@ds149030.mlab.com:49030/graphqlninja"
);
mongoose.connection.once("open", () => {
  console.log("connected to DB");
});

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("now listening for requests on 4000");
});
