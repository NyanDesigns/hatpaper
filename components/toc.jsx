// components/toc.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const ChapterList = ({ chapters }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  // Helper function to convert subtitle to array
  const getSubtitleArray = (subtitle) => {
    if (Array.isArray(subtitle)) {
      return subtitle;
    } else if (typeof subtitle === "string") {
      return subtitle.split(", ");
    }
    return [];
  };

  return (
    <section className="flex flex-col items-center w-full">
      {chapters.map((chapter, index) => (
        <motion.div
          key={index}
          className="w-full max-w-md mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 2.75 + index * 0.5 }}
        >
          <motion.div
            className="w-full sm-w-[800px] px-4 py-2 cursor-pointer bg-foreground text-background"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredSection(chapter.title)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {hoveredSection === chapter.title ? (
              <motion.div
                className="px-4 py-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {getSubtitleArray(chapter.subtitle).map((item, itemIndex) => (
                  <Link
                    key={`${index}-${itemIndex}`}
                    href={`/chapters/${chapter.slug}`}
                    className="block mb-2"
                  >
                    <motion.p
                      className="cursor-pointer last:mb-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                    >
                      {item}
                    </motion.p>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <div className="text-lg font-semibold tracking-wide text-center">
                {chapter.title}
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default ChapterList;
