const Manifesto = () => {
  return (
    <section id="manifesto" className="py-32 matrix-dots relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section badge */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-subtle bg-secondary/50 mb-12">
            <span className="font-mono text-sm text-foreground">
              Manifesto — My Work Philosophy
            </span>
          </div>

          {/* Philosophy text */}
          <p className="font-mono text-lg md:text-xl leading-relaxed text-secondary-foreground">
            From the beginning to where I stand today in my career{" "}
            <span className="text-highlight">[3+ years]</span>, I've understood that{" "}
            <span className="text-foreground font-medium">websites</span> are not mere portals to connect
            users to companies. They mean something more: they are a{" "}
            <span className="text-foreground font-medium">clear representation of technological prowess</span>{" "}
            of a company. By having a{" "}
            <span className="text-highlight font-medium">strong and captivating website</span>, it becomes
            clear that the company is a{" "}
            <span className="text-foreground font-medium">force to be reckoned with</span>{" "}
            in its market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
