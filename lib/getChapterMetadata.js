// lib/getChapterMetadata.js
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function getChapterMetadata() {
  const postsDirectory = path.join(process.cwd(), "chapters");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // Ensure subtitle is always an array
    const subtitle = Array.isArray(matterResult.data.subtitle)
      ? matterResult.data.subtitle
      : matterResult.data.subtitle.split(", ");

    return {
      id,
      title: matterResult.data.title,
      subtitle: subtitle,
      description: matterResult.data.description,
      slug: matterResult.data.title.replace(" ", "_").toLowerCase(),
      modified_title: matterResult.data.title.toLowerCase(),
    };
  });

  return allPostsData;
}
