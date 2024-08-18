import { Footer } from "@/components/footer";
import Navigation from "@/components/navbar";
import { getChapterMetadata } from "@/lib/getChapterMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";

const getContent = (slug) => {
  const folder = "chapters/";
  const file = `${folder}${slug}.md`;
  if (!fs.existsSync(file)) {
    notFound();
  }
  const content = fs.readFileSync(file, "utf8");

  const result = matter(content);
  return result;
};

export async function generateMetadata({ params }) {
  const title = params.slug ? ` - ${params.slug}` : "";
  return {
    title: `Holistic Architecture Theory ${title
      .replace("_", " ")
      .toUpperCase()}`,
  };
}

export async function generateStaticParams() {
  const chapters = await getChapterMetadata();
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

const ChapterPage = async ({ params }) => {
  const { slug } = params;
  const chapter = getContent(slug);
  const { title } = chapter.data;

  return (
    <>
      <Navigation />
      <section className="px-6 pt-10 mb-6">
        <div className="col-span-2 mt-16 markdown-content">
          <h1 className="mb-4 text-4xl font-bold">{title}</h1>
          <Markdown>{chapter.content}</Markdown>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ChapterPage;
