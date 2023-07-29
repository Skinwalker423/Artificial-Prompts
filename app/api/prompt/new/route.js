import { NextResponse } from "next/server";
import Prompt from "@models/prompt";
import { connectToMongoDb } from "@utils/database";
import mongoose from "mongoose";

export async function POST(req) {
  const { userId, prompt, tag } = await req.json();
  console.log("body in api", userId, prompt, tag);

  try {
    await connectToMongoDb();
    const newPrompt = new Prompt({
      userId,
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
