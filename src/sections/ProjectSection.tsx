import ProjectList from "../components/ProjectList";
import SectionHeader from "../components/SectionHeader";

function ProjectSection() {
  return (
    <section
      id="project-section"
      className="container lg:max-w-[80%] mx-auto flex flex-col items-center py-4 gap-16"
    >
      <SectionHeader
        description="
        See how I tranformed ideas into digital experience.
      "
        eyebrow="Projects"
        heading="My Top Projects"
      />
      <ProjectList />
    </section>
  );
}
export default ProjectSection;
