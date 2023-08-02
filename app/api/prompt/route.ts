import { NextRequest } from "next/server";
import Prompt from "@models/prompt";
import { connectToMongoDb } from "@utils/database";

export async function GET(req: NextRequest) {
  try {
    await connectToMongoDb();
    const promptsList = await Prompt.find({}).populate(
      "creator"
    );

    return new Response(JSON.stringify(promptsList), {
      status: 201,
    });
  } catch (err) {
    return new Response(
      `problem fetching all prompts, ${err}`,
      {
        status: 500,
      }
    );
  }
}
