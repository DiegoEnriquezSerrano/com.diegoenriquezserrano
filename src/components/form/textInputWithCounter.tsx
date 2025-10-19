import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
  useState,
} from "react";

export default function TextInputWithCounter({
  value,
  setValue,
  maxCount,
  label,
  className,
  name,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string | null>>;
  maxCount: number | null;
  label: string;
  className?: string;
  rows?: number;
  name: string;
}) {
  const [characterCount, setCharacterCount] = useState(
    (maxCount || value.length * 2) - value.length,
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function count(
    _event: KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ): void {
    setCharacterCount((maxCount || value.length * 2) - value.length);
  }

  return (
    <fieldset
      className="squish-0 squeeze-0 grid textfield-with-counter gap-8 clear-both"
      style={{
        gridTemplateRows: "1fr var(--text-large)",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateAreas: `"textfield-with-counter-field textfield-with-counter-field" "textfield-with-counter-label textfield-with-counter-counter"`,
      }}
    >
      <input
        className={className}
        id={name}
        name={name}
        onChange={handleChange}
        onKeyUp={count}
        style={{ gridArea: "textfield-with-counter-field" }}
        value={value}
      />
      <label
        className="justify-self-start"
        htmlFor={name}
        style={{ gridArea: "textfield-with-counter-label" }}
      >
        {label}
      </label>
      <span
        className="justify-self-end text-small text-color-light"
        style={{ gridArea: "textfield-with-counter-counter" }}
      >
        {maxCount ? "Limit" : "Count"} {characterCount}
      </span>
    </fieldset>
  );
}
