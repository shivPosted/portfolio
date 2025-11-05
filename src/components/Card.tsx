import grainTexture from "../assets/images/graintexture.jpeg";

import type { ComponentPropsWithoutRef } from "react";

function Card({ children }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className="flex flex-col  justify-center md:items-start md:mx-6 lg:flex-row items-center gap-6 rounded-3xl px-6 pt-6 relative bg-slate-800/90 overflow-clip">
      {children}
      <figure className="absolute top-0 left-0 size-full outline-2  -outline-offset-2 outline-white/80 rounded-3xl  -z-10 self-end">
        <img src={grainTexture} alt="" className="size-full" />
      </figure>
    </div>
  );
}
export default Card;
