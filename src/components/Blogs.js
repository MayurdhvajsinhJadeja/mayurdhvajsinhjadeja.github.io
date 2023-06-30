import { useState, useEffect } from "react";
import Layout from "./Layout";
import Image from "next/image";
import { motion } from "framer-motion";

const Blogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data !== undefined && data !== null) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mayurdhvajsinhjadeja"
    ).then(async (res) => {
      const dataa = await res.json();
      setData(dataa);
    });
  }, []);

  return (
    <main className="flex w-full h-fit flex-col items-center justify-center">
      <Layout classname="pt-8">
        <div className="my-8 w-full">
          <div className="flex flex-col justify-start">
            <h2 className="mb-8 text-6xl font-bold uppercase text-dark/75 dark:text-light">
              My Blogs
            </h2>
            <div className="flex flex-wrap justify-between">
              {!loading &&
                data.items.map((blog) => (
                  <motion.div
                    key={blog.guid}
                    className="relative dark:bg-light bg-dark shadow-md border border-gray-950 dark:border-gray-200 rounded-lg max-w-sm max-h-[300px] mb-5 flex flex-col"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  >
                    <div className="relative rounded-t-lg overflow-hidden min-h-[210px]">
                      <Image
                        unoptimized
                        src={blog.thumbnail}
                        alt="thumbnail"
                        width={400}
                        height={400}
                        className="min-h-full"
                      />
                    </div>
                    <div className="p-5 flex flex-col pt-3">
                      <h5 className="dark:text-dark text-light font-bold text-2xl tracking-tight mb-2 line-clamp-2">
                        {blog.title}
                      </h5>
                      <motion.div
                        className="hover:cursor-default flex justify-center items-center h-full absolute inset-0 bg-dark/80 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {/* <a
                            className="dark:text-light text-dark dark:bg-dark bg-light dark:hover:bg-light hover:bg-dark dark:hover:text-dark hover:text-light border-2 border-transparent dark:hover:border-dark border-light font-medium rounded-lg text-sm px-3 py-2 text-center items-center"
                            href={blog.link}
                            target="_blank"
                          >
                            Read more
                          </a> */}
                        <motion.p
                          className=" hover:cursor-pointer rounded-lg bg-light p-2 px-8 text-dark text-xl font-bold"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", bounce: 0.4 }}
                        >
                          <a href={blog.link} target="_blank">
                            Read Full Blog
                          </a>
                        </motion.p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Blogs;
