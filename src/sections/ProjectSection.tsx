import ProjectList from "../components/ProjectList";

function ProjectSection() {
  return (
    <div className="container mx-auto flex flex-col items-center py-4 gap-16">
      <div className="text-center">
        <h1 className="text-sm text-emerald-300 uppercase ">Projects</h1>
        <h2 className="text-2xl  font-calistogo tracking-wide my-2">
          My Top Projects
        </h2>
        <p className="text-white/60 text-sm tracking-wide text-pretty">
          See how I tranformed ideas into digital experience.
        </p>
      </div>
      <ProjectList />
    </div>
  );
}
export default ProjectSection;
