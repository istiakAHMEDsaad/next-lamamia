import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  try {
    await connect();

    const posts = await Post.find(username ? { username } : {});

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Database error:', error.message);
    return NextResponse.json(
      { message: 'Failed to fetch data' },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connect();

    const newPost = new Post(body);
    await newPost.save();

    return NextResponse.json(
      { message: 'Post has been created' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Database error:', error.message);
    return NextResponse.json(
      { message: 'Failed to create post' },
      { status: 500 }
    );
  }
};
