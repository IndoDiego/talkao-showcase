"use client";

import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/theme/ThemeProvider";

export default function SettingsToggle() {
  const { locale, setLocale, t } = useI18n();
  const { theme, toggle } = useTheme();

  return (
    <div className="flex items-center gap-1">
      {/* Language */}
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

      {/* Theme */}
      <button
        type="button"
        onClick={toggle}
        aria-label={`${t.settings.theme}: ${
          theme === "dark" ? t.settings.dark : t.settings.light
        }`}
        className="w-8 h-7 grid place-items-center rounded-md border border-white/10 text-muted hover:text-foreground hover:bg-white/5 transition-colors"
      >
        {theme === "dark" ? (
          <Sun className="w-3.5 h-3.5" />
        ) : (
          <Moon className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}
