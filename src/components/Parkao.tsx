"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
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

const pillars = [
  { icon: Globe, label: "Web", tech: "Next.js\nAnt Design" },
  { icon: Smartphone, label: "Mobile", tech: "React Native\niOS + Android" },
  { icon: Server, label: "API", tech: "Node.js\nMongoDB + Stripe" },
];

const features = [
  { icon: CreditCard, text: "Stripe payments" },
  { icon: MapPin, text: "Google Maps" },
  { icon: MessageSquare, text: "Real-time chat" },
  { icon: FileText, text: "PDF invoicing" },
  { icon: Bell, text: "Instant notifications" },
];

export default function Parkao() {
  return (
    <SectionWrapper id="parkao">
      <ScrollReveal>
        <Badge variant="amber">Full-Stack Marketplace</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Parkao</h2>
        <p className="text-muted text-lg mb-2">
          Peer-to-Peer Parking Marketplace
        </p>
        <p className="text-amber text-sm font-medium mb-8">
          Earn up to €900/month renting your unused parking space
        </p>
      </ScrollReveal>

      {/* Architecture pillars */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {pillars.map(({ icon: Icon, label, tech }) => (
            <div
              key={label}
              className="bg-card-bg border border-card-border rounded-xl p-4 text-center card-glow transition-all duration-300 hover:border-amber/30"
            >
              <Icon className="w-8 h-8 text-amber mx-auto mb-2" />
              <div className="font-semibold text-sm mb-1">{label}</div>
              <div className="text-muted text-xs whitespace-pre-line">
                {tech}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Features */}
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

      {/* Architecture note */}
      <ScrollReveal delay={0.3}>
        <div className="bg-amber/5 border border-amber/20 rounded-xl p-4 mb-6">
          <p className="text-sm text-muted">
            <span className="text-amber font-semibold">
              5 integrated repositories
            </span>{" "}
            — Web frontend, React Native mobile, Node.js API, admin panel, and
            marketing site. Full marketplace architecture built in-house.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="flex gap-3">
          <a
            href="https://parkao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber/10 border border-amber/30 text-amber rounded-lg text-sm hover:bg-amber/20 transition-colors"
          >
            Visit parkao.com <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
