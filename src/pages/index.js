import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
// import './hero.css';
import profilePic from "../../public/images/profile/WhatsApp_Image_2023-06-26_at_17.44.54-removebg-preview.png";
import Link from "next/link";
import { LinkArrow } from "../../public/All-Texts/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  const [showMayurdhvaj, setShowMayurdhvaj] = useState(false);
  const [showWebDev, setShowWebDev] = useState(false);
  const [cursorVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowMayurdhvaj(true);
    }, 100); // Delay before showing "Mayurdhvaj"

    setTimeout(() => {
      setShowWebDev(true);
    }, 100); // Delay before showing "Web Development"

    return () => {
      setShowMayurdhvaj(false);
      setShowWebDev(false);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Mayurdhvaj</title>
        <meta name="description" content="portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout classname="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/5">
              <Image
                src={profilePic}
                alt="Mayurdhvaj"
                className="w-full height-auto"
              />
            </div>
            <div id="hero" className="hero-section w-4/5">
              <div className="container ">
                <h2 className="hero-title text-6xl">
                  Hi, I am{" "}
                  {showMayurdhvaj ? (
                    <TypeAnimation
                      sequence={["Mayurdhvajsinh Jadeja."]}
                      wrapper="span"
                      cursor={cursorVisible}
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "#000",
                      }}
                    />
                  ) : null}
                </h2>
                <h3
                  className={`hero-description ${
                    showWebDev ? "show" : ""
                  } text-5xl`}
                >
                  I am passionate about{" "}
                  {showWebDev ? (
                    <TypeAnimation
                      sequence={[
                        "Data Science.",
                        1000,
                        "AI-ML.",
                        1000,
                        "WebDev.",
                        1000,
                      ]}
                      wrapper="span"
                      cursor={cursorVisible}
                      repeat={Infinity}
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "#000",
                      }}
                    />
                  ) : null}
                </h3>
                <div className="flex items-center self-start mt-3">
                  <Link
                    href="/Resume-Mayurdhvajsinh-Jadeja.pdf"
                    target={"_blank"}
                    className="flex items-center bg-dark text-light p-1.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  >
                    Resume
                    <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link
                    href="mailto:mayurdhvajsinhjadeja123@gmail.com"
                    target={"_blank"}
                    className="flex items-center bg-light text-dark p-1.5 mx-2 px-10 rounded-lg text-lg font-semibold
                    hover:bg-dark hover:text-light border-2 border-solid border-dark hover:border-light"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
