"use client";

import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

type unitOfTime = "min" | "s" | "ms";

export const delay = (time: number, unit: unitOfTime = "ms"): Promise<void> => {
  switch (unit) {
    case "min":
      return new Promise((res) => setTimeout(res, time * 60000));
    case "s":
      return new Promise((res) => setTimeout(res, time * 1000));
    default:
      return new Promise((res) => setTimeout(res, time));
  }
};

export async function navigate(): Promise<void> {
  await delay(300, "ms");

  toggleNav();
}

export async function toggleNav(): Promise<void> {
  document.body.classList.toggle("opennav");
}
