"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 grid-bg overflow-hidden">
      <div className="hero-glow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/logos/logo-negative.png"
            alt="Talkao"
            width={180}
            height={50}
            className="mx-auto"
            priority
          />
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="gradient-text">The Ecosystem</span>
        </h1>

        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
          AI-powered translation, agentic programming,
          <br className="hidden md:block" />
          and marketplace technology.
        </p>

        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-lg mx-auto mb-16">
          <AnimatedCounter end={30} suffix="M+" label="Downloads" />
          <AnimatedCounter
            end={200}
            prefix="€"
            suffix="K+"
            label="Annual Revenue"
          />
          <AnimatedCounter end={125} suffix="+" label="Languages" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet/30 bg-violet/5 text-violet text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
          Google Play Accelerator 2026
        </motion.div>
      </motion.div>

      <motion.a
        href="#voice-translator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 z-10"
      >
        <ChevronDown className="w-8 h-8 text-muted animate-bounce" />
      </motion.a>
    </section>
  );
}
