import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";

export default function ExpandingTextarea({
  className,
  label,
  name,
  setValue,
  value,
}: {
  className?: string;
  label: string;
  name: string;
  rows?: number;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}) {
  function evaluateKeypress(
    e: ChangeEvent & { currentTarget: EventTarget & HTMLTextAreaElement },
  ): void {
    setValue(e.currentTarget.value);
    fluffTextarea(e.currentTarget);
  }

  useEffect(() => {
    fluffTextarea(document.getElementById(name) as HTMLTextAreaElement);
  });

  return (
    <fieldset
      id="body-field"
      className="flex-column gap-8 squeeze-16 squish-0 full-width"
    >
      <label className="justify-self-start" htmlFor={name}>
        {label}
      </label>
      <textarea
        className={className}
        id={name}
        name={name}
        onChange={evaluateKeypress}
        placeholder="Urban green spaces have become essential components of healthy cities, offering a multifaceted response to challenges such as air pollution, urban heat islands, and social fragmentation. Trees and shrubs in parks and along streets play a critical role in trapping particulate matter and absorbing gaseous pollutants, thereby improving air quality and reducing respiratory ailments among city dwellers. Moreover, vegetation cools urban areas through shade and evapotranspiration, lowering energy demands for air conditioning and mitigating heat-related health risks."
        required
        rows={1}
        value={value}
        style={{
          height: "auto",
          maxHeight: "32rem",
          resize: "none",
          transition: "all 100ms ease-in-out",
          backdropFilter: "blur(10px)",
        }}
      />
    </fieldset>
  );
}

function fluffTextarea(textarea: HTMLTextAreaElement): void {
  if (textarea.value === "") {
    textarea.style.height = "";
  } else if (textarea.scrollHeight > textarea.clientHeight) {
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
