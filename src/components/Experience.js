import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Layout from "./Layout";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl dark:text-light">
          {position}&nbsp;<p className="capitalize text-blue-700">@{company}</p>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full dark:text-light">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
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
              Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-[35px] top-1 w-[4px] h-[240px] bg-dark origin-top dark:bg-light"
              />
              <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details
                  position="Junior Software Engineer"
                  company="ZURU Tech"
                  time="May 2023 - Ongoing"
                  address="Ahmedabad, Gujarat, India"
                  work="Working on server-side logic, REST APIs,  databases,
                    collaborating with cross-functional teams"
                />
                <Details
                  position="Data Analyst"
                  company="Technocolabs Softwares"
                  time="May 2022 - June 2022"
                  address="Online"
                  work="Completed a minor project on Bigmart sales prediction and a major project on H1B visa approval prediction.
                    Developed skills in exploratory data analysis, feature engineering, machine learning model building, and deployment on live server."
                />
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Experience;
