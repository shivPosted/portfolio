import grainTexture from "../assets/images/graintexture.jpeg";

import type { ComponentPropsWithoutRef } from "react";
type CardPropType = ComponentPropsWithoutRef<"div"> & {
  className?: string;
};
function Card({ children, className }: CardPropType) {
  return (
    <div
      className={[
        "flex rounded-3xl relative bg-slate-800/90 overflow-clip mx-3",
        className,
      ].join(" ")}
    >
      {children}
      <figure className="absolute top-0 left-0 size-full outline-2  -outline-offset-2 outline-white/80 rounded-3xl  -z-10 self-end">
        <img src={grainTexture} alt="" className="size-full" />
      </figure>
    </div>
  );
}
export default Card;
