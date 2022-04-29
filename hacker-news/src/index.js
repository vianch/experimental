/* TODO: next step https://www.howtographql.com/graphql-js/6-authentication/*/
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')

const utils = require('./utils');
const schemas = require('./schema')

const { resolvers } = schemas;
const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: utils.file.fileToString("/schema/info/info.graphql"),
    resolvers,
    context: {
      prisma,
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
})
