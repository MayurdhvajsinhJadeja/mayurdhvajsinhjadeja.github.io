import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";
import Layout from "../components/Layout";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-blue-700"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
            <h2 className="mb-4 text-6xl font-bold uppercase text-dark/75">
              Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-[35px] top-0 w-[4px] h-full bg-dark origin-top"
              />
              <ul className="w-full flex flex-col items-start justify-between ml-4">
                <Details
                  position="Software Engineer"
                  company="Google"
                  companyLink="www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                />
                <Details
                  position="Software Engineer"
                  company="Google"
                  companyLink="www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                />
                <Details
                  position="Software Engineer"
                  company="Google"
                  companyLink="www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                />
                <Details
                  position="Software Engineer"
                  company="Google"
                  companyLink="www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
                />
                <Details
                  position="Software Engineer"
                  company="Google"
                  companyLink="www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
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
