"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";
import BrandCarousel from "./BrandCarousel";
import { Mail, Calendar, Link, FileDown } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  const links = [
    {
      icon: Mail,
      label: c.links.email.label,
      sub: c.links.email.sub,
      href: "mailto:indogroup.diego@gmail.com",
      variant: "cyan" as const,
    },
    {
      icon: Calendar,
      label: c.links.call.label,
      sub: c.links.call.sub,
      href: "https://calendly.com/indogroup-diego",
      variant: "violet" as const,
    },
    {
      icon: Link,
      label: c.links.linkedin.label,
      sub: c.links.linkedin.sub,
      href: "https://www.linkedin.com/in/diego-jarrin-caric/",
      variant: "cyan" as const,
    },
    {
      icon: FileDown,
      label: c.links.pdf.label,
      sub: c.links.pdf.sub,
      href: "/talkao-one-pager.pdf",
      variant: "amber" as const,
    },
  ];

  return (
    <SectionWrapper id="contact" className="pb-24">
      <ScrollReveal>
        <div className="mb-8">
          <BrandCarousel />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center tracking-tight">
          {c.titleA} <span className="gradient-text">{c.titleB}</span>
        </h2>
        <p className="text-muted text-center mb-10">
          {c.role}
          <br />
          <span className="text-sm">{c.brands}</span>
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {links.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 0.08}>
            <SpotlightCard
              as="a"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              variant={link.variant}
              className="p-4 flex flex-col items-center gap-2"
            >
              <link.icon
                className={`w-6 h-6 ${
                  link.variant === "violet"
                    ? "text-violet"
                    : link.variant === "amber"
                      ? "text-amber"
                      : "text-cyan"
                }`}
              />
              <span className="font-semibold text-sm">{link.label}</span>
              <span className="text-muted text-xs">{link.sub}</span>
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="text-center">
          <p className="text-muted text-sm italic mb-4">{c.quote}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs">
            <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
            {c.alumni}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
