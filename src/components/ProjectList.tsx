import Project from "./Project";
import omnifoodProjectThumbnail from "../assets/images/omnifood-landing-page.png";
import worldiwiseProjectThumbnail from "../assets/images/worldwise-landing-page.png";
import fastPizzaProjectThumbnail from "../assets/images/omnifood-landing-page.png";
import usePopCornProjectThumbnail from "../assets/images/usepopcorn-landing-page.png";

const projectData = [
  {
    name: "Fast Pizza",
    description: "A Pizza Delivering  Simulation",
    projectHighlights: ["quality 1", "quality 2", "quality 3"],
    liveURL: "https://fastpizza.shivpratap.com",
    img: fastPizzaProjectThumbnail,
  },
  {
    name: "Omnifood",
    description: "A Visual Page for a Restaurant",
    projectHighlights: ["quality 1", "quality 2", "quality 3"],
    liveURL: "https://fastpizza.shivpratap.com",
    img: omnifoodProjectThumbnail,
  },
  {
    name: "usePopcorn",
    description: "Rate Movies and add to Watchlist",
    projectHighlights: ["quality 1", "quality 2", "quality 3"],
    liveURL: "https://fastpizza.shivpratap.com",
    img: usePopCornProjectThumbnail,
  },
  {
    name: "Worldwise",
    description: "Save locations and favourite cities",
    projectHighlights: ["quality 1", "quality 2", "quality 3"],
    liveURL: "https://fastpizza.shivpratap.com",
    img: worldiwiseProjectThumbnail,
  },
];

function ProjectList() {
  return (
    <ul className="flex flex-col gap-8 justify-center">
      {projectData.map((data, index) => (
        <Project
          key={data.name}
          projectData={data}
          stickyTopPosition={64 + index * 30}
        />
      ))}
    </ul>
  );
}
export default ProjectList;
