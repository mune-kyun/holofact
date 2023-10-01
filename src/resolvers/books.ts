import BookModel from "../models/book";

const resolvers = {
  Query: {
    books: async () => await BookModel.find(),
  },
};

export default resolvers;
