"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";
import { Smartphone, Bot, MessageSquare, Languages, BarChart3 } from "lucide-react";

const products = [
  {
    icon: Smartphone,
    name: "Translate Voice iOS",
    desc: "SwiftUI · €6.99–€99.99/yr",
  },
  {
    icon: Bot,
    name: "AI Lama",
    desc: "Multi-model AI Assistant",
  },
  {
    icon: MessageSquare,
    name: "Easy Translator",
    desc: "Entry-level freemium",
  },
  {
    icon: Languages,
    name: "Multi Translator",
    desc: "Multi-language suite",
  },
  {
    icon: BarChart3,
    name: "ASO Manager",
    desc: "Analytics dashboard",
  },
];

export default function MoreProducts() {
  return (
    <SectionWrapper id="more">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
          And There&apos;s More
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {products.map((product, i) => (
          <ScrollReveal key={product.name} delay={i * 0.05}>
            <SpotlightCard variant="cyan" className="p-4 h-full">
              <product.icon className="w-6 h-6 text-muted mb-2" />
              <div className="font-semibold text-sm">{product.name}</div>
              <div className="text-muted text-xs mt-1">{product.desc}</div>
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center text-muted text-sm">
          Cross-platform expertise across{" "}
          <span className="font-mono text-foreground">Android, iOS & Web</span>
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
