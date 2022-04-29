const links = [
  {
    id: "link-0",
    url: "https://www.howtographql.com/graphql-js/2-a-simple-query/",
    description: "Fullstack tutorial for GraphQL",
  },
];

const infoResolvers = {
  Query: {
    info: () => "This is the API of a Hackernews!",
    feed: () => links,
  },

  Mutation: {
    addPost: (parent, args) => {
      let idCount = links.length;
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);

      return link;
    },

    deletePost: (parent, args) => {
      const linkIndex = links.findIndex(link => link.id === args.id);
      const deletedLink = links[linkIndex];
      links.splice(linkIndex, 1);
      return deletedLink;
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
