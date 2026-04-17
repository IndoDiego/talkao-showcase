"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";
import { ExternalLink, Sparkles } from "lucide-react";

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
  return (
    <SectionWrapper id="nexaflow">
      <ScrollReveal>
        <Badge variant="violet">B2B AI Platform</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">NexaFlow</h2>
        <p className="text-muted text-lg mb-8">
          AI Automation Consultancy & Web Platform
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="bg-card-bg border border-card-border rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-violet shrink-0 mt-0.5" />
            <p className="text-sm text-muted">
              We build AI-powered websites and automation systems for businesses.
              Full-stack delivery with custom AI agents, Stripe payments, and
              ongoing support retainers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Packages */}
            <div>
              <div className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">
                Packages
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

            {/* Retainers */}
            <div>
              <div className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">
                Retainers
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
        </div>
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
          Visit nexaflow.work <ExternalLink className="w-4 h-4" />
        </a>
      </ScrollReveal>
    </SectionWrapper>
  );
}
