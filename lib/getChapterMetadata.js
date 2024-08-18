// app/getChapterMetadata.js
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function getChapterMetadata() {
  // Specify the directory where your markdown files are located
  const postsDirectory = path.join(process.cwd(), "chapters");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      description: matterResult.data.description,
      slug: matterResult.data.title.replace(" ", "_").toLowerCase(),
      modified_title: matterResult.data.title.toLowerCase(),
    };
  });

  return allPostsData;
}
