import Project from "./Project";
import omnifoodProjectThumbnail from "../assets/images/omnifood-screenshot.png";
import worldiwiseProjectThumbnail from "../assets/images/worldwise-screenshot.png";
import fastPizzaProjectThumbnail from "../assets/images/pizza-screenshot.png";
import usePopCornProjectThumbnail from "../assets/images/usePopcorn-screenshot.png";

const projectData = [
  {
    name: "Fast Pizza",
    description: "A Pizza Delivering  Simulation",
    projectHighlights: [
      "Interactive cart system.",
      "Optimized user experience.",
      "Built a fully responsive pizza ordering app",
    ],
    liveURL: "https://fastpizza.shivpratap.com",
    img: fastPizzaProjectThumbnail,
  },
  {
    name: "Omnifood",
    description: "A Visual Page for a Restaurant",
    projectHighlights: [
      "Built a fully responsive food-service web app",
      "Ensured cross-device compatibility.",
      "Created modular components.",
    ],
    liveURL: "https://omnifood.shivpratap.com",
    img: omnifoodProjectThumbnail,
  },
  {
    name: "usePopcorn",
    description: "Rate Movies and add to Watchlist",
    projectHighlights: [
      "Built a React app for movie discovery",
      "Integrated external movie database API",
      "Version-controlled and deployed.",
    ],
    liveURL: "https://usepopcorn-v1.shivpratap.com",
    img: usePopCornProjectThumbnail,
  },
  {
    name: "Worldwise",
    description: "Save locations and favourite cities",
    projectHighlights: [
      "Implemented global state management.",
      "Built a map-based React app.",
      "Used supabse for city data storage.",
    ],
    liveURL: "https://worldwise.shivpratap.com",
    img: worldiwiseProjectThumbnail,
  },
];

function ProjectList() {
  return (
    <ul className="flex flex-col gap-20 justify-center">
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
