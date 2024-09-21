import Link from "next/link";
import React from "react";
import {BlogData} from "@/app/types/types"

async function BlogDetailData(id: number){
    const response = await fetch(`http://localhost:3000/api/post/${id}`, {
        cache: `no-store`,
    });

    const BlogDetailData: BlogData = await response.json();

    return BlogDetailData;
}

const BlogDetailPage = async ({ params }: { params: { id: number } }) => {
    const blogdetaildata = await BlogDetailData(params.id);
    console.log(blogdetaildata);
    return <div><p> {params.id} </p></div>;
};

export default BlogDetailPage;