"use client";

import { classes } from "@/utils";
import { toggleNav } from "@/utils/clientUtils";
import Icon from "@/components/icon";

export default function MenuToggle() {
  return (
    <button className={menuToggleClasses} onClick={toggleNav}>
      <Icon type="menu" opts={{ height: "1.75rem", width: "1.75rem" }} />
    </button>
  );
}

const menuToggleClasses = classes([
  "align-items-center",
  "border-style-none",
  "cursor-pointer",
  "flex-row",
  "full-height",
  "full-width",
  "justify-content-center",
  "surface-transparent",
  "text-color-cyan",
]);
