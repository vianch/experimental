const info = require('./info');

const typeDefs = `
    ${info.infoDefs}
`;

const resolvers = {
    ...info.infoResolvers,
}

module.exports = {
    typeDefs,
    resolvers,
};