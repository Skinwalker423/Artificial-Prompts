import { NextApiRequest } from "next";
import { ParamsProps } from "@types";

export async function GET(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {}
export async function PATCH(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {}
export async function DELETE(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {}
