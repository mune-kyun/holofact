import { GenerationModel, VtuberModel } from "../models";
import { startCase } from "lodash";

const resolvers = {
  Query: {
    vtubers: async () => await VtuberModel.find(),
    vtuber: async (_, { name }) => {
      const _name = startCase(name);

      return await VtuberModel.findOne({
        name: { $regex: _name },
      });
    },
  },
  nestedResolve: {
    Vtuber: {
      generation: async (parent) =>
        await GenerationModel.find({ idName: parent.generation }),
    },
  },
};

export default resolvers;
