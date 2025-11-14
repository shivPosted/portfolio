import type { ComponentPropsWithoutRef, ElementType } from "react";

type SkillCardPropsType = ComponentPropsWithoutRef<"div"> & {
  name: string;
  icon: ElementType;
};

function SkillCard({ name, icon }: SkillCardPropsType) {
  const SkillIcon = icon;
  return (
    <div className="inline-flex items-center gap-4 px-3 py-1.5 outline-2 outline-white/10 rounded-lg ">
      <SkillIcon size="size-10" fill="fill-[url(#icon-gradient)]" />
      <span className="font-semibold">{name}</span>
      <svg className="size-0 absolute">
        {/*using linear gradient for svg icon*/}
        <linearGradient id="icon-gradient">
          <stop offset="0%" stopColor="#5ee9b5" />
          <stop offset="100%" stopColor="#00bcff" />
        </linearGradient>
      </svg>
    </div>
  );
}
export default SkillCard;
