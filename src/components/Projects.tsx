import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "LURK / Quant Strategy System",
    description: "Python trading automation with FastAPI, backtests, Telegram alerts, risk boundaries and a Next.js dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03",
  },
  {
    id: 2,
    title: "zkStay",
    description: "Starknet reservation dApp with Cairo smart contracts and a React/Vite frontend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/zkStay",
  },
  {
    id: 3,
    title: "AlphaPlanner",
    description: "Financial dashboard with Next.js, Clerk, Prisma, PostgreSQL, charts and transaction workflows",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/alphaPlanner",
  },
  {
    id: 4,
    title: "Essenza / WorkNow",
    description: "Booking platform for commercial and medical spaces with auth, room management and reservation flows",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/essenza-medical-center",
  },
  {
    id: 5,
    title: "FitCosmetics",
    description: "E-commerce project with product catalog, categories, cart flows, forms and a modern TypeScript stack",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/fit-cosmetics",
  },
  {
    id: 6,
    title: "NestJS API Systems",
    description: "Backend APIs and boilerplates using NestJS, JWT auth, Prisma, validation and automated tests",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/LibreLojaAPI",
  },
  {
    id: 7,
    title: "Polymarket & DeFi Reports",
    description: "Python data tools for market data, DeFi yields, Uniswap pools, reports and automation workflows",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/polymarket-reports",
  },
  {
    id: 8,
    title: "MaffraBooks",
    description: "React book platform with API-driven data, routing, styled-components and full-stack learning modules",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/mafrabooks",
  },
  {
    id: 9,
    title: "Portfolio System",
    description: "Bilingual React portfolio with animated sections, project grid, tech stack and contact flows",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    link: "https://github.com/vinimaffra03/Portfolio",
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
