import React from "react";
import type { SvgProps } from "@/types/IconTypes";

export function SVG(props: { opts: SvgProps; children: React.ReactNode }) {
  const width = props.opts.width ? props.opts.width : "1.25rem";
  const height = props.opts.height ? props.opts.height : "1.25rem";
  const fillColor = props.opts.fillColor
    ? props.opts.fillColor
    : "currentColor";
  const strokeColor = props.opts.strokeColor
    ? props.opts.strokeColor
    : "currentColor";
  const strokeWidth = props.opts.strokeWidth ? props.opts.strokeWidth : 2;
  const ariaLabeledBy = [props.opts.title?.id, props.opts.desc?.id].join(" ");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={props.opts.viewBox}
      fill={fillColor}
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      role="img"
      aria-labelledby={ariaLabeledBy}
      className={props.opts.className}
    >
      <title id={props.opts.title?.id}>{props.opts?.title?.text}</title>
      <desc id={props.opts.desc?.id}>{props.opts?.desc?.text}</desc>
      {props.children}
    </svg>
  );
}
