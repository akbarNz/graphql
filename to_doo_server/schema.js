/* import buildSchema from "graphql"; */
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolver";

const typeDefs = `
    type Message {
        _id: ID!
        content: String!
        author: String!
    }
    type Query {
        getMessage(_id: ID!): Message
        getMessages: [Message]
    }
    input MessageInput {
        content: String!
        author: String!
    }
    type Mutation {
        createMessage(input: MessageInput): Message
        updateMessage(_id: ID!, input: MessageInput): Message
        deleteMessage(_id: ID!): Message
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;

























/* var schema = buildSchema(`
    input MessageInput {
        content: String
        author: String
    }

    type Message {
        id: ID!
        content: String
        author: String
    }

    type Query {
        getMessage(id: ID!): Message
    }

    type Mutation {
        createMessage(input: MessageInput): Message
        updateMessage(id: ID!, input: MessageInput): Message
    }
`);

export default schema; */