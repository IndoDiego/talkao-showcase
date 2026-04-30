"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { asset } from "@/lib/asset";
import SettingsToggle from "./SettingsToggle";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchors = [
    { href: "#ecosystem", label: t.nav.ecosystem },
    { href: "#voice-translator", label: t.nav.voiceTranslator },
    { href: "#offiwiz", label: t.nav.offiwiz },
    { href: "#nexaflow", label: t.nav.nexaflow },
    { href: "#parkao", label: t.nav.parkao },
    { href: "#tech", label: t.nav.stack },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src={asset("/logos/talkao/icon-transparent.png")}
            alt="Talkao"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-mono text-sm font-semibold tracking-tight">
            talkao<span className="text-muted">/ecosystem</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-xs text-muted hover:text-foreground px-3 py-1.5 rounded-md transition-colors hover:bg-white/5"
            >
              {a.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <SettingsToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex text-xs font-medium px-3.5 py-1.5 rounded-md border border-cyan/30 bg-cyan/10 text-cyan hover:bg-cyan/20 transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
