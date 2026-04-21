"use client";

import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";
import Badge from "./Badge";
import { FileText, FileOutput, Bot, ScanLine, ExternalLink } from "lucide-react";
import OffiwizIcon from "./brand/OffiwizIcon";
import { useI18n } from "@/i18n/I18nProvider";

export default function Offiwiz() {
  const { t } = useI18n();
  const o = t.offiwiz;

  const apps = [
    {
      icon: FileText,
      name: o.apps.editor.name,
      desc: o.apps.editor.desc,
      badge: o.apps.editor.badge,
      link: "https://play.google.com/store/apps/details?id=com.offiwiz.pdf.editor.reader",
    },
    {
      icon: Bot,
      name: o.apps.aiChat.name,
      desc: o.apps.aiChat.desc,
      badge: null,
      link: "https://play.google.com/store/apps/details?id=com.offiwiz.ai.chat.pdf.docs.bot.office",
    },
    {
      icon: ScanLine,
      name: o.apps.scanner.name,
      desc: o.apps.scanner.desc,
      badge: null,
      link: "https://play.google.com/store/apps/details?id=com.ticktalk.scannerdocument",
    },
    {
      icon: FileOutput,
      name: o.apps.converter.name,
      desc: o.apps.converter.desc,
      badge: o.apps.converter.badge,
      link: "https://play.google.com/store/apps/details?id=com.ticktalk.pdfconverter",
    },
  ];

  return (
    <SectionWrapper id="offiwiz">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/25 grid place-items-center shrink-0">
            <OffiwizIcon className="w-8 h-8 text-cyan" />
          </div>
          <div>
            <Badge variant="cyan">{o.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
              {o.title}
            </h2>
          </div>
        </div>
        <p className="text-muted text-lg mb-8">{o.subtitle}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {apps.map((app, i) => (
          <ScrollReveal key={app.name} delay={i * 0.08}>
            <SpotlightCard variant="cyan" className="p-5 h-full">
              <app.icon className="w-8 h-8 text-cyan mb-3" />
              <div className="font-semibold text-sm mb-1">{app.name}</div>
              <p className="text-muted text-xs mb-3">{app.desc}</p>
              {app.badge && <Badge variant="amber">{app.badge}</Badge>}
              {app.link && (
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan text-xs mt-2 hover:underline"
                >
                  {o.googlePlay} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="flex flex-wrap gap-2">
          {[
            "Kotlin",
            "OCR",
            "PDF Annotations",
            "Smart Cropping",
            "ML Kit",
            "Firebase",
            "Google Play Billing",
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-muted border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
