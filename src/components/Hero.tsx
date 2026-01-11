import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative matrix-dots">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-subtle bg-secondary/50 mb-10 animate-fade-in">
          <div className="flex -space-x-1">
            <div className="w-6 h-6 rounded bg-primary/20 border border-primary/40" />
            <div className="w-6 h-6 rounded bg-accent/20 border border-accent/40" />
            <div className="w-6 h-6 rounded bg-highlight/20 border border-highlight/40" />
          </div>
          <span className="font-mono text-sm text-muted-foreground">
            Trusted by 10+ companies
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 max-w-4xl mx-auto animate-slide-up">
          <span className="text-foreground">Websites are the clearest representation</span>
          <br />
          <span className="text-foreground">of a company's technological prowess.</span>
          <br />
          <span className="text-highlight">I build them.</span>
        </h1>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 font-mono text-sm uppercase tracking-widest border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Let's Work Together
          </a>
          <span className="font-mono text-xs text-muted-foreground">
            Schedule a 30-minute call
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
        <ChevronDown className="text-muted-foreground" size={20} />
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Scroll Down
        </span>
        <ChevronDown className="text-muted-foreground" size={20} />
      </div>
    </section>
  );
};

export default Hero;
