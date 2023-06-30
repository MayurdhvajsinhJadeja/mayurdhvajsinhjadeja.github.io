import Blogs from "@/components/Blogs";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const blogs = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Mayurdhvaj | Blogs</title>
      </Head>
      <Blogs/>
    </>
  );
};

export default blogs;
