import { GenerationModel, VtuberModel } from "../models";

const resolvers = {
  Query: {
    vtubers: async () => await VtuberModel.find(),
  },
  nestedResolve: {
    Vtuber: {
      generation: async (parent) =>
        await GenerationModel.find({ idName: parent.generation }),
    },
  },
};

export default resolvers;
