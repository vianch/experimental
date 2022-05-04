import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors'; // Because Apollo v3 doesn't open local studio, is opening an external url

import { typeDefs, resolvers } from '../../graphql/links';

const cors = Cors();
const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default cors(async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({ 
    path: '/api/graphql' 
  })(request, response);
});

export const config = {
  api: {
    bodyParser: false,
  }
};
