import type { ComponentPropsWithoutRef } from "react";
import Arrowup from "../assets/icons/arrow-up-right";
import Checkcirlcle from "../assets/icons/check-circle";
import grainTexture from "../assets/images/graintexture.jpeg";

type ProjectPropsType = ComponentPropsWithoutRef<"li"> & {
  projectData: {
    name: string;
    description: string;
    projectHighlights: string[];
    liveURL: string;
    img: string;
  };
};

function Project({ projectData }: ProjectPropsType) {
  return (
    <li className="border flex flex-col  justify-center md:items-start md:mx-6 lg:flex-row items-center gap-6 border-white/50 rounded-2xl px-6 pt-6 relative bg-slate-700/80 overflow-clip">
      <div>
        <div className="border-b-2 border-b-white/30">
          <h3 className="text-emerald-300 text-lg">{projectData.name}</h3>
          <h4 className="mt-1.5 mb-2.5 font-calistogo font-semibold md:text-3xl md:font-normal tracking-wide">
            {projectData.description}
          </h4>
        </div>
        <div className="mt-4 space-y-2">
          {projectData?.projectHighlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-white/65 text-lg"
            >
              {" "}
              <Checkcirlcle className="size-4" /> <span>{highlight}</span>{" "}
            </li>
          ))}
          <a href={projectData.liveURL} className="block pt-3">
            <button className="bg-white text-gray-800 py-2 px-4 text-sm rounded-lg capitalize inline-flex gap-2 items-center justify-center font-semibold w-full md:w-fit md:font-bold">
              <span>Visit live site </span>
              <Arrowup width="16" height="16" />
            </button>
          </a>
        </div>
      </div>
      <figure className="w-full">
        <img
          src={projectData.img}
          alt={`${projectData.name} thumbnail image`}
          className="size-full"
        />
      </figure>
      <figure className="absolute top-0 left-0 size-full bg-fit -z-10 self-end">
        <img src={grainTexture} alt="" className="size-full" />
      </figure>
    </li>
  );
}
export default Project;
