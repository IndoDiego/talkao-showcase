"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";
import Badge from "./Badge";
import GoogleDots from "./brand/GoogleDots";
import {
  Languages,
  Mic,
  Brain,
  BarChart3,
  Camera,
  ScanLine,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

interface ProjectionRowProps {
  label: string;
  percent: string;
  percentValue: number;
  barClass: string;
  currency: string;
  currencyClass?: string;
}

function ProjectionRow({
  label,
  percent,
  percentValue,
  barClass,
  currency,
  currencyClass = "",
}: ProjectionRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-muted uppercase tracking-wider">{label}</span>
          <span className="font-bold">{percent}</span>
        </div>
        <span className={`font-bold ${currencyClass || ""}`}>{currency}</span>
      </div>
      <div className="bg-background rounded-full h-2.5 overflow-hidden border border-card-border">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barClass}`}
          style={{ width: `${percentValue}%` }}
        />
      </div>
    </div>
  );
}

export default function VoiceTranslator() {
  const { t } = useI18n();
  const v = t.voice;

  const stats = [
    { value: "30M+", label: v.stats.downloads },
    { value: "170K", label: v.stats.mau },
    { value: "€174K", label: v.stats.revenue },
    { value: "6.7x", label: v.stats.roas },
  ];

  const features = [
    { icon: Languages, text: v.features.languages },
    { icon: Mic, text: v.features.realtime },
    { icon: Brain, text: v.features.assistants },
    { icon: BarChart3, text: v.features.paywalls },
  ];

  return (
    <SectionWrapper id="voice-translator">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/logos/voice-translator-icon.png"
            alt="Voice Translator"
            width={64}
            height={64}
            className="rounded-[22%] shadow-lg shadow-cyan/20"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="amber">{v.badgeA}</Badge>
              <Badge variant="violet">
                <GoogleDots size="sm" className="mr-1.5" />
                {v.badgeB}
              </Badge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {v.title}
            </h2>
          </div>
        </div>
        <p className="text-muted text-lg mb-8">{v.subtitle}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <SpotlightCard
              key={stat.label}
              variant="cyan"
              className="p-4 text-center"
            >
              <div className="font-mono text-2xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-muted text-sm mt-1">{stat.label}</div>
            </SpotlightCard>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3"
            >
              <Icon className="w-5 h-5 text-cyan shrink-0" />
              <span className="text-sm">{text}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="gradient-border rounded-xl">
          <div className="bg-violet/5 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <div className="font-semibold mb-1">{v.callout.title}</div>
                <p className="text-muted text-sm">{v.callout.body}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <SpotlightCard variant="cyan" className="p-5">
          <div className="text-sm text-muted mb-3 font-mono">
            {v.projection.label}
          </div>
          <div className="space-y-4">
            <ProjectionRow
              label={v.projection.current}
              percent="0.15%"
              percentValue={5}
              barClass="from-violet/70 to-violet"
              currency="€174K"
              currencyClass=""
            />
            <ProjectionRow
              label={v.projection.target}
              percent="1.0%"
              percentValue={33}
              barClass="from-cyan/70 to-cyan"
              currency="€1.16M"
              currencyClass="text-cyan"
            />
            <ProjectionRow
              label={v.projection.benchmark}
              percent="3.0%"
              percentValue={100}
              barClass="from-amber/70 to-amber"
              currency="€3.48M"
              currencyClass="text-amber"
            />
          </div>
          <p className="text-muted text-xs mt-4">{v.projection.note}</p>
        </SpotlightCard>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <a
          href="https://play.google.com/store/apps/details?id=com.ticktalk.translatevoice&utm_source=showcase&utm_medium=qr&utm_campaign=summit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-cyan/10 border border-cyan/30 text-cyan rounded-lg text-sm hover:bg-cyan/20 transition-colors"
        >
          {v.cta} <ExternalLink className="w-4 h-4" />
        </a>
      </ScrollReveal>

      {/* Translation suite — sister apps */}
      <ScrollReveal delay={0.6}>
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="text-xs font-mono text-muted uppercase tracking-[0.2em] mb-4">
            {v.suite.label}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SpotlightCard
              as="a"
              href="https://play.google.com/store/apps/details?id=com.ticktalk.cameratranslator"
              target="_blank"
              rel="noopener noreferrer"
              variant="cyan"
              className="p-4 flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 grid place-items-center shrink-0">
                <Camera className="w-5 h-5 text-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-semibold text-sm truncate">
                    {v.suite.photo.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-muted text-xs leading-snug">
                  {v.suite.photo.desc}
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              as="a"
              href="https://play.google.com/store/apps/details?id=com.appgroup.app.arcamera"
              target="_blank"
              rel="noopener noreferrer"
              variant="cyan"
              className="p-4 flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 grid place-items-center shrink-0">
                <ScanLine className="w-5 h-5 text-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-semibold text-sm truncate">
                    {v.suite.ar.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-muted text-xs leading-snug">
                  {v.suite.ar.desc}
                </p>
              </div>
            </SpotlightCard>
          </div>

          <a
            href="https://play.google.com/store/apps/dev?id=8358116023073556533"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-xs text-muted hover:text-foreground transition-colors group"
          >
            <span>{v.suite.seeAll}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
