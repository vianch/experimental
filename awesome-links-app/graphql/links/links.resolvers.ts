export const resolvers = {
  Query: {
    links: async (parent, args, context) => context.prisma.link.findMany(),
  },
};
