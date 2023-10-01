import mongoose from "mongoose";
const Schema = mongoose.Schema;

const generationSchema = new Schema(
  {
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

const GenerationModel = mongoose.model("Generation", generationSchema);
export default GenerationModel;
