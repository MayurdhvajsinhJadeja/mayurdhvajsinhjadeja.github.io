import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:border-light"
    >
      <Layout classname="py-8 flex items-center justify-between dark:text-light">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
            Build by <a href="https://www.linkedin.com/in/mayurdhvajsinh-jadeja/" className="underline underline-offset-3 text-sky-600">Mayurdhvaj</a>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
