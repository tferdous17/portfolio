import { AboutMe } from "@/components/page-ui/AboutMe";
import { ExperienceSection } from "@/components/page-ui/ExperienceSection";
import LandingPage from "@/components/page-ui/LandingPage";
import { Navbar } from "@/components/page-ui/Navbar";
import { ProjectsSection } from "@/components/page-ui/ProjectsSection";
import { SkillsSection } from "@/components/page-ui/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
}
