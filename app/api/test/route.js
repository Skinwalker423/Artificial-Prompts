import { NextResponse } from "next/server";

export async function GET(req, res) {
  console.log("inside test api", req);
  return NextResponse.json({ message: "test" });
}
