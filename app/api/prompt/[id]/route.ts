import { NextApiRequest } from "next";
import { connectToMongoDb } from "@utils/database";
import Prompt from "@models/prompt";

export interface ParamsProps {
  id: string;
}

export async function GET(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {
  const { id } = params;
  try {
    await connectToMongoDb();
    const data = await Prompt.findOne({
      _id: id,
    }).populate("creator");

    if (!data)
      return new Response("Prompt not found", {
        status: 404,
      });

    return new Response(JSON.stringify(data), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      `problem fetching prompt, ${error}`,
      {
        status: 500,
      }
    );
  }
}
export async function PATCH(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {}
export async function DELETE(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {}
