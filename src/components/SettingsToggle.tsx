"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function SettingsToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.settings.language}
      className="flex items-center rounded-md border border-white/10 overflow-hidden text-[11px] font-mono"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2 py-1 transition-colors ${
          locale === "en"
            ? "bg-cyan/15 text-cyan"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
        className={`px-2 py-1 transition-colors ${
          locale === "es"
            ? "bg-cyan/15 text-cyan"
            : "text-muted hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
