export default function Stylesheet(props: {
  base: string | undefined;
  sheet: string;
}) {
  if (props.base) {
    return (
      <link
        rel="stylesheet"
        href={formatStylesheetString({ base: props.base, sheet: props.sheet })}
      />
    );
  }
}

function formatStylesheetString(props: {
  base: string;
  sheet: string;
}): string {
  return props.base + props.sheet + ".min.css";
}
