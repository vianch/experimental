export const resolvers = {
  Query: {
    links: async (parent, args, context) => context.link.findMany(),
  },
};
