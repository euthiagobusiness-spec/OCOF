export function Arrow({ direction = "right" }: { direction?: "right" | "down" | "up-right" }) {
  const path = direction === "down" ? "M12 5v14m0 0 5-5m-5 5-5-5" : direction === "up-right" ? "M7 17 17 7M8 7h9v9" : "M5 12h14m0 0-5-5m5 5-5 5";
  return (
    <svg aria-hidden="true" className="icon-arrow" viewBox="0 0 24 24" fill="none">
      <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
