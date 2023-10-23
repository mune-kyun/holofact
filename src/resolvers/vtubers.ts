import { GenerationModel, VtuberModel } from "../models";
import { startCase, random } from "lodash";

const resolvers = {
  Query: {
    vtubers: async () => await VtuberModel.find(),
    vtuber: async (_, { name }) => {
      const _name = startCase(name);

      return await VtuberModel.findOne({
        name: { $regex: _name },
      });
    },
    fact: async (_, { name }) => {
      if (!name)
        name = (await VtuberModel.aggregate([{ $sample: { size: 1 } }]))[0]
          .name;

      const _name = startCase(name);

      const data = await VtuberModel.findOne({
        name: { $regex: _name },
      });
      data["funFacts"] = [data.funFacts[random(0, data.funFacts.length - 1)]];

      return data;
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
