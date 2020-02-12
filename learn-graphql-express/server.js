var express = require('express');
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');
import schema from "./schema";
import root from "./resolver";
const PORT = 4000;
var app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at localhost: ${PORT}/graphql`)