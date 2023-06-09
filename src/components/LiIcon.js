import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "start center"],
  });
  return (
    <figure className="absolute left-0" ref={reference}>
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-blue-700 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[4px] fill-white stroke-dark dark:fill-black dark:stroke-light"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-blue-700" />
      </svg>
    </figure>
  );
};

export default LiIcon;
