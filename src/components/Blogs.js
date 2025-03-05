import { useState, useEffect } from "react";
import Layout from "./Layout";
import Image from "next/image";
import { motion } from "framer-motion";

const extractImageFromContent = (content) => {
  const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["']/;
  const match = content.match(imgRegex);
  return match ? match[1] : "/images/medium.png"; // Use fallback image
};

const Blogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mayurdhvajsinhjadeja"
    )
      .then(async (res) => {
        const dataa = await res.json();
        console.log("API Response:", dataa); // Debug API response
        setData(dataa);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
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

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto space-x-6 w-full px-4 py-2 scrollbar-hide">
              {loading
                ? // Skeleton Loader
                  [...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="relative bg-gray-700 dark:bg-gray-200 shadow-md border border-gray-200 dark:border-gray-950 rounded-lg min-w-[300px] max-w-[320px] flex flex-col animate-pulse"
                    >
                      <div className="relative rounded-t-lg overflow-hidden h-48 bg-gray-600 dark:bg-gray-300"></div>
                      <div className="p-5 flex flex-col pt-3">
                        <div className="h-5 bg-gray-500 dark:bg-gray-400 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-500 dark:bg-gray-400 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))
                : // Blog Cards
                  data?.items?.map((blog) => {
                    const imageUrl = blog.thumbnail?.trim()
                      ? blog.thumbnail
                      : extractImageFromContent(blog.content);

                    return (
                      <motion.div
                        key={blog.guid}
                        className="relative bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light shadow-md border-2 rounded-lg min-w-[300px] max-w-[320px] flex flex-col"
                      >
                        {/* Blog Image */}
                        <div className="relative rounded-t-lg overflow-hidden h-48 border-b-2 border-light dark:border-dark">
                          <Image
                            unoptimized
                            src={imageUrl}
                            alt="Blog Thumbnail"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>

                        {/* Blog Content */}
                        <div className="p-5 flex flex-col pt-3">
                          <h5 className="text-light dark:text-dark font-bold text-lg tracking-tight mb-2 line-clamp-2">
                            {blog.title}
                          </h5>

                          {/* Read Blog Button Below */}
                          <a
                            href={blog.link}
                            target="_blank"
                            className="mt-4 block text-center rounded-lg border-2 border-dark bg-light text-dark px-4 py-1 text-sm font-semibold 
                                      hover:bg-dark hover:text-light hover:border-light 
                                      dark:border-light dark:bg-dark dark:text-light 
                                      dark:hover:bg-light dark:hover:text-dark dark:hover:border-dark 
                                      transition duration-300"
                          >
                            Read Full Blog
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Blogs;
