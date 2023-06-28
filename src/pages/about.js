import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>About Page</title>
      </Head>
      <main className="flex w-full h-screen flex-col items-center justify-center">
        <Layout classname="pt-0">
          <div className="my-8 w-full">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-4 text-6xl font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium text-lg">
                Hey there! My name is Mayurdhvaj, and I&apos;m from the charming
                town of Gondal in Gujarat. I have a range of interests that
                revolve around Data Science, AI-ML, and the exciting world of
                Web Development.
              </p>
              <p className="font-medium text-lg mt-4">
                When it comes to Data Science, I love diving into complex
                datasets and uncovering valuable insights. I use Python as my
                go-to tool for working with data, and I&apos;ve completed
                several projects where I&apos;ve analyzed data, built machine
                learning models, and made predictions. It&apos;s incredibly
                satisfying to transform raw data into meaningful solutions that
                can have a real impact.
              </p>
              <p className="font-medium text-lg mt-4">
                AI-ML is an integral part of my Data Science journey. I&apos;m
                captivated by the endless possibilities that artificial
                intelligence and machine learning offer. I constantly explore
                the latest algorithms and techniques to develop intelligent
                systems that can learn, adapt, and make accurate predictions.
                Through my projects, I&apos;ve gained hands-on experience in
                applying AI-ML to solve complex problems.
              </p>
              <p className="font-medium text-lg mt-4">
                Outside the world of technology, I find joy in other activities
                that bring balance to my life. Chess is a game that allows me to
                exercise my strategic thinking, while singing and playing the
                guitar provide a creative outlet. And of course, who
                doesn&apos;t enjoy the occasional video game session to unwind
                and have some fun?
              </p>
              <p className="font-medium text-lg my-4">
                In the realm of Web Development, I&apos;m well-versed in a
                variety of technologies, including HTML, CSS, JavaScript,
                Node.js, React.js, and Next.js. I enjoy creating visually
                appealing and user-friendly websites that seamlessly blend
                functionality and aesthetics.
              </p>
              <p className="font-medium text-lg">
              Feel free to explore my portfolio and get in touch!
              </p>
            </div>
          </div>
        </Layout>
      </main>
      <Skills />
      <Experience />
    </>
  );
};

export default about;
