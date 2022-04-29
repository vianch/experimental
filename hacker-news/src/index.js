const { ApolloServer } = require('apollo-server');

const utils = require('./utils');
const schemas = require('./schema')

const { resolvers } = schemas;

const server = new ApolloServer({
    typeDefs: utils.file.fileToString("/schema/info/info.graphql"),
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
})
