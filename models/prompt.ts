import { model, Schema, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "tag is required"],
  },
});

const Prompt =
  models.Prompt || model("Promp", PromptSchema);

export default Prompt;
