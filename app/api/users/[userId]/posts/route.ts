import Prompt from "@models/prompt";
import { connectToMongoDb } from "@utils/database";
import { NextResponse, NextRequest } from "next/server";

export interface ParamsProps {
  userId: string;
}

export async function GET(
  req: NextRequest,
  { params }: { params: ParamsProps }
) {
  try {
    await connectToMongoDb();
    const promptsList = await Prompt.find({
      creator: params.userId,
    }).populate("creator");

    return new NextResponse(JSON.stringify(promptsList), {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(
      `problem fetching all prompts, ${err}`,
      {
        status: 500,
      }
    );
  }
}
