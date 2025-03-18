"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const fs_1 = require("fs");
const path_1 = require("path");
const addressResolver_1 = require("./resolvers/addressResolver");
// Load schema from file
const addressTypeDefs = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, 'schema/address.graphql'), 'utf-8');
exports.typeDefs = (0, apollo_server_1.gql) `
  ${addressTypeDefs}
`;
exports.resolvers = {
    ...addressResolver_1.addressResolvers,
};
