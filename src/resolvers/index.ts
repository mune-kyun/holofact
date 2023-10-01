import generationResolvers from "./generations";

export default {
  Query: {
    ...generationResolvers.Query,
  },
  ...generationResolvers.nestedResolve,
};
