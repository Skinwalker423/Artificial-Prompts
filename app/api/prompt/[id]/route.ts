import { NextApiRequest } from "next";
import { connectToMongoDb } from "@utils/database";
import Prompt from "@models/prompt";

export interface ParamsProps {
  id: string;
}

export async function GET(
  req: Request,
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
  req: Request,
  { params }: { params: ParamsProps }
) {
  const { id } = params;
  const { prompt, tag } = await req.json();
  try {
    await connectToMongoDb();
    const updatedPrompt = await Prompt.findByIdAndUpdate(
      id,
      {
        tag,
        prompt,
      }
    );

    if (!updatedPrompt.modified_count)
      return new Response("could not update prompt", {
        status: 404,
      });

    updatedPrompt.save();
    return new Response(JSON.stringify(updatedPrompt), {
      status: 200,
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
export async function DELETE(
  req: Request,
  { params }: { params: ParamsProps }
) {
  const { id } = params;
  try {
    await connectToMongoDb();
    await Prompt.findByIdAndDelete(id);

    return new Response("successfully deleted prompt", {
      status: 201,
    });
  } catch (error) {
    return new Response(
      `problem deleting prompt, ${error}`,
      {
        status: 500,
      }
    );
  }
}
