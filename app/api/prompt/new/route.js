import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();
  console.log("body in api", body);

  return NextResponse.json({ data: "data" });
}

export async function GET(req, res) {
  console.log("inside get", req.body);
  return NextResponse.json({ data: "data from get" });
}
