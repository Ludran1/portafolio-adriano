import { motion } from "framer-motion";

const coreStack = [
  { name: "Next.js", category: "Framework" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "TypeScript", category: "Language" },
];

const creativeStack = [
  { name: "Cursor AI", category: "AI Dev" },
  { name: "Figma", category: "UI Design" },
  { name: "Adobe Premiere", category: "Video" },
  { name: "Framer Motion", category: "Animation" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const TechStack = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Herramientas para construir rápido y con calidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Engineering */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
              Core Engineering
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {coreStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={item}
                  className="glass-card-hover px-5 py-3.5"
                >
                  <span className="block text-sm font-semibold text-foreground">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Creative & Speed */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider neon-text-violet mb-5">
              Creative & Speed
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {creativeStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={item}
                  className="glass-card-hover px-5 py-3.5"
                >
                  <span className="block text-sm font-semibold text-foreground">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
