import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;
  
    const BlogDetailData = await prisma.post.findUnique({where: {
    id: parseInt(id),
  }});
  return NextResponse.json(BlogDetailData);
}