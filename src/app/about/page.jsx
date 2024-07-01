"use client";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    > About</motion.div>
  )
}

export default About