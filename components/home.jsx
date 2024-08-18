// components/AnimatedHome.jsx
"use client";
import { motion } from "framer-motion";
import ChapterList from "./toc";

export default function AnimatedHome({ chapters }) {
  return (
    <main className="flex flex-col justify-between min-h-screen subtitle-center">
      {/* heroSection */}
      <section className="flex flex-col justify-center min-h-screen gap-2 p-6 subtitle-center text-foreground">
        {/* title */}
        <motion.h1
          className="mt-16 mb-2 text-5xl font-semibold tracking-wide text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          Holistic Architecture Theory:
        </motion.h1>
        {/* subtitle */}
        <motion.h2
          className="mb-6 text-xl font-normal text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
        >
          Intersection of Four Architectural Dimensions
        </motion.h2>
        {/* table_of_contents */}
        <ChapterList chapters={chapters} />
      </section>
    </main>
  );
}
