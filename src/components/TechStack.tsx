"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import { Cpu, Globe, Brain, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    label: "Mobile",
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
    label: "Web",
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
    label: "AI & Data",
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
    label: "Backend & Payments",
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

const proprietary = [
  {
    name: "Talkao Custom Agents",
    tagline: "Agentic Programming Architecture",
    details: "Specialist AI agents for development, code review, analytics, and operations — built in-house to orchestrate complex multi-step workflows autonomously",
  },
];

export default function TechStack() {
  return (
    <SectionWrapper id="tech">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How We Build</h2>
      </ScrollReveal>

      <div className="space-y-4 mb-8">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.label} delay={i * 0.1}>
            <div className="bg-card-bg border border-card-border rounded-xl p-4">
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
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Proprietary tools */}
      <ScrollReveal delay={0.4}>
        <div className="bg-gradient-to-br from-violet/5 to-cyan/5 border border-violet/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-violet" />
            <span className="font-semibold text-sm">Agentic Programming</span>
          </div>
          <div className="space-y-4">
            {proprietary.map((tool) => (
              <div key={tool.name}>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono font-bold text-cyan">
                    {tool.name}
                  </span>
                  <span className="text-muted text-xs">— {tool.tagline}</span>
                </div>
                <p className="text-muted text-xs mt-0.5">{tool.details}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <p className="text-center text-muted text-sm mt-6 font-mono">
          Translation · SaaS · Marketplaces · AI Agents
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
