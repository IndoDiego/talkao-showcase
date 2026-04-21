"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";
import Badge from "./Badge";
import {
  Globe,
  Smartphone,
  Server,
  CreditCard,
  MapPin,
  MessageSquare,
  FileText,
  Bell,
  ExternalLink,
} from "lucide-react";
import ParkaoIcon from "./brand/ParkaoIcon";
import { useI18n } from "@/i18n/I18nProvider";

export default function Parkao() {
  const { t } = useI18n();
  const p = t.parkao;

  const pillars = [
    { icon: Globe, label: p.pillars.web, tech: "Next.js\nAnt Design" },
    {
      icon: Smartphone,
      label: p.pillars.mobile,
      tech: "React Native\niOS + Android",
    },
    { icon: Server, label: p.pillars.api, tech: "Node.js\nMongoDB + Stripe" },
  ];

  const features = [
    { icon: CreditCard, text: p.features.stripe },
    { icon: MapPin, text: p.features.maps },
    { icon: MessageSquare, text: p.features.chat },
    { icon: FileText, text: p.features.invoicing },
    { icon: Bell, text: p.features.notifications },
  ];

  return (
    <SectionWrapper id="parkao">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-amber/10 border border-amber/25 grid place-items-center shrink-0">
            <ParkaoIcon className="w-8 h-8 text-amber" />
          </div>
          <div>
            <Badge variant="amber">{p.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
              {p.title}
            </h2>
          </div>
        </div>
        <p className="text-muted text-lg mb-2">{p.subtitle}</p>
        <p className="text-amber text-sm font-medium mb-8">{p.earn}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {pillars.map(({ icon: Icon, label, tech }) => (
            <SpotlightCard
              key={label}
              variant="amber"
              className="p-4 text-center"
            >
              <Icon className="w-8 h-8 text-amber mx-auto mb-2" />
              <div className="font-semibold text-sm mb-1">{label}</div>
              <div className="text-muted text-xs whitespace-pre-line">
                {tech}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-card-bg border border-card-border rounded-lg px-3 py-2"
            >
              <Icon className="w-4 h-4 text-amber shrink-0" />
              <span className="text-xs">{text}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="bg-amber/5 border border-amber/20 rounded-xl p-4 mb-6">
          <p className="text-sm text-muted">
            <span className="text-amber font-semibold">{p.note.bold}</span>{" "}
            {p.note.body}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <a
          href="https://parkao.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber/10 border border-amber/30 text-amber rounded-lg text-sm hover:bg-amber/20 transition-colors"
        >
          {p.cta} <ExternalLink className="w-4 h-4" />
        </a>
      </ScrollReveal>
    </SectionWrapper>
  );
}
