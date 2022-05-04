// https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-2-fwpc6ds155
import { makeSchema } from 'nexus';
import { join } from 'path';

export const schema = makeSchema({
  types: [],
  outputs: {
    typegen: join(process.cwd(), 'types', 'nexus.d.ts'),
    schema: join(process.cwd(), 'graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql', 'context.ts'),
  },
});
