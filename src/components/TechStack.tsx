"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";
import Marquee from "./Marquee";
import { Cpu, Globe, Brain, Database, Wrench } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

function TechChip({ label }: { label: string }) {
  return (
    <span className="shrink-0 px-3 py-1.5 bg-white/5 rounded-md text-xs text-muted border border-white/5 font-mono whitespace-nowrap">
      {label}
    </span>
  );
}

export default function TechStack() {
  const { t } = useI18n();
  const ts = t.tech;

  const categories = [
    {
      icon: Cpu,
      label: ts.categories.mobile,
      color: "text-cyan",
      techs: [
        "Kotlin",
        "SwiftUI",
        "React Native",
        "Jetpack Compose",
        "Material 3",
        "Firebase",
      ],
    },
    {
      icon: Globe,
      label: ts.categories.web,
      color: "text-violet",
      techs: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
    },
    {
      icon: Brain,
      label: ts.categories.ai,
      color: "text-amber",
      techs: [
        "OpenAI",
        "Claude",
        "Google ML Kit",
        "Groq",
        "Firebase Analytics",
        "AppsFlyer",
      ],
    },
    {
      icon: Database,
      label: ts.categories.backend,
      color: "text-cyan",
      techs: [
        "Node.js",
        "Python",
        "Supabase",
        "MongoDB",
        "Stripe",
        "RevenueCat",
      ],
    },
  ];

  const allTechs = categories.flatMap((c) => c.techs);
  const halfLen = Math.ceil(allTechs.length / 2);
  const row1 = allTechs.slice(0, halfLen);
  const row2 = allTechs.slice(halfLen);

  return (
    <SectionWrapper id="tech">
      <ScrollReveal>
        <div className="text-xs font-mono text-muted uppercase tracking-[0.2em] mb-3">
          {ts.eyebrow}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
          {ts.headingA} <span className="gradient-text">{ts.headingB}</span>
        </h2>
        <p className="text-muted text-base max-w-xl mb-10">{ts.subtitle}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="space-y-3 mb-10">
          <Marquee speed={45}>
            {row1.map((t) => (
              <TechChip key={`r1-${t}`} label={t} />
            ))}
          </Marquee>
          <Marquee speed={55} reverse>
            {row2.map((t) => (
              <TechChip key={`r2-${t}`} label={t} />
            ))}
          </Marquee>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.label} delay={i * 0.08}>
            <SpotlightCard variant="cyan" className="p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <cat.icon className={`w-5 h-5 ${cat.color}`} />
                <span className="font-semibold text-sm">{cat.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-muted border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="gradient-border rounded-xl">
          <div className="bg-gradient-to-br from-violet/5 to-cyan/5 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-violet" />
              <span className="font-semibold text-sm">{ts.agentic.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono font-bold text-cyan">
                {ts.agentic.title}
              </span>
              <span className="text-muted text-xs">— {ts.agentic.tagline}</span>
            </div>
            <p className="text-muted text-xs mt-1">{ts.agentic.body}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <p className="text-center text-muted text-sm mt-6 font-mono">
          {ts.footer}
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
