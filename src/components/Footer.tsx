import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [uptime, setUptime] = useState("00:00:00");

  useEffect(() => {
    const startTime = Date.now();
    
    const updateUptime = () => {
      const elapsed = Date.now() - startTime;
      const hours = Math.floor(elapsed / 3600000).toString().padStart(2, "0");
      const minutes = Math.floor((elapsed % 3600000) / 60000).toString().padStart(2, "0");
      const seconds = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, "0");
      setUptime(`${hours}:${minutes}:${seconds}`);
    };

    const interval = setInterval(updateUptime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "#projects", label: "./projects" },
    { href: "#manifesto", label: "./manifesto" },
    { href: "#stacks", label: "./stacks" },
  ];

  const socialLinks = [
    { href: "https://github.com/vinimaffra03", label: "github", color: "bg-green-500" },
    { href: "https://www.linkedin.com/in/viniciusmaffra/", label: "linkedin", color: "bg-green-500" },
    { href: "https://twitter.com", label: "twitter", color: "bg-yellow-500" },
  ];

  return (
    <footer className="py-6 border-t border-subtle bg-card/50">
      <div className="container mx-auto px-6">
        {/* Terminal prompt line */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
          <div className="font-mono text-sm flex items-center gap-1">
            <span className="text-muted-foreground">viniciushmdem15@</span>
            <span className="text-foreground">gmail.com</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-highlight ml-2">whoami</span>
            <span className="text-foreground ml-1 animate-pulse">|</span>
          </div>

          {/* Navigation links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4 decoration-muted-foreground/30 hover:decoration-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Separator */}
        <div className="border-t border-subtle my-4" />

        {/* System info line */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              <span className="text-secondary-foreground">PWD:</span> /home/vinicius/portfolio
            </span>
            <span>
              <span className="text-secondary-foreground">SHELL:</span> /bin/zsh
            </span>
            <span>
              <span className="text-secondary-foreground">UPTIME:</span> {uptime}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
              >
                <span className={`w-2 h-2 rounded-full ${link.color}`} />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright line */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mt-4 pt-4 border-t border-subtle">
          <span className="font-mono text-xs text-muted-foreground">
            © {currentYear} Vinicius Maffra. All rights reserved.
          </span>
          
          <span className="font-mono text-xs text-muted-foreground">
            SYSTEM_STATUS: <span className="text-green-500">OPERATIONAL</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
