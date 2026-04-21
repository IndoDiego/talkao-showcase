// Reusable 4-dot Google signature for badges/pills that reference Google.
// 4 dots (Google blue/red/yellow/green) pulsing in sequence like the classic loader.

interface GoogleDotsProps {
  className?: string;
  size?: "sm" | "md";
}

export default function GoogleDots({
  className = "",
  size = "md",
}: GoogleDotsProps) {
  const dotSize = size === "sm" ? 4 : 5;
  const gap = size === "sm" ? 2 : 3;

  const dots = [
    { color: "#4285F4", delay: "0s" },
    { color: "#EA4335", delay: "0.15s" },
    { color: "#FBBC04", delay: "0.3s" },
    { color: "#34A853", delay: "0.45s" },
  ];

  return (
    <span
      aria-hidden
      className={`inline-flex items-center ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {dots.map((d) => (
        <span
          key={d.color}
          className="io-dot"
          style={{
            background: d.color,
            animationDelay: d.delay,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
          }}
        />
      ))}
    </span>
  );
}
