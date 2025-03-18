import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { addressResolvers } from './resolvers/addressResolver';

// Load schema from file
const addressTypeDefs = readFileSync(
  join(__dirname, 'schema/address.graphql'),
  'utf-8'
);

export const typeDefs = gql`
  ${addressTypeDefs}
`;

export const resolvers = {
  ...addressResolvers,
};
