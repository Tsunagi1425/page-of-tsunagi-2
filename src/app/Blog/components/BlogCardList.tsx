import React from "react";

import BlogCard from "./BlogCard";

import {BlogData} from "@/app/types/types"


interface BlogAllDataProps {
  BlogAllData: BlogData[];
}

// ... existing code ...

const BlogCardList = ({ BlogAllData }: BlogAllDataProps) => {
  if (!BlogAllData || BlogAllData.length === 0) {
    return <div>ブログ記事がありません。</div>;
  }

  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {BlogAllData.map((blogdata: BlogData) => (
        <BlogCard key={blogdata.id} blogdata={blogdata} />
      ))}
    </div>
  );
};

// ... existing code ...
export default BlogCardList;
