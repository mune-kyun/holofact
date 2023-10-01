const data = [{ name: "Gen 0", date: "7 September 2017" }];

const resolvers = {
  Query: {
    generations: async () => await data,
  },
  nestedResolve: {
    Generation: {
      members: async () =>
        await [
          {
            name: "String!",
            nickname: ["String"],
            birthday: "String",
            height: 5,
            profile: "String",
            funFacts: ["String"],
          },
        ],
    },
  },
};

export default resolvers;
