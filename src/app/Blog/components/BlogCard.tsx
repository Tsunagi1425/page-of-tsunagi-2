import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import Link from "next/link";
import {BlogData} from "@/app/types/types"

interface BlogCardProps {
  blogdata: BlogData;
}


const BlogCard = ({blogdata}: BlogCardProps) => {
  const {id, title, content, createdAt, username} = blogdata;
  return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Link href={`/Blog_posts/${id}`} className="text-blue-500">
            {" "}
            read more
          </Link>
        </CardFooter>
      </Card>
  );
};

export default BlogCard;