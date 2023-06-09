import axios from "axios";
import React from "react";
import HomeLatestPosts from "@/components/HomeLatestPosts";
const Home = ({ posts }: any) => {
  console.log(posts.data);

  if (posts.data) {
    return (
      <div>
        <HomeLatestPosts posts={posts.data} />
      </div>
    );
  } else {
    <h1>Loading...</h1>;
  }
};

export default Home;

export async function getStaticProps() {
  const postRes = await axios.get(`${process.env.API}/api/posts/`);

  return {
    props: {
      posts: postRes.data,
    },
  };
}
