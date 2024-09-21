import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import BlogCardList from "./components/BlogCardList";
import prisma from "@/lib/prismaClient";
import {BlogData} from "@/app/types/types"

async function getBlogData(){
  const response = await fetch("http://localhost:3000/api/post",{
    cache: "no-store",
  });

  const BlogAllData: BlogData[] = await response.json();
  console.log(BlogAllData);
  return BlogAllData;
}



export default async function Home() {

  const blogAllData = await getBlogData();

  return (
    <main >
      <BlogCardList BlogAllData={blogAllData} />
    </main>
  );
}
