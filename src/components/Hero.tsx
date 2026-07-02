import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import BlurText from "./reactbits/BlurText";

const techBadges = [
  {
    name: "Python",
    className: "bg-yellow-400/15 border-yellow-300/50 text-yellow-200",
    icon: "Py",
  },
  {
    name: "TypeScript",
    className: "bg-blue-500/15 border-blue-300/50 text-blue-200",
    icon: "TS",
  },
  {
    name: "Ethereum",
    className: "bg-violet-500/15 border-violet-300/50 text-violet-100",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
        <path d="M12 2 5.8 12.2 12 15.9l6.2-3.7L12 2Z" fill="currentColor" opacity="0.95" />
        <path d="M5.8 13.4 12 22l6.2-8.6L12 17.1l-6.2-3.7Z" fill="currentColor" opacity="0.65" />
      </svg>
    ),
  },
  {
    name: "Solidity",
    className: "bg-slate-500/15 border-slate-300/50 text-slate-100",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
        <path d="M8.2 3h7.2l-3.6 6.2H4.6L8.2 3Z" fill="currentColor" opacity="0.9" />
        <path d="M15.8 21H8.6l3.6-6.2h7.2L15.8 21Z" fill="currentColor" opacity="0.55" />
        <path d="M12.2 9.5 15.8 3l3.6 6.2-3.6 6.3-3.6-6Z" fill="currentColor" opacity="0.75" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    className: "bg-white/10 border-white/30 text-white",
    icon: "N",
  },
];

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative matrix-dots">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Trust badge */}
        <div className="inline-flex max-w-full items-center gap-3 px-5 py-2.5 rounded-full border border-subtle bg-secondary/50 mb-10 animate-fade-in">
          <div className="flex shrink-0 -space-x-1.5">
            {techBadges.map((badge) => (
              <span
                key={badge.name}
                title={badge.name}
                className={`flex h-6 w-6 items-center justify-center rounded-md border font-mono text-[9px] font-semibold shadow-[0_0_18px_rgba(34,211,238,0.12)] backdrop-blur ${badge.className}`}
              >
                {badge.icon}
              </span>
            ))}
          </div>
          <span className="min-w-0 truncate font-mono text-sm text-muted-foreground">
            {t('hero.trust')}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="mx-auto mb-8 w-full max-w-[calc(100vw-3rem)] font-mono text-xl font-medium leading-tight animate-slide-up sm:max-w-4xl sm:text-3xl md:text-5xl lg:text-6xl">
          <BlurText
            as="span"
            text={t("hero.line1")}
            className="w-full max-w-full justify-center text-foreground"
            delay={45}
            animateBy="words"
            direction="bottom"
            stepDuration={0.24}
          />
          <BlurText
            as="span"
            text={t("hero.line2")}
            className="w-full max-w-full justify-center text-foreground"
            delay={45}
            animateBy="words"
            direction="bottom"
            rootMargin="-10px"
            stepDuration={0.24}
          />
          <BlurText
            as="span"
            text={t("hero.line3")}
            className="w-full max-w-full justify-center text-highlight"
            delay={45}
            animateBy="words"
            direction="bottom"
            rootMargin="-20px"
            stepDuration={0.24}
          />
        </h1>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 font-mono text-sm uppercase tracking-widest border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            {t('hero.cta')}
          </a>
          <span className="max-w-full px-4 text-center font-mono text-xs text-muted-foreground">
            {t('hero.ctaSubtext')}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
        <ChevronDown className="text-muted-foreground" size={20} />
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          {t('hero.scroll')}
        </span>
        <ChevronDown className="text-muted-foreground" size={20} />
      </div>
    </section>
  );
};

export default Hero;
