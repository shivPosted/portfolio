import type { ComponentPropsWithoutRef } from "react";
import Arrowup from "../assets/icons/arrow-up-right";
import Checkcirlcle from "../assets/icons/check-circle";
import Card from "./Card";

type ProjectPropsType = ComponentPropsWithoutRef<"li"> & {
  projectData: {
    name: string;
    description: string;
    projectHighlights: string[];
    liveURL: string;
    img: string;
  };
  stickyTopPosition: number;
};

function Project({ projectData, stickyTopPosition }: ProjectPropsType) {
  return (
    <li
      className="px-3 sticky"
      style={{
        top: `${stickyTopPosition}px`,
      }}
    >
      <Card className="flex-col gap-6 md:items-start md:mx-6 lg:flex-row justify-center items-center px-6 pt-6">
        <div>
          <div>
            <h3 className="text-emerald-300 text-lg">{projectData.name}</h3>
            <h4 className="mt-1.5 mb-2.5 font-calistogo font-semibold md:text-3xl md:font-normal tracking-wide">
              {projectData.description}
            </h4>
          </div>
          <ul className="mt-4 space-y-2 border-t-2 border-t-white/30">
            {projectData?.projectHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 text-white/65 text-lg"
              >
                {" "}
                <Checkcirlcle className="size-4" />{" "}
                <span>{highlight}</span>{" "}
              </li>
            ))}
            <a href={projectData.liveURL} className="block pt-3">
              <button className="bg-white text-gray-800 py-2 px-4 text-sm rounded-lg capitalize inline-flex gap-2 items-center justify-center font-semibold w-full md:w-fit md:font-bold">
                <span>Visit live site </span>
                <Arrowup width="16" height="16" />
              </button>
            </a>
          </ul>
        </div>
        <figure className="w-full">
          <div className="border border-[#71717b] max-w-max rounded-t-xl border-b-transparent">
            <div className="relative mx-auto border-[12px] border-gray-900 rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px]">
                <img
                  src={projectData.img}
                  alt={`${projectData.name} thumbnail image`}
                  className="size-full"
                />
              </div>
            </div>
          </div>
        </figure>
      </Card>
    </li>
  );
}
export default Project;
