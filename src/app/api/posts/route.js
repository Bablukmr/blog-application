import { NextResponse } from "next/server";
import connect from "@/utilities/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();
    const posts = await Post.find(username ? { username } : {});
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error("Error fetching posts:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    // Parse the JSON data from the request body
    const body = await request.json();

    // Simple input validation, ensure that required fields are provided
    const { title, desc, img, content, username } = body;
    if (!title || !desc || !img || !content || !username) {
      return new NextResponse("All fields are required", { status: 400 });
    }
    const newPost = new Post(body);
    await connect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.error("Error creating a new post:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
