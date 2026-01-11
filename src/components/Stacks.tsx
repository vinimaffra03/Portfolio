const mainStacks = [
  { name: "JavaScript", color: "bg-yellow-400", textColor: "text-black" },
  { name: "React", color: "bg-cyan-500", textColor: "text-black" },
  { name: "Node.js", color: "bg-green-600", textColor: "text-white" },
  { name: "MongoDB", color: "bg-green-500", textColor: "text-white" },
  { name: "PostgreSQL", color: "bg-blue-700", textColor: "text-white" },
  { name: "Next.js", color: "bg-black border border-white/20", textColor: "text-white" },
  { name: "NestJS", color: "bg-red-600", textColor: "text-white" },
  { name: "Prisma", color: "bg-slate-800", textColor: "text-white" },
  { name: "Git", color: "bg-orange-600", textColor: "text-white" },
  { name: "GitHub", color: "bg-gray-800", textColor: "text-white" },
];

const learningStacks = [
  { name: "TypeScript", color: "bg-blue-600", textColor: "text-white" },
  { name: "GraphQL", color: "bg-pink-600", textColor: "text-white" },
  { name: "Docker", color: "bg-blue-500", textColor: "text-white" },
];

const Stacks = () => {
  return (
    <section id="stacks" className="py-16 bg-grid">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-subtle bg-secondary/50 mb-4">
            <span className="font-mono text-xs text-foreground">
              Tech Stack
            </span>
          </div>
          <h2 className="font-mono text-xl md:text-2xl font-medium text-foreground">
            Technologies I work with
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main Tools & Languages */}
          <div>
            <h3 className="font-mono text-sm font-medium text-foreground mb-3">
              Main Tools & Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {mainStacks.map((stack) => (
                <span
                  key={stack.name}
                  className={`px-2.5 py-1 rounded font-mono text-xs font-medium ${stack.color} ${stack.textColor} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {stack.name}
                </span>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <h3 className="font-mono text-sm font-medium text-foreground mb-3">
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {learningStacks.map((stack) => (
                <span
                  key={stack.name}
                  className={`px-2.5 py-1 rounded font-mono text-xs font-medium ${stack.color} ${stack.textColor} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {stack.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
