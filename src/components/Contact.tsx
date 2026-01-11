import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 matrix-dots relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-subtle bg-secondary/50 mb-8">
            <span className="font-mono text-sm text-foreground">
              Let's Connect
            </span>
          </div>

          <h2 className="font-mono text-2xl md:text-4xl font-medium text-foreground mb-6">
            Ready to build something{" "}
            <span className="text-highlight">amazing</span>?
          </h2>

          <p className="font-sans text-muted-foreground mb-10 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Contact button */}
          <a
            href="mailto:viniciushmdem15@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 mb-12"
          >
            <Mail size={18} />
            Get in Touch
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/vinimaffra03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-subtle text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/viniciusmaffra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-subtle text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
