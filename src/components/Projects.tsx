import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce with Next.js and Stripe integration",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative portfolio for a design agency",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Mobile App Landing",
    description: "Conversion-focused landing page for mobile app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Corporate Website",
    description: "Modern corporate website with CMS integration",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Startup Landing",
    description: "High-converting landing page for tech startup",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
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
            <article
              key={project.id}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
