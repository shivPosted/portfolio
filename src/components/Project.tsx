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
      className="px-3 mb-16 sticky"
      style={{
        top: `${stickyTopPosition}px`,
      }}
    >
      <Card className="flex-col gap-6 md:pt-12 md:px-10 md:items-start md:mx-6 lg:flex-row items-center px-8 lg:pl-24 pt-8">
        <div>
          <div>
            <h3 className="bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase tracking-widest bg-clip-text text-sm text-transparent">
              {projectData.name}
            </h3>
            <h4 className="mt-2 font-calistogo font-semibold text-2xl md:text-4xl md:mt-5 md:font-normal tracking-wide">
              {projectData.description}
            </h4>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="mt-4 flex flex-col gap-4">
            {projectData?.projectHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-white/50 text-sm md:text-base  items-center"
              >
                {" "}
                <Checkcirlcle className="size-4 md:size-6" />
                <span>{highlight}</span>{" "}
              </li>
            ))}
            <a href={projectData.liveURL} className="block pt-3 cursor-default">
              <button className="bg-white text-gray-800 h-12 py-2 px-6 rounded-xl capitalize inline-flex gap-2 items-center justify-center font-semibold w-full md:w-auto md:font-bold cursor-pointer">
                <span>Visit live site </span>
                <Arrowup width="16" height="16" />
              </button>
            </a>
          </ul>
        </div>
        <figure className="w-full mt-8 -translate-y-1 flex lg:justify-end lg:translate-x-[10%]">
          <div className="border border-[#71717b] max-w-max rounded-t-xl border-b-0">
            <div className="relative mx-auto border-[12px] border-gray-900 rounded-t-xl h-full max-w-fit md:h-[294px] lg:h-[360px] md:max-w-fit">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] lg:h-[360px]">
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
