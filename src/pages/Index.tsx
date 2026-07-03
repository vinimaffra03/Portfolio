import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Manifesto from "@/components/Manifesto";
import Stacks from "@/components/Stacks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DotField from "@/components/reactbits/DotField";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <DotField
        className="pointer-events-none fixed inset-0 z-20 opacity-75 mix-blend-screen"
        dotRadius={1.6}
        dotSpacing={17}
        cursorRadius={420}
        bulgeStrength={46}
        glowRadius={260}
        sparkle
        gradientFrom="rgba(103, 232, 249, 0.36)"
        gradientTo="rgba(148, 163, 184, 0.22)"
        glowColor="rgba(34, 211, 238, 0.34)"
      />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Manifesto />
        <Stacks />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
