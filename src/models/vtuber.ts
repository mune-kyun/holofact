import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vtuberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: [String],
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    greeting: {
      type: String,
      required: true,
    },
    funFacts: {
      type: [String],
      required: true,
    },
    generation: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const VtuberModel = mongoose.model("Vtuber", vtuberSchema);
