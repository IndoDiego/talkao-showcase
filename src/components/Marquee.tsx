import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 40,
  reverse = false,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`marquee ${reverse ? "marquee-reverse" : ""} ${className}`}
      style={
        { "--marquee-duration": `${speed}s` } as React.CSSProperties
      }
    >
      <div className="marquee-track gap-3 pr-3">
        {children}
        {children}
      </div>
    </div>
  );
}
