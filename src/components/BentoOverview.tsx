"use client";

import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import ParkaoIcon from "./brand/ParkaoIcon";
import OffiwizIcon from "./brand/OffiwizIcon";
import { useI18n } from "@/i18n/I18nProvider";

export default function BentoOverview() {
  const { t } = useI18n();
  const b = t.bento;

  return (
    <section
      id="ecosystem"
      className="relative px-5 py-24 md:py-32 max-w-6xl mx-auto w-full"
    >
      <ScrollReveal>
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono text-muted uppercase tracking-[0.2em] mb-3">
              {b.eyebrow}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {b.headingA}{" "}
              <span className="gradient-text">{b.headingB}</span>
            </h2>
          </div>
          <p className="text-muted text-sm max-w-sm">{b.rightNote}</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
        {/* Voice Translator */}
        <ScrollReveal className="md:col-span-4 md:row-span-2">
          <SpotlightCard
            as="a"
            href="#voice-translator"
            variant="cyan"
            className="p-7 h-full flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="amber">{b.voice.tagA}</Badge>
                <Badge variant="violet">{b.voice.tagB}</Badge>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/logos/voice-translator-icon.png"
                  alt=""
                  width={56}
                  height={56}
                  className="w-12 h-12 rounded-[22%] shadow-lg shadow-cyan/20"
                />
                <h3 className="text-2xl md:text-3xl font-bold">
                  {b.voice.title}
                </h3>
              </div>
              <p className="text-muted text-sm max-w-md">{b.voice.desc}</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="font-mono text-3xl font-bold gradient-text">
                  30M+
                </div>
                <div className="text-muted text-xs mt-0.5">
                  {b.voice.statDownloads}
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold gradient-text">
                  €200K+
                </div>
                <div className="text-muted text-xs mt-0.5">
                  {b.voice.statRevenue}
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold gradient-text">
                  6.7×
                </div>
                <div className="text-muted text-xs mt-0.5">
                  {b.voice.statRoas}
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5 text-cyan" />
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* Offiwiz */}
        <ScrollReveal className="md:col-span-2 md:row-span-2" delay={0.1}>
          <SpotlightCard
            as="a"
            href="#offiwiz"
            variant="cyan"
            className="p-6 h-full flex flex-col justify-between group"
          >
            <div>
              <Badge variant="cyan">{b.offiwiz.tag}</Badge>
              <div className="flex items-center gap-3 mt-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 grid place-items-center">
                  <OffiwizIcon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="text-2xl font-bold">{b.offiwiz.title}</h3>
              </div>
              <p className="text-muted text-sm">{b.offiwiz.desc}</p>
            </div>

            <div className="mt-6 space-y-2 text-xs font-mono text-muted">
              <div className="flex justify-between">
                <span>{b.offiwiz.rows.pdfEditor.label}</span>
                <span className="text-foreground">
                  {b.offiwiz.rows.pdfEditor.value}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{b.offiwiz.rows.pdfConverter.label}</span>
                <span className="text-foreground">
                  {b.offiwiz.rows.pdfConverter.value}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{b.offiwiz.rows.aiChat.label}</span>
                <span className="text-foreground">
                  {b.offiwiz.rows.aiChat.value}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{b.offiwiz.rows.scanner.label}</span>
                <span className="text-foreground">
                  {b.offiwiz.rows.scanner.value}
                </span>
              </div>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5 text-cyan" />
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* NexaFlow */}
        <ScrollReveal className="md:col-span-3" delay={0.15}>
          <SpotlightCard
            as="a"
            href="#nexaflow"
            variant="violet"
            className="p-6 h-full flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet/10 border border-violet/20 grid place-items-center shrink-0">
              <Sparkles className="w-5 h-5 text-violet" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">{b.nexaflow.title}</h3>
                <Badge variant="violet">{b.nexaflow.tag}</Badge>
              </div>
              <p className="text-muted text-sm">{b.nexaflow.desc}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-violet opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
          </SpotlightCard>
        </ScrollReveal>

        {/* Parkao */}
        <ScrollReveal className="md:col-span-3" delay={0.2}>
          <SpotlightCard
            as="a"
            href="#parkao"
            variant="amber"
            className="p-6 h-full flex items-center gap-5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 grid place-items-center shrink-0">
              <ParkaoIcon className="w-6 h-6 text-amber" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">{b.parkao.title}</h3>
                <Badge variant="amber">{b.parkao.tag}</Badge>
              </div>
              <p className="text-muted text-sm">{b.parkao.desc}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-amber opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
