"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import { Mail, Calendar, Link, FileDown } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email Me",
    sub: "indogroup.diego@gmail.com",
    href: "mailto:indogroup.diego@gmail.com",
    color: "border-cyan/30 text-cyan hover:bg-cyan/10",
  },
  {
    icon: Calendar,
    label: "Book a Call",
    sub: "Calendly",
    href: "https://calendly.com/indogroup-diego",
    color: "border-violet/30 text-violet hover:bg-violet/10",
  },
  {
    icon: Link,
    label: "LinkedIn",
    sub: "Connect",
    href: "https://www.linkedin.com/in/diego-jarrin/",
    color: "border-cyan/30 text-cyan hover:bg-cyan/10",
  },
  {
    icon: FileDown,
    label: "One-Pager",
    sub: "Download PDF",
    href: "/talkao-one-pager.pdf",
    color: "border-amber/30 text-amber hover:bg-amber/10",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="pb-24">
      <ScrollReveal>
        <div className="flex justify-center mb-6">
          <Image
            src="/logos/logo-negative.png"
            alt="Talkao"
            width={140}
            height={40}
            className="opacity-70"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Let&apos;s Build Something Together
        </h2>
        <p className="text-muted text-center mb-8">
          Diego Jarrin Caric — Co-CEO & Co-Founder
          <br />
          <span className="text-sm">
            Talkao · Offiwiz · Parkao · NexaFlow
          </span>
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {links.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 0.1}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`flex flex-col items-center gap-2 p-4 bg-card-bg border rounded-xl transition-colors ${link.color}`}
            >
              <link.icon className="w-6 h-6" />
              <span className="font-semibold text-sm">{link.label}</span>
              <span className="text-muted text-xs">{link.sub}</span>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="text-center">
          <p className="text-muted text-sm italic mb-4">
            &ldquo;Profitable. Bootstrapped. Data-driven. Ready to
            scale.&rdquo;
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet/30 bg-violet/5 text-violet text-xs">
            <span className="w-2 h-2 rounded-full bg-violet" />
            Google Play Accelerator 2026 Alumni
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
