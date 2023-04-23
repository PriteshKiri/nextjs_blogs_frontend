import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const HomeLatestPosts = ({ posts }: any) => {
  const [latestPost, setLatestPosts] = useState([]);

  useEffect(() => {
    if (posts.length >= 6) {
      setLatestPosts(posts.slice(0, 5));
    } else {
      setLatestPosts(posts);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  gap-5 mt-7">
      {latestPost.map((item, i) => {
        return <PostCard key={i} posts={item} />;
      })}
    </div>
  );
};

export default HomeLatestPosts;
