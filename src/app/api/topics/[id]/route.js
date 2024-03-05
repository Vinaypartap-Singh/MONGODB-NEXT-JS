import { connectDB } from "@/libs/db";
import Topic from "@/models/model.topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, description } = await req.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({
    message: "Topic updated successfully!",
    status: 200,
  });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  const topic = await Topic.findById({ _id: id });
  return NextResponse.json({
    message: "Topic fetched successfully!",
    topic,
    status: 200,
  });
}

export async function DELETE(req, { params }) {
  const { id } = params;
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({
    message: "Topic deleted successfully!",
    status: 200,
  });
}
