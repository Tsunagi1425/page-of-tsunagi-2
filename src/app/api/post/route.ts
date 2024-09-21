import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany();
  return NextResponse.json(allBBSPosts);
}

export async function POST(req: Request) {
  try {
    const { username, title, content, user_id } = await req.json();

    // 簡単な入力バリデーション
    if (!username || !title || !content || typeof user_id !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const post = await prisma.post.create({
      data: {
        username,
        title,
        content,
        user_id,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error('POST リクエストエラー:', error);
    return NextResponse.json({ error: 'Internal Server Error!' }, { status: 500 });
  }
}