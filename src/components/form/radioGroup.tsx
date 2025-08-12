"use client";

import { classes } from "@/utils";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type PostCreateFormProps = {
  fieldName: string;
  label: string;
  objectKey: string;
  objects: any[];
  onChange: Dispatch<SetStateAction<any>>;
  selection: any;
};

export default function RadioGroup({
  fieldName,
  label,
  objectKey,
  objects,
  onChange,
  selection = [],
}: PostCreateFormProps) {
  async function handleRadioButtonChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      onChange(event.target.value);
    }
  }

  return (
    <fieldset
      className="full-width grid squish-0 squeeze-16 gap-16 justify-content-start align-items-center"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 180px))" }}
    >
      {objects.map((object) => {
        const pk = String(object[objectKey]);

        return (
          <div
            key={pk}
            className="grid gap-8 align-items-center justify-content-start justify-items-start align-content-start"
            style={{ gridTemplateColumns: "2rem 1fr" }}
          >
            <input
              checked={selection == pk}
              className={radioClassName}
              id={object[objectKey]}
              name={fieldName}
              onChange={handleRadioButtonChange}
              type="radio"
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

const radioClassName = classes([
  "custom-radio",
  "border-color-cyan",
  "border-rounded-8",
  "border-style-outset",
  "border-width-2",
  "cursor-pointer",
  "dim-80",
  "drop-0",
  "flash-100",
  "font-orbitron-medium",
  "grid",
  "pull-0",
  "push-0",
  "stack-0",
  "surface-char",
  "text-color-cyan",
]);
