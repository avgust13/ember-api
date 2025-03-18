"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const graphql_1 = require("./graphql");
const context_1 = require("./context");
const server = new apollo_server_1.ApolloServer({
    typeDefs: graphql_1.typeDefs,
    resolvers: graphql_1.resolvers,
    context: context_1.context,
});
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
