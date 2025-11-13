import type { ComponentPropsWithoutRef, ElementType } from "react";

type SkillCardPropsType = ComponentPropsWithoutRef<"div"> & {
  name: string;
  icon: ElementType;
};

function SkillCard({ name, icon }: SkillCardPropsType) {
  const SkillIcon = icon;
  return (
    <div className="inline-flex items-center gap-4 px-3 py-3 outline-2 outline-white/10 rounded-lg">
      <SkillIcon size="size-6" color="text-emerald-300" />
      <span className="font-semibold">{name}</span>
    </div>
  );
}
export default SkillCard;
