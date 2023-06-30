import Home from "@/components/Home";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const home = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Mayurdhvaj</title>
      </Head>
      <Home />
    </>
  );
};

export default home;
