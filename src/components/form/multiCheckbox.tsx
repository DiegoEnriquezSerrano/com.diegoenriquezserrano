"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { classes } from "@/utils";

type PostCreateFormProps = {
  fieldName: string;
  label: string;
  objectKey: string;
  objects: any[];
  onChange: Dispatch<SetStateAction<any[]>>;
  selection: any[];
};

export default function MultiCheckbox({
  fieldName,
  label,
  objectKey,
  objects,
  onChange,
  selection = [],
}: PostCreateFormProps) {
  async function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    const checkedKey = event.target.value;

    if (event.target.checked) {
      onChange(Array.from(new Set([...selection, checkedKey])));
    } else {
      onChange(
        Array.from(new Set(selection.filter((id) => id !== checkedKey))),
      );
    }
  }

  return (
    <fieldset
      className="full-width grid gap-16 justify-content-space-evenly"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 150px))" }}
    >
      {objects.map((object) => {
        const pk = String(object[objectKey]);

        return (
          <div
            key={object[objectKey]}
            className="grid gap-8 align-items-center justify-content-start justify-items-start align-content-start"
            style={{ gridTemplateColumns: "2rem 1fr" }}
          >
            <input
              checked={selection.includes(pk)}
              className={checkboxClassName}
              id={object[objectKey]}
              name={fieldName}
              onChange={handleCheckboxChange}
              type="checkbox"
              value={object[objectKey]}
            />
            <label className="text-color-cyan" htmlFor={object[objectKey]}>
              {object[label]}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}

const checkboxClassName = classes([
  "custom-checkbox",
  "border-color-cyan",
  "border-rounded-8",
  "border-style-outset",
  "border-width-2",
  "cursor-pointer",
  "dim-80",
  "drop-0",
  "flash-100",
  "font-orbitron",
  "grid",
  "pull-0",
  "push-0",
  "stack-0",
  "surface-cyan",
  "text-color-black",
]);
