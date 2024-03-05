import { connectDB } from "@/libs/db";
import Topic from "@/models/model.topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  console.log(req.body);
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json({
    message: "Topic added successfully!",
    status: 200,
  });
}

export async function GET() {
  await connectDB();
  const topics = await Topic.find({});
  return NextResponse.json({
    topics,
  });
}
