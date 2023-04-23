import Link from "next/link";
import React from "react";

const PostCard = ({ posts }: any) => {
  const postss = posts.attributes
  return (
    <div className="flex flex-col items-start items-center ">
      <Link href={`/posts/${posts.id}`} className="w-[65%] border p-8">
        <h1 className="text-xl ont-extrabold mb-3">{postss.title}</h1>
        <p>{postss.description}</p>
      </Link>
    </div>
  );
};

export default PostCard;
