import Projects from "@/components/Projects";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const projects = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Mayurdhvaj | Projects</title>
      </Head>
      <Projects />
    </>
  );
};

export default projects;
