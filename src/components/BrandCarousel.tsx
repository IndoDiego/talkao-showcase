"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import OffiwizWordmark from "./brand/OffiwizWordmark";
import { asset } from "@/lib/asset";

type Brand = {
  id: string;
  render: () => ReactNode;
};

const talkaoMaster: Brand = {
  id: "talkao",
  render: () => (
    <Image
      src={asset("/logos/talkao/logo-negative.png")}
      alt="Talkao"
      width={220}
      height={62}
      priority
      className="h-14 md:h-16 w-auto"
    />
  ),
};

const voiceTranslator: Brand = {
  id: "voice-translator",
  render: () => (
    <div className="flex items-center gap-3">
      <Image
        src={asset("/logos/talkao/voice-translator-icon.png")}
        alt=""
        width={64}
        height={64}
        className="h-12 md:h-14 w-auto rounded-[22%] shadow-lg shadow-cyan/20"
      />
      <span className="text-3xl md:text-4xl font-bold tracking-tight">
        Voice Translator
      </span>
    </div>
  ),
};

const ecosystemBrands: Brand[] = [
  talkaoMaster,
  voiceTranslator,
  {
    id: "offiwiz",
    render: () => (
      <OffiwizWordmark className="h-12 md:h-14 w-auto text-foreground" />
    ),
  },
  {
    id: "nexaflow",
    render: () => (
      <span className="text-4xl md:text-5xl font-bold tracking-tight">
        <span className="gradient-text">Nexa</span>
        <span>Flow</span>
      </span>
    ),
  },
  {
    id: "parkao",
    render: () => (
      <div className="flex items-center gap-3">
        <Image
          src={asset("/logos/parkao/RGB/icono.png")}
          alt=""
          width={80}
          height={80}
          className="h-12 md:h-14 w-auto"
        />
        <span className="text-4xl md:text-5xl font-bold tracking-tight">
          Parkao
        </span>
      </div>
    ),
  },
];

const talkaoAppBrands: Brand[] = [
  talkaoMaster,
  voiceTranslator,
  {
    id: "camera-translator",
    render: () => (
      <div className="flex items-center gap-3">
        <Image
          src={asset("/logos/talkao/CT/Icono_Nuevo_Formato512.png")}
          alt=""
          width={64}
          height={64}
          className="h-12 md:h-14 w-auto rounded-[22%] shadow-lg shadow-violet/20"
        />
        <span className="text-3xl md:text-4xl font-bold tracking-tight">
          Camera Translator
        </span>
      </div>
    ),
  },
  {
    id: "ar-translator",
    render: () => (
      <div className="flex items-center gap-3">
        <Image
          src={asset("/logos/talkao/AR/icon-app.jpg")}
          alt=""
          width={64}
          height={64}
          className="h-12 md:h-14 w-auto rounded-[22%] shadow-lg shadow-amber/20"
        />
        <span className="text-3xl md:text-4xl font-bold tracking-tight">
          AR Translator
        </span>
      </div>
    ),
  },
];

const INTERVAL_MS = 2800;

export type BrandCarouselVariant = "ecosystem" | "talkao-apps";

export default function BrandCarousel({
  variant = "ecosystem",
}: {
  variant?: BrandCarouselVariant;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const brands = variant === "talkao-apps" ? talkaoAppBrands : ecosystemBrands;

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % brands.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, [reduce, paused, brands.length]);

  const current = brands[index];

  return (
    <div
      className="relative h-20 md:h-24 w-full flex items-center justify-center"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      aria-label={
        variant === "talkao-apps"
          ? "Talkao translation apps"
          : "Talkao ecosystem brands"
      }
    >
      {/* Soft radial halo — brand violet (Pantone 267C) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(180px 80px at 50% 50%, rgba(75,38,155,0.22), transparent 70%)",
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex items-center justify-center"
        >
          {current.render()}
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {brands.map((b, i) => (
          <button
            key={b.id}
            type="button"
            aria-label={`Show ${b.id}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index
                ? "w-6 bg-foreground/70"
                : "w-1 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
