import { NextResponse } from "next/server";
import Prompt from "@models/prompt";
import { connectToMongoDb } from "@utils/database";

export async function POST(req) {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToMongoDb();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();
    return new NextResponse(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
}

export async function GET(req, res) {
  console.log("inside get", req.body);
  return NextResponse.json({ data: "data from get" });
}
