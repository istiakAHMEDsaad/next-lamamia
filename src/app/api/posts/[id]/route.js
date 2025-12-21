import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Database error:', error.message);

    return NextResponse.json(
      { message: 'Failed to fetch data' },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Post has been deleted!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete error:', error.message);

    return NextResponse({ message: 'Failed to delete post' }, { status: 500 });
  }
};
