import type { ComponentPropsWithoutRef } from "react";

type OrbitPropType = ComponentPropsWithoutRef<"div"> & {
  size: number;
  rotation: number;
  toggleSpin?: boolean;
  toggleOrbit?: boolean;
  spinDuration?: string;
  orbitDuration: string;
};

function Orbit({
  size,
  rotation,
  children,
  toggleOrbit = false,
  toggleSpin = false,
  spinDuration,
  orbitDuration,
}: OrbitPropType) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className={[`${toggleOrbit ? "animate-spin" : ""}`].join(" ")}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={[
              "inline-flex justify-center items-center",
              `${toggleSpin ? "animate-spin" : ""}`,
            ].join(" ")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className=""
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Orbit;
