// Strategic nod to Google I/O 2026 — subtle bokeh of Google's 4 brand colors
// scattered across the hero background. Keeps Talkao's cyan/violet identity dominant
// while reinforcing the "Google Play Accelerator '26" credential.

const GOOGLE_BLUE = "#4285F4";
const GOOGLE_RED = "#EA4335";
const GOOGLE_YELLOW = "#FBBC04";
const GOOGLE_GREEN = "#34A853";

type Dot = {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
};

const dots: Dot[] = [
  { x: 14, y: 18, size: 14, color: GOOGLE_BLUE, delay: 0, duration: 9 },
  { x: 86, y: 22, size: 10, color: GOOGLE_RED, delay: 1.8, duration: 11 },
  { x: 24, y: 72, size: 12, color: GOOGLE_YELLOW, delay: 3.2, duration: 10 },
  { x: 78, y: 68, size: 11, color: GOOGLE_GREEN, delay: 5.0, duration: 12 },
  { x: 48, y: 86, size: 7, color: GOOGLE_BLUE, delay: 2.4, duration: 9 },
  { x: 62, y: 14, size: 8, color: GOOGLE_GREEN, delay: 4.2, duration: 10 },
  { x: 8, y: 50, size: 6, color: GOOGLE_RED, delay: 6.0, duration: 11 },
  { x: 92, y: 48, size: 9, color: GOOGLE_YELLOW, delay: 0.8, duration: 12 },
];

export default function GoogleIOAccents() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {dots.map((d, i) => (
        <span
          key={i}
          className="io-orb"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: d.color,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
