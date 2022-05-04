import { ApolloServer } from 'apollo-server-micro';
import { IncomingMessage, ServerResponse } from "http";
import Cors from 'micro-cors'; // Because Apollo v3 doesn't open local studio, is opening an external url

import context from "../../graphql/context";
import { resolvers } from '../../graphql/links';
import { schema } from "../../graphql/schema";

const cors = Cors();
// const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
const apolloServer = new ApolloServer({ schema, resolvers, context });
const startServer = apolloServer.start();

export default cors(async function handler(request: IncomingMessage, response: ServerResponse) {
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
