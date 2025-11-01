import type { ComponentPropsWithoutRef } from "react";

type OrbitPropType = ComponentPropsWithoutRef<"div"> & {
  size: number;
  rotation: number;
};

function Orbit({ size, rotation, children }: OrbitPropType) {
  return (
    <div
      className={[
        "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
        `${size >= 720 ? "hidden lg:block" : ""}`,
      ].join(" ")}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className="inline-flex"
        style={{
          transform: `rotate(${rotation * -1}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
export default Orbit;
