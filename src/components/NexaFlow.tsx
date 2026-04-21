"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";
import Badge from "./Badge";
import { ExternalLink, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const packages = [
  { name: "Ignite", price: "$1,500" },
  { name: "Accelerate", price: "$4,000" },
  { name: "Transform", price: "$8,000" },
];

const retainers = [
  { name: "Maintain", price: "$500/mo" },
  { name: "Grow", price: "$1,500/mo" },
  { name: "Scale", price: "$3,000/mo" },
];

export default function NexaFlow() {
  const { t } = useI18n();
  const n = t.nexaflow;

  return (
    <SectionWrapper id="nexaflow">
      <ScrollReveal>
        <Badge variant="violet">{n.badge}</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-2 tracking-tight">
          {n.title}
        </h2>
        <p className="text-muted text-lg mb-8">{n.subtitle}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SpotlightCard variant="violet" className="p-5 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-violet shrink-0 mt-0.5" />
            <p className="text-sm text-muted">{n.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">
                {n.packagesLabel}
              </div>
              <div className="space-y-2">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="flex items-center justify-between bg-background rounded-lg px-3 py-2"
                  >
                    <span className="text-sm">{pkg.name}</span>
                    <span className="font-mono text-sm text-violet font-semibold">
                      {pkg.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">
                {n.retainersLabel}
              </div>
              <div className="space-y-2">
                {retainers.map((ret) => (
                  <div
                    key={ret.name}
                    className="flex items-center justify-between bg-background rounded-lg px-3 py-2"
                  >
                    <span className="text-sm">{ret.name}</span>
                    <span className="font-mono text-sm text-cyan font-semibold">
                      {ret.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Stripe",
            "Supabase",
            "Framer Motion",
            "Custom AI Agents",
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-muted border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="https://nexaflow.work"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet/10 border border-violet/30 text-violet rounded-lg text-sm hover:bg-violet/20 transition-colors"
        >
          {n.cta} <ExternalLink className="w-4 h-4" />
        </a>
      </ScrollReveal>
    </SectionWrapper>
  );
}
