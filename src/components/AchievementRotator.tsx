"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const INTERVAL_MS = 3000;
const TYPE_MS_PER_CHAR = 32;

function Typewriter({
  value,
  disabled,
}: {
  value: string;
  disabled?: boolean;
}) {
  const [count, setCount] = useState(disabled ? value.length : 0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (disabled) {
      setCount(value.length);
      return;
    }
    setCount(0);
    let i = 0;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < value.length) {
        timer.current = window.setTimeout(tick, TYPE_MS_PER_CHAR);
      }
    };
    timer.current = window.setTimeout(tick, 80);
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [value, disabled]);

  const typed = value.slice(0, count);

  return (
    <span className="inline-flex items-baseline">
      <span aria-hidden className="gradient-text">
        {typed || "\u00A0"}
      </span>
      <span
        aria-hidden
        className="caret-blink ml-1 text-cyan font-light"
        style={{ transform: "translateY(-0.04em)" }}
      >
        |
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}

export default function AchievementRotator() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = t.hero.achievements;

  useEffect(() => {
    if (reduce || paused) return;
    const rotate = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, INTERVAL_MS);
    return () => clearInterval(rotate);
  }, [reduce, paused, items.length]);

  const current = items[index];
  const subDelay = reduce
    ? 0
    : (current.headline.length * TYPE_MS_PER_CHAR + 120) / 1000;

  return (
    <div
      className="relative h-28 md:h-32 flex flex-col items-center justify-center"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Live pulse indicator */}
      <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-[0.22em] text-muted">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
        </span>
        <span>live</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <div
          key={`h-${index}`}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none min-h-[1em]"
        >
          <Typewriter value={current.headline} disabled={!!reduce} />
        </div>
        <motion.div
          key={`s-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: subDelay, duration: 0.3 }}
          className="mt-2 text-[11px] md:text-xs font-mono uppercase tracking-[0.22em] text-muted"
        >
          {current.sub}
        </motion.div>
      </div>

      {/* Segmented progress bar */}
      <div className="absolute -bottom-2 flex items-center gap-1">
        {items.map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-foreground/60" : "w-4 bg-foreground/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
