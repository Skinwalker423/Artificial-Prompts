import { NextResponse, NextRequest } from "next/server";
import Prompt from "@models/prompt";

export async function GET(req: NextRequest) {
  try {
    const promptsList = await Prompt.find({});

    console.log("prompts inside api", promptsList);

    return new NextResponse(JSON.stringify(promptsList), {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(
      "problem fetching all prompts",
      {
        status: 500,
      }
    );
  }
}
