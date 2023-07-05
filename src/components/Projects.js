import Layout from "./Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import KanhaSays from "../../public/images/projects/KanhaSays.png";
import SignToText from "../../public/images/projects/SignToText.png";
import AlumniPortal from "../../public/images/projects/AlumniPortal.png";
import Baatein from "../../public/images/projects/Baatein.png";

const Projects = () => {
  return (
    <main className="flex w-full h-fit flex-col items-center justify-center">
      <Layout classname="pt-8">
        <div className="my-8 w-full">
          <div className="flex flex-col justify-start">
            <h2 className="mb-8 text-6xl font-bold uppercase text-dark/75 dark:text-light">
              My Projects
            </h2>
            <div className="flex flex-wrap justify-between">
              <div
                className="relative dark:bg-light bg-dark shadow-md border border-gray-950 dark:border-gray-200 rounded-lg max-w-sm max-h-[580px] mb-5 flex flex-col"
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", bounce: 0.4 }}
              >
                <div className="relative rounded-t-lg overflow-hidden min-h-[200px]">
                  <Image
                    unoptimized
                    src={KanhaSays}
                    alt="thumbnail"
                    width={400}
                    height={400}
                    className=" min-h-full"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h5 className="dark:text-dark text-light font-bold text-2xl tracking-tight line-clamp-1">
                    KanhaSays
                  </h5>
                  <ul className="list-disc dark:text-dark text-light font-medium text-md tracking-tight p-4">
                    <li>
                      NLP techniques analyze user input and understand question
                      intent by breaking down the question and identifying
                      important words and phrases.
                    </li>
                    <li>
                      AI model trained on Bhagwat Gita text recognizes relevant
                      quotes based on user&apos;s question context using a large
                      dataset and robust algorithm.
                    </li>
                    <li>
                      User can ask any question related to their life and the
                      Chatbot will reply with a quote from Bhagwat Gita to
                      motivate the person.
                    </li>
                  </ul>
                  <motion.div
                    className="bg-light/80 hover:cursor-default flex justify-center items-center h-full absolute inset-0 dark:bg-dark/80 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.p
                      className=" hover:cursor-pointer rounded-lg bg-dark text-light p-2 px-8 text-xl font-bold hover:bg-light hover:text-dark dark:hover:bg-light dark:hover:text-dark"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                    >
                      <a
                        href={`https://github.com/MayurdhvajsinhJadeja/`}
                        target="_blank"
                      >
                        View on Github
                      </a>
                    </motion.p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className="relative dark:bg-light bg-dark shadow-md border border-gray-950 dark:border-gray-200 rounded-lg max-w-sm max-h-[580px] mb-5 flex flex-col"
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", bounce: 0.4 }}
              >
                <div className="relative rounded-t-lg overflow-hidden min-h-[200px]">
                  <Image
                    unoptimized
                    src={Baatein}
                    alt="thumbnail"
                    width={400}
                    height={400}
                    className=" min-h-full"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h5 className="dark:text-dark text-light font-bold text-2xl tracking-tight line-clamp-1">
                    Baatein
                  </h5>
                  <ul className="list-disc dark:text-dark text-light font-medium text-md tracking-tight p-4">
                    <li>
                      Baatein is a Node.js and Socket.io based chat application
                      that enables real-time conversations with multiple users.
                    </li>
                    <li>
                      Upon logging in, users have the option to choose their
                      avatar, allowing them to personalize their online
                      identity.
                    </li>
                    <li>
                      Once logged in and with an avatar selected, users can
                      enter their desired chat room and participate in
                      conversations with other users who are also logged in.
                    </li>
                  </ul>
                  <motion.div
                    className="bg-light/80 hover:cursor-default flex justify-center items-center h-full absolute inset-0 dark:bg-dark/80 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.p
                      className=" hover:cursor-pointer rounded-lg bg-dark text-light p-2 px-8 text-xl font-bold hover:bg-light hover:text-dark dark:hover:bg-light dark:hover:text-dark"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                    >
                      <a
                        href={`https://github.com/MayurdhvajsinhJadeja/`}
                        target="_blank"
                      >
                        View on Github
                      </a>
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative dark:bg-light bg-dark shadow-md border border-gray-950 dark:border-gray-200 rounded-lg max-w-sm max-h-[580px] mb-5 flex flex-col"
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", bounce: 0.4 }}
              >
                <div className="relative rounded-t-lg overflow-hidden min-h-[200px]">
                  <Image
                    unoptimized
                    src={SignToText}
                    alt="thumbnail"
                    width={400}
                    height={400}
                    className=" min-h-full"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h5 className="dark:text-dark text-light font-bold text-2xl tracking-tight line-clamp-2">
                    Sign Language to Text & Speech Converter:
                  </h5>
                  <ul className="list-disc dark:text-dark text-light font-medium text-md tracking-tight p-4">
                    <li>
                      Used Machine Learning algorithms to detect hand signs in
                      real-time using computer vision techniques.
                    </li>
                    <li>
                      The algorithm was trained on a self collected video
                      dataset of hand signs.
                    </li>
                    <li>
                      Once a sign is recognized, the corresponding text can be
                      displayed on a screen or spoken aloud using text-to-speech
                      technology
                    </li>
                  </ul>
                  <motion.div
                    className="bg-light/80 hover:cursor-default flex justify-center items-center h-full absolute inset-0 dark:bg-dark/80 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.p
                      className=" hover:cursor-pointer rounded-lg bg-dark text-light p-2 px-8 text-xl font-bold hover:bg-light hover:text-dark dark:hover:bg-light dark:hover:text-dark"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                    >
                      <a
                        href={`https://github.com/MayurdhvajsinhJadeja/`}
                        target="_blank"
                      >
                        View on Github
                      </a>
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative dark:bg-light bg-dark shadow-md border border-gray-950 dark:border-gray-200 rounded-lg max-w-sm max-h-[580px] mb-5 flex flex-col"
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", bounce: 0.4 }}
              >
                <div className="relative rounded-t-lg overflow-hidden min-h-[200px]">
                  <Image
                    unoptimized
                    src={AlumniPortal}
                    alt="thumbnail"
                    width={400}
                    height={400}
                    className=" min-h-full"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <h5 className="dark:text-dark text-light font-bold text-2xl tracking-tight line-clamp-1">
                    Alumni Portal
                  </h5>
                  <ul className="list-disc dark:text-dark text-light font-medium text-md tracking-tight p-4">
                    <li>
                      Developed a web portal using HTML, CSS, JavaScript, and
                      MySQL to facilitate the sharing of information and news
                      about alumni students.
                    </li>
                    <li>
                      Designed a user-friendly interface and integrated a MySQL
                      database to efficiently store and retrieve information
                      about alumni.
                    </li>
                  </ul>
                  <motion.div
                    className="bg-light/80 hover:cursor-default flex justify-center items-center h-full absolute inset-0 dark:bg-dark/80 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.p
                      className=" hover:cursor-pointer rounded-lg bg-dark text-light p-2 px-8 text-xl font-bold hover:bg-light hover:text-dark dark:hover:bg-light dark:hover:text-dark"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                    >
                      <a
                        href={`https://github.com/MayurdhvajsinhJadeja/`}
                        target="_blank"
                      >
                        View on Github
                      </a>
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Projects;
