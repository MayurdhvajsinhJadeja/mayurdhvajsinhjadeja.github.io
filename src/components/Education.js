import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Layout from "./Layout";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl dark:text-light">
          {position}&nbsp;
          <p className="capitalize text-blue-700">@{company}</p>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full dark:text-light">{work}</p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center">
      <Layout classname="pt-0">
        <div className="my-8 w-full">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-10 text-6xl font-bold uppercase text-dark/75 dark:text-light">
              Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-[35px] top-1 w-[4px] h-[380px] bg-dark origin-top dark:bg-light"
              />
              <ul className="w-full flex flex-col items-start justify-start ml-4">
                <Details
                  position="Bachelor of Technology"
                  company="Marwadi University"
                  time="2020 - 2024 (Currently Pursuing)"
                  address="Rajkot, Gujarat, India"
                  work="CGPA: 8.07"
                />
                <Details
                  position="Higher Secondary School"
                  company="BAPS Swaminarayan Vidyamandir"
                  time="2019 - 2020"
                  address="Gondal, Gujarat, India"
                  work="Completed higher secondary education."
                />
                <Details
                  position="Secondary School"
                  company="BAPS Swaminarayan Vidyamandir"
                  time="2017 - 2018"
                  address="Gondal, Gujarat, India"
                  work="Completed secondary education."
                />
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Education;
