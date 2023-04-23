import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const AllPostsList = ({ posts }: any) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(posts);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  gap-5 mt-7">
      {Posts.map((item, i) => {
        return <PostCard key={i} posts={item} />;
      })}
    </div>
  );
};

export default AllPostsList;
