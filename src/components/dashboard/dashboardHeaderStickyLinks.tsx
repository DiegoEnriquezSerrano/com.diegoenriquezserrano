import React from "react";
import { classes } from "@/utils";

export default function DashboardHeaderStickyLinks({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={defaultContainerClassName}
      style={{ top: 0, zIndex: "+1" }}
    >
      {children}
    </section>
  );
}

const defaultContainerClassName = classes([
  "border-bottom-width-2",
  "border-color-gray",
  "border-style-outset",
  "border-width-0",
  "overflow-x-auto",
  "position-sticky",
  "squeeze-16",
  "surface-char",
  "text-small",
]);
