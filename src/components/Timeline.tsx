import { motion } from "framer-motion";
import { Book, Building2, Code, Rocket } from "lucide-react";

const events = [
  {
    period: "Hace 3 años",
    title: "Fundé FitGym",
    description:
      "Abrí mi propio gimnasio. Aprendí de P&L, marketing y gestión de operaciones. Paralelamente, me formé en diseño y audiovisual (UX/UI).",
    icon: Building2,
  },
  {
    period: "Hace 6 meses",
    title: "El pivot a código",
    description:
      "Detecté ineficiencias operativas. Empecé a programar soluciones propias como autodidacta potenciado con IA.",
    icon: Code,
  },
  {
    period: "Hace 1 mes",
    title: "Escalado a SaaS",
    description:
      "Escale FitGym OS a SaaS Multi-tenant.",
    icon: Rocket,
  },
  {
    period: "Hoy",
    title: "Estudiando Informatica",
    description:
      "Ingrese a Cibertec para fortalecer mis conocimientos sin descuidar mi aprendizaje autodidacta",
    icon: Book,
  },
];

const Timeline = () => {
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
            Mi <span className="gradient-text">Historia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De dueño de gimnasio a Product Engineer.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="timeline-line" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="timeline-dot shrink-0">
                  <event.icon size={16} className="text-primary" />
                </div>

                <div className="glass-card p-5 flex-1">
                  <span className="neon-badge mb-3 inline-block">
                    {event.period}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
