import mongoose from "mongoose";
const Schema = mongoose.Schema;

const generationSchema = new Schema(
  {
    idName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const GenerationModel = mongoose.model("Generation", generationSchema);
