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
      //   "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nparsons08"
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
                    className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 flex-grow flex flex-col"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  >
                    <div>
                      <Image
                        unoptimized
                        src={blog.thumbnail}
                        alt="thumbnail"
                        width={400}
                        height={400}
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {blog.title}
                      </h5>
                      <div className="flex-grow"></div>{" "}
                      {/* Add flex-grow class */}
                      <a
                        className="text-light bg-dark hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark font-medium rounded-lg text-sm px-3 py-2 text-center items-center"
                        href={blog.link}
                        target="_blank"
                      >
                        Read more
                      </a>
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
