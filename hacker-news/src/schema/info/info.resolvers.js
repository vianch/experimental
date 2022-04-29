const infoResolvers = {
  Query: {
    info: () => "This is the API of a Hackernews!",
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany()
    },
  },

  Mutation: {
    addPost: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      })
      return newLink
    },

    deletePost: (parent, args, context, info) => {
      return context.prisma.link.delete({
        where: {
          id: parseInt(args.id),
        },
      });
    },
  },

  Link: {
    id: (link) => link.id,
    description: (link) => link.description,
    url: (link) => link.url,
  },
};

module.exports = {
  infoResolvers,
};
