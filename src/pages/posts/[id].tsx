import axios from "axios";
import React, { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
const PostPage = ({ post }: any) => {
  const md = new MarkdownIt();
  const htmlcontent = md.render(post.content);
  return (
    <article className="w-[70%]">
      <header>
        <h1 className="text-2xl py-8">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlcontent }}></div>
      </header>
    </article>
  );
};

export default PostPage;

export async function getStaticProps({ params }: any) {
  const postRes = await axios.get(`${process.env.API}/api/posts/${params.id}`);

  return {
    props: {
      post: postRes.data.data.attributes,
    },
  };
}

export async function getStaticPaths() {
  const postRes = await axios.get(`${process.env.API}/api/posts/`);

  const postd = await postRes.data;

  const paths = postd.data.map((post: any) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
