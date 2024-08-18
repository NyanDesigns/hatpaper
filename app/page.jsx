// app/page.jsx
import { Footer } from "@/components/footer";
import AnimatedHome from "@/components/home";
import Navigation from "@/components/navbar";
import { getChapterMetadata } from "@/lib/getChapterMetadata";

export default async function Home() {
  // Fetch the chapter metadata
  const chapters = await getChapterMetadata();

  return (
    <>
      <Navigation />
      <AnimatedHome chapters={chapters} />
      <Footer />
    </>
  );
}
