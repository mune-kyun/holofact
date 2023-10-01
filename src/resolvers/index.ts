import bookResolvers from "./books";

export default {
  Query: {
    ...bookResolvers.Query,
  },
};
