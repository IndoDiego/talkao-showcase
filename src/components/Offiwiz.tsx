"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";
import { FileText, FileOutput, Bot, ScanLine, ExternalLink } from "lucide-react";

const apps = [
  {
    icon: FileText,
    name: "PDF Editor",
    desc: "Read, edit, annotate & sign PDFs",
    badge: "#2 Revenue App",
    link: "https://play.google.com/store/apps/details?id=com.offiwiz.pdf.editor.reader",
  },
  {
    icon: Bot,
    name: "AI Chat PDF & Docs",
    desc: "AI-powered document assistant",
    badge: null,
    link: "https://play.google.com/store/apps/details?id=com.offiwiz.ai.chat.pdf.docs.bot.office",
  },
  {
    icon: ScanLine,
    name: "Document Scanner",
    desc: "Smart scanning + OCR",
    badge: null,
    link: "https://play.google.com/store/apps/details?id=com.ticktalk.scannerdocument",
  },
  {
    icon: FileOutput,
    name: "PDF Converter",
    desc: "Any format to PDF and back",
    badge: "10M+ Downloads",
    link: "https://play.google.com/store/apps/details?id=com.ticktalk.pdfconverter",
  },
];

export default function Offiwiz() {
  return (
    <SectionWrapper id="offiwiz">
      <ScrollReveal>
        <Badge variant="cyan">Document Productivity Suite</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Offiwiz</h2>
        <p className="text-muted text-lg mb-8">
          Enterprise-grade PDF tools, consumer pricing
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {apps.map((app, i) => (
          <ScrollReveal key={app.name} delay={i * 0.1}>
            <div className="bg-card-bg border border-card-border rounded-xl p-4 h-full card-glow transition-all duration-300 hover:border-cyan/30">
              <app.icon className="w-8 h-8 text-cyan mb-3" />
              <div className="font-semibold text-sm mb-1">{app.name}</div>
              <p className="text-muted text-xs mb-2">{app.desc}</p>
              {app.badge && (
                <Badge variant="amber">{app.badge}</Badge>
              )}
              {app.link && (
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan text-xs mt-2 hover:underline"
                >
                  Google Play <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="flex flex-wrap gap-2">
          {["Kotlin", "ComPDFKit", "PSPDFKit", "Smart Cropping", "Firebase", "Google Play Billing"].map(
            (tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-muted border border-white/5"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
