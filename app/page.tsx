import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GithubSection } from "@/components/sections/Github";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";
import { getPinnedRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getPinnedRepos("SushanthKS06");

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection repos={repos} />
      <ResumeSection />
      <Contact />
    </main>
  );
}
