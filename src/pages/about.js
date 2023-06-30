import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition === 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Mayurdhvaj | About</title>
      </Head>
      
      <About />
      <div
        className={` scroll-down2 ml-[92%] mt-[-10%] ${
          showScroll ? 'show-scroll' : 'hide-scroll'
        }`}
        id="scroll-down"
      />
      <Skills />
      <Education />
      <Experience />
      
      <style jsx>{`
        .scroll-down2 {
          opacity: 1;
          transition: opacity 0.5s;
        }
        
        .show-scroll {
          opacity: 1;
        }
        
        .hide-scroll {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default AboutPage;
