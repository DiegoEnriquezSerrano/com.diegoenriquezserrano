export default function BaseHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header
      className="flex-row surface-char full-width full-height justify-content-space-between"
      style={{ gridArea: "baseheader" }}
      id="base-header"
    >
      {children}
    </header>
  );
}
