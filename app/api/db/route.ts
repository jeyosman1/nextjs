import { NextRequest, NextResponse } from "next/server";
// import books from "@/lib/books";

import connectDb from '@/lib/connectDb';

export async function GET() {
  await connectDb();
  return Response.json({ 
    message: "connected successfully",

   });
}

