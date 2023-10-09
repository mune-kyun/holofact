import { GenerationModel, VtuberModel } from "../models";

const resolvers = {
  Query: {
    generations: async () => await GenerationModel.find(),
    generation: async (_, { idName }) => {
      return await GenerationModel.findOne({
        idName: idName,
      });
    },
  },
  nestedResolve: {
    Generation: {
      members: async (parent) =>
        await VtuberModel.find({ generation: parent.idName }),
    },
  },
};

export default resolvers;
