import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Mayurdhvaj | About</title>
      </Head>
      <About />
      <Skills />
      <Education />
      <Experience />
    </>
  );
};

export default about;
