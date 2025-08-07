export function classes(classes: string[]): string {
  return classes
    .filter(Boolean)
    .map((classString) => classString.trim())
    .join(" ");
}

export function getResponsiveClasses(
  isLimit: boolean,
  classLists: [string[], string[]],
): string {
  if (isLimit) {
    return classes(classLists[0]);
  } else {
    return classes([...classLists[0], ...classLists[1]]);
  }
}
