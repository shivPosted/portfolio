import type { ComponentPropsWithoutRef } from "react";

type SectionHeaderPropTypes = ComponentPropsWithoutRef<"div"> & {
  eyebrow: string;
  heading: string;
  description: string;
};

function SectionHeader({
  eyebrow,
  heading,
  description,
}: SectionHeaderPropTypes) {
  return (
    <div className="text-center">
      <div className="flex justify-center tracking-widest">
        <h1 className="text-lg bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-semibold uppercase">
          {eyebrow}
        </h1>
      </div>
      <h2 className="text-3xl font-calistogo tracking-wide my-2">{heading}</h2>
      <p className="text-white/60  tracking-wide text-pretty">{description}</p>
    </div>
  );
}
export default SectionHeader;
