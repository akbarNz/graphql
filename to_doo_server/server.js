require("dotenv").config();

import mongoose from "mongoose";
import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema.js";

var app = express();
const PORT = 8000;
const dbUri = process.env.MONGOLAB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(dbUri, {useNewUrlParser: true})
.then(() => {
    console.log("mlab connected")
}).catch((err) => {
    console.log(err)
});
app.get('/', (req, res) => {
    res.json({
        msg: 'welcome to GRAPHQL'
    });
});
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log('Running a GraphQL API server at http://localhost:8000/graphql');
});

