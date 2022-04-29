/* This is an example of type string, check info.graphql file */

const infoDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }

    type Link {
        id: ID!
        description: String!
        url: String!
    }

    type Mutation {
        post(url: String!, description: String!): Link!
    }
`;

module.exports = {
    infoDefs,
}
