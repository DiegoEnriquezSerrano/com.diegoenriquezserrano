"use client";

import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { classes } from "@/utils";

type PostCreateFormProps = {
  fieldName: string;
  label: string;
  placeholder: string;
  selection: string;
  setSelection: Dispatch<SetStateAction<any>>;
};

const regexp = /^[a-zA-Z0-9][\w.~ -]*,$/;

export default function CommaSeparatedValueInput({
  fieldName,
  label,
  placeholder,
  selection,
  setSelection,
}: PostCreateFormProps) {
  const [selector, setSelector] = useState("");
  const hopperFieldName = `${fieldName}-hopper`;
  const initialSelectionDisplayValues = selection.split(",").filter(Boolean);

  let displayValues: string[] = initialSelectionDisplayValues;

  function queueHopper(
    event: KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ): void {
    if (event.key === "Backspace" && event.target.value === "") {
      const splitSelection = selection.split(",");
      const queuedValue = splitSelection.pop();
      const newSelection = splitSelection.join(",");

      setSelection(newSelection);
      displayValues.pop();
      setSelector(`${queuedValue} `);
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    if (regexp.test(event.target.value)) {
      const rawValue = event.target.value;
      const parsedValue = rawValue.split(",")?.[0];

      setSelection([selection, parsedValue].filter(Boolean).join(","));
      displayValues.push(parsedValue);
      setSelector("");
    } else {
      setSelector(event.target.value);
    }
  }

  return (
    <fieldset className="full-width squeeze-16 squish-0">
      <div className="flex-column">
        <label className="stack-8" htmlFor={hopperFieldName}>
          {label}
        </label>
        <input
          className={selectorClassName}
          id={hopperFieldName}
          name={hopperFieldName}
          onChange={handleInput}
          onKeyDown={queueHopper}
          placeholder={placeholder}
          type="text"
          value={selector}
        />
        <input
          id={fieldName}
          name={fieldName}
          type="hidden"
          value={selection}
        />
        <div className="flex-row flex-wrap-wrap gap-8">
          {displayValues.map((value) => (
            <span className={selectedValuesClassName} key={value}>
              {value}
            </span>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

const selectorClassName = classes([
  "border-color-cyan",
  "border-rounded-16",
  "border-style-inset",
  "border-width-1",
  "full-width",
  "squeeze-16",
  "squish-16",
  "stack-16",
  "surface-char",
  "text-color-cyan",
]);

const selectedValuesClassName = classes([
  "align-self-end",
  "border-color-cyan",
  "border-rounded-16",
  "border-style-outset",
  "border-width-1",
  "display-inline-flex",
  "squeeze-16",
  "squish-8",
  "text-color-cyan",
  "text-small",
]);
