import generationResolvers from "./generations";
import vtuberResolvers from "./vtubers";

export default {
  Query: {
    ...generationResolvers.Query,
    ...vtuberResolvers.Query,
  },
  ...generationResolvers.nestedResolve,
  ...vtuberResolvers.nestedResolve,
};
