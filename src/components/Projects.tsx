import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "LURK / Quant Strategy System",
    description: "Python/FastAPI quant strategy system with backtests, risk controls, Telegram alerts and a live Next.js dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "https://maffratradingbot.vercel.app",
  },
  {
    id: 2,
    title: "zkStay",
    description: "Web3 reservation dApp combining a React/Vite product experience with Cairo smart contracts for booking flows on Starknet",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "https://zk-stay.vercel.app",
  },
  {
    id: 3,
    title: "AlphaPlanner",
    description: "Full-stack finance planner with Clerk auth, Prisma/PostgreSQL data modeling, charts and transaction workflows",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    link: "https://alphaplanner.vercel.app",
  },
  {
    id: 4,
    title: "NanoGate API",
    description: "NestJS backend system with JWT auth, Prisma persistence, validation, Docker-ready setup and testable API modules",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/NanoGate",
  },
  {
    id: 5,
    title: "RickFretes",
    description: "Commercial freight website built as a polished client-facing product with lead capture, service flows and responsive TypeScript UI",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    link: "https://rickfretes.vercel.app",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="py-24 bg-grid">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-3xl font-medium text-foreground mb-12 text-center">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-subtle bg-card hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-mono text-lg font-medium text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {project.description}
                </p>
                <span className="font-mono text-xs text-highlight mt-4 uppercase tracking-widest">
                  View project
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
