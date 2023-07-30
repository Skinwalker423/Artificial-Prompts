import Prompt from "@models/prompt";
import { connectToMongoDb } from "@utils/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface ParamsProps {
  userId: string;
}

export async function GET(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {
  console.log("user params", params.userId);

  try {
    await connectToMongoDb();
    const promptsList = await Prompt.find({
      creator: params.userId,
    }).populate("creator");

    console.log("prompts inside api", promptsList);

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
