import axios from "axios";
import React from "react";
import AllPostsList from "@/components/AllPostsList";
const Posts = ({ posts }: any) => {
  if (posts) {
    return (
      <div>
        <AllPostsList posts={posts.data} />
      </div>
    );
  } else {
    <h1>Loading...</h1>;
  }
};

export default Posts;
export async function getStaticProps() {
  const postRes = await axios.get(`${process.env.API}/api/posts/`);

  return {
    props: {
      posts: postRes.data,
    },
  };
}
