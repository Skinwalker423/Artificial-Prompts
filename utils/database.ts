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
    });

    isConnected = true;
    console.log("mongodb now connected");
  } catch (error) {
    console.log("problem connecting to mongodb", error);
  }
};
