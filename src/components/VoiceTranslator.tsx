"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import ScrollReveal from "./ScrollReveal";
import Badge from "./Badge";
import { Languages, Mic, Brain, BarChart3, ExternalLink } from "lucide-react";

const stats = [
  { value: "30M+", label: "Downloads" },
  { value: "170K", label: "Monthly Active Users" },
  { value: "€200K+", label: "Annual Revenue" },
  { value: "6.7x", label: "ROAS" },
];

const features = [
  { icon: Languages, text: "125+ language combinations" },
  { icon: Mic, text: "Real-time voice translation" },
  { icon: Brain, text: "7 AI Chat Assistants" },
  { icon: BarChart3, text: "Smart Paywalls + A/B Testing" },
];

export default function VoiceTranslator() {
  return (
    <SectionWrapper id="voice-translator">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/logos/icon-transparent.png"
            alt="Voice Translator"
            width={56}
            height={56}
            className="rounded-xl"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="amber">Flagship Product</Badge>
              <Badge variant="violet">Google Play Accelerator 2026</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Voice Translator
            </h2>
          </div>
        </div>
        <p className="text-muted text-lg mb-8">
          AI-Powered Real-Time Translation
        </p>
      </ScrollReveal>

      {/* Stats row */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card-bg border border-card-border rounded-xl p-4 text-center"
            >
              <div className="font-mono text-2xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Features */}
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

      {/* Accelerator callout */}
      <ScrollReveal delay={0.3}>
        <div className="bg-violet/5 border border-violet/20 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <div className="font-semibold mb-1">
                Accelerator Transformation
              </div>
              <p className="text-muted text-sm">
                10+ components shipped in 4 weeks. Average 4 days from Google
                mentor recommendation to production code. Target: 3x MRR
                through data-driven monetization.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Revenue projection */}
      <ScrollReveal delay={0.4}>
        <div className="bg-card-bg border border-card-border rounded-xl p-5">
          <div className="text-sm text-muted mb-3 font-mono">
            ANNUAL REVENUE PROJECTION
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted w-20">Current</div>
              <div className="flex-1 bg-background rounded-full h-6 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet/60 to-violet flex items-center justify-end pr-2"
                  style={{ width: "15%" }}
                >
                  <span className="text-xs font-mono font-bold">0.15%</span>
                </div>
              </div>
              <div className="font-mono text-sm w-24 text-right">€173K</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted w-20">Target</div>
              <div className="flex-1 bg-background rounded-full h-6 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan/60 to-cyan flex items-center justify-end pr-2"
                  style={{ width: "33%" }}
                >
                  <span className="text-xs font-mono font-bold">1.0%</span>
                </div>
              </div>
              <div className="font-mono text-sm w-24 text-right text-cyan">
                €360K
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted w-20">Benchmark</div>
              <div className="flex-1 bg-background rounded-full h-6 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber/60 to-amber flex items-center justify-end pr-2"
                  style={{ width: "100%" }}
                >
                  <span className="text-xs font-mono font-bold text-background">
                    3.0%
                  </span>
                </div>
              </div>
              <div className="font-mono text-sm w-24 text-right text-amber">
                €1.2M+
              </div>
            </div>
          </div>
          <p className="text-muted text-xs mt-3">
            Conversion rate vs. annual revenue — same 170K users, zero
            additional ad spend
          </p>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal delay={0.5}>
        <a
          href="https://play.google.com/store/apps/details?id=com.ticktalk.translatevoice&utm_source=showcase&utm_medium=qr&utm_campaign=summit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-cyan/10 border border-cyan/30 text-cyan rounded-lg text-sm hover:bg-cyan/20 transition-colors"
        >
          View on Google Play <ExternalLink className="w-4 h-4" />
        </a>
      </ScrollReveal>
    </SectionWrapper>
  );
}
