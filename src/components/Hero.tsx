"use client";

import { motion } from "framer-motion";
import AchievementRotator from "./AchievementRotator";
import BrandCarousel from "./BrandCarousel";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden noise"
    >
      <div className="aurora">
        <span />
      </div>
      <div className="absolute inset-0 grid-bg opacity-80" />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center w-full max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] text-muted font-mono"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          {t.hero.badge}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-12 md:mb-14"
        >
          <BrandCarousel />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
          <span className="gradient-text-subtle">{t.hero.greeting}</span>{" "}
          <span className="gradient-text">{t.hero.name}.</span>
        </h1>

        <p className="text-muted text-sm md:text-base mt-4 mb-10 font-mono">
          {t.hero.tagline}
        </p>

        <div className="mb-14">
          <AchievementRotator />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            {t.hero.ctaTalk}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-sm text-muted hover:text-foreground hover:border-white/30 transition-colors"
          >
            {t.hero.ctaExplore}
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#ecosystem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 z-10"
        aria-label={t.hero.scrollDown}
      >
        <ChevronDown className="w-5 h-5 text-muted animate-bounce" />
      </motion.a>
    </section>
  );
}
