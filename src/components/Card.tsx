import grainTexture from "../assets/images/graintexture.jpeg";

import type { ComponentPropsWithoutRef } from "react";
type CardPropType = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  color?: string;
};
function Card({ children, className, color = "bg-slate-800" }: CardPropType) {
  return (
    <div
      className={[
        "flex rounded-3xl relative overflow-clip outline-2 -outline-offset-2 outline-white/20 ",
        className,
        color,
      ].join(" ")}
    >
      {children}
      <figure className="absolute top-0 left-0 size-full rounded-3xl  -z-10 self-end">
        <img src={grainTexture} alt="" className="size-full opacity-70" />
      </figure>
    </div>
  );
}
export default Card;
