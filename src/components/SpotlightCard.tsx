"use client";

import { ReactNode, useRef, PointerEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  variant?: "cyan" | "violet" | "amber";
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  variant = "cyan",
  as = "div",
  href,
  target,
  rel,
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);

  function handleMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  const variantClass =
    variant === "violet"
      ? "spotlight-violet"
      : variant === "amber"
        ? "spotlight-amber"
        : "spotlight-cyan";

  const shared = `spotlight ${variantClass} bg-card-bg border border-card-border rounded-2xl ${className}`;

  if (as === "a" && href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onPointerMove={handleMove}
        className={shared}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onPointerMove={handleMove}
      className={shared}
    >
      {children}
    </div>
  );
}
