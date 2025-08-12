"use client";

import React, { CSSProperties } from "react";
import { classes } from "@/utils";
import Icon from "./icon";

export default function SubscribeModal({
  children,
  open,
  close,
}: {
  children: React.ReactNode;
  open: boolean;
  close: any;
}) {
  let openStyles = open
    ? {
        top: 0,
        opacity: 1,
        zIndex: "+1",
        visibility: "visible" as CSSProperties["visibility"],
      }
    : {
        top: "50vh",
        opacity: 0,
      };

  return (
    <div
      className={[(open ? "open" : "").trim(), modalClassName]
        .filter(Boolean)
        .join(" ")
        .trim()}
      style={{
        gridTemplateRows: "10rem auto",
        left: 0,
        transition: "all 0.1s ease-in-out",
        ...openStyles,
      }}
    >
      <p />
      <section
        data-modal-content
        className={modalContentContainer}
        style={{
          gridTemplateRows: "3.5rem auto",
        }}
      >
        <div
          className="full-width justify-content-end align-items-center flex-row squeeze-16 position-sticky surface-char"
          style={{ top: 0 }}
        >
          <button className={buttonClassName} onFocus={close} type="button">
            <Icon type="x" />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

const modalClassName = classes([
  "dim-0",
  "grid",
  "height-view-100",
  "justify-items-center",
  "pointer-events-none",
  "position-fixed",
  "subscribe-modal",
  "visibility-hidden",
  "width-view-100",
]);

const modalContentContainer = classes([
  "border-color-gray",
  "border-rounded-24",
  "border-style-outset",
  "border-top-width-2",
  "border-width-0",
  "full-width",
  "grid",
  "justify-items-center",
  "raised-3",
  "squish-16",
  "surface-char",
]);

const buttonClassName = classes([
  "align-items-center",
  "border-style-solid",
  "border-width-0",
  "cursor-pointer",
  "flex-row",
  "justify-content-center",
  "squeeze-8",
  "squish-8",
  "surface-char",
  "text-color-cyan",
]);
