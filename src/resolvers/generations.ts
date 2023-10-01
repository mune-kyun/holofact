import GenerationModel from "../models/generation";

const resolvers = {
  Query: {
    generations: async () => await GenerationModel.find(),
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
