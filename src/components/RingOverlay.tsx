import type { ComponentPropsWithoutRef } from "react";

type RingOverlayProps = ComponentPropsWithoutRef<"div"> & {
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

const sizeMapping = {
  sm: "size-[620px]",
  md: "size-[820px]",
  lg: "size-[1020px]",
  xl: "size-[1220px]",
  "2xl": "size-[1420px]",
  "3xl": "size-[1620px]",
};

function RingOverlay({ size }: RingOverlayProps) {
  return (
    <div
      className={[
        "border-2 border-emerald-300/5 rounded-full inset-0",
        "shadow-[0_0_80px_inset] shadow-emerald-300/5 ",
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        sizeMapping[size],
      ].join(" ")}
    ></div>
  );
}
export default RingOverlay;
