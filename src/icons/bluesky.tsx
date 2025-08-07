export function BlueskyIcon(props: {
  height?: number | string;
  width?: number | string;
}) {
  const width = props?.width ? props.width : "1.25rem";
  const height = props?.height ? props.height : "1.25rem";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M12 8.56675C12 8.56675 7.87619 0.22183 2.70999 1.05903C-0.906331 1.64506 2.17634 10.571 3.21796 12.0702C4.25958 13.5694 6.32331 12.5684 6.32331 12.5684C6.32331 12.5684 0.640808 14.0699 5.29012 18.5743C9.73023 22.876 12 16.0718 12 16.0718"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: "rotateY(0deg)" }}
      />
      <path
        d="M12.1523 8.62388C12.1523 8.62388 16.2762 0.278959 21.4424 1.11616C25.0587 1.70219 21.976 10.6281 20.9344 12.1273C19.8928 13.6265 17.829 12.6255 17.829 12.6255C17.829 12.6255 23.5115 14.127 18.8622 18.6314C14.4221 22.9331 12.1523 16.129 12.1523 16.129"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: "rotateY(0deg)" }}
      />
    </svg>
  );
}
