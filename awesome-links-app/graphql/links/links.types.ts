// SCHEMAS 
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Link {
    id: String
    category: String
    description: String
    imageUrl: String
    title: String
    url: String
    users: [String]
  }

  type Query {
    links: [Link]!
  }
`;
