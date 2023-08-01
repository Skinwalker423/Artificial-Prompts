import { NextApiRequest } from "next";

interface ParamsProps {
  id: string;
}

export default async function GET(
  req: NextApiRequest,
  { params }: { params: ParamsProps }
) {}
