/** Single-line label with an underline sweep on hover (no vertical roll). */
export function RollText({ children }: { children: string }) {
  return <span className="ag-label-sweep">{children}</span>;
}
