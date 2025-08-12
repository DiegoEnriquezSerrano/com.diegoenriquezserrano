import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
  useState,
} from "react";

export default function TextareaWithCounter({
  value,
  setValue,
  maxCount,
  label,
  className,
  rows,
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

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setValue(event.target.value);
  }

  function count(
    _event: KeyboardEvent<HTMLTextAreaElement> & {
      target: HTMLTextAreaElement;
    },
  ): void {
    setCharacterCount((maxCount || value.length * 2) - value.length);
  }

  return (
    <fieldset
      className="squish-0 squeeze-0 grid text-area-with-counter gap-8 full-width"
      style={{
        gridTemplateRows: "1fr var(--text-large)",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateAreas: `"textarea-with-counter-field textarea-with-counter-field" "textarea-with-counter-label textarea-with-counter-counter"`,
      }}
    >
      <textarea
        className={className}
        id={name}
        name={name}
        onChange={handleChange}
        onKeyUp={count}
        rows={rows}
        style={{ gridArea: "textarea-with-counter-field" }}
        value={value}
      />
      <label
        className="justify-self-start"
        htmlFor={name}
        style={{ gridArea: "textarea-with-counter-label" }}
      >
        {label}
      </label>
      <span
        className="justify-self-end text-small text-color-light"
        style={{ gridArea: "textarea-with-counter-counter" }}
      >
        {maxCount ? "Limit" : "Count"} {characterCount}
      </span>
    </fieldset>
  );
}
