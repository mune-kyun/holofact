import bookResolvers from "./books";
import generationResolvers from "./generations";

export default {
  Query: {
    ...bookResolvers.Query,
    ...generationResolvers.Query,
  },
  ...generationResolvers.nestedResolve,
};
