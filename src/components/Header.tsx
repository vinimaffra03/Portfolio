import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#projects", label: t('nav.projects') },
    { href: "#manifesto", label: t('nav.manifesto') },
    { href: "#stacks", label: t('nav.stacks') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-subtle">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="relative font-mono text-xl font-semibold tracking-tight text-foreground px-4 py-2">
            <span className="relative z-10">vinicius maffra</span>
            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
              <div className="absolute inset-0 rounded-lg border border-cyan-500/30"></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-laser"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-laser" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-laser" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-laser" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-2 border border-subtle rounded-lg hover:border-foreground/30"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              {language === 'en' ? 'EN' : 'PT'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-subtle pt-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 w-full text-left"
                  aria-label="Toggle language"
                >
                  <Globe size={16} />
                  {language === 'en' ? 'English' : 'Português'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
