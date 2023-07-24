import React from "react";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const method = req.method;
  console.log(method);
  return NextResponse.json({ message: method });
}
