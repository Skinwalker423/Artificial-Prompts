import { ConnectOptions } from "mongoose";
import mongoose from "mongoose";

let isConnected = false;

export const connectToMongoDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongodb already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "share_promp",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    isConnected = true;
  } catch (error) {
    console.error("problem connecting to mongodb", error);
  }
};

export const fetchPromptById = async (id: string) => {
  const prompts: any = await fetch(`/api/prompt${id}`);

  const data = await prompts.json();

  return data;
};
