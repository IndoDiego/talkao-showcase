interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "violet" | "amber" | "muted";
}

const colors = {
  cyan: "bg-cyan/10 text-cyan border-cyan/20",
  violet: "bg-violet/10 text-violet border-violet/20",
  amber: "bg-amber/10 text-amber border-amber/20",
  muted: "bg-white/5 text-muted border-white/10",
};

export default function Badge({ children, variant = "cyan" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[variant]}`}
    >
      {children}
    </span>
  );
}
