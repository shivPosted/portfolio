import SkillCard from "./SkillCard";
import SquareJSIcon from "../assets/icons/square-js";
import HTML5 from "../assets/icons/html5";
import CSS3 from "../assets/icons/css3";
import Chrome from "../assets/icons/chrome";
import ReactIcon from "../assets/icons/react";
import Github from "../assets/icons/github";
import NodeJSIcon from "../assets/icons/nodejsicon";

const skills = [
  {
    name: "JavaScript",
    icon: SquareJSIcon,
  },
  {
    name: "HTML5",
    icon: HTML5,
  },
  {
    name: "CSS3",
    icon: CSS3,
  },
  {
    name: "Chrome",
    icon: Chrome,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "GitHub",
    icon: Github,
  },
  {
    name: "NodeJS",
    icon: NodeJSIcon,
  },
];

function Skills({ innerClassNameWrapper }: { innerClassNameWrapper?: string }) {
  return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pt-4">
      <div
        className={[
          "flex-none space-x-6 py-0.5 pr-6",
          innerClassNameWrapper,
        ].join(" ")}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
export default Skills;
