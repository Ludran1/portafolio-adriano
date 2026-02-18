import { motion } from "framer-motion";
import {
  Database,
  Wifi,
  MapPin,
  ArrowUpRight,
  Users,
  ShoppingCart,
  Globe,
} from "lucide-react";

interface Project {
  title: string;
  status: string;
  statusColor: string;
  tech: string[];
  description: string;
  metric?: string;
  icon: React.ElementType;
  featured?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    title: "FitGym SaaS Platform",
    status: "Migrando a Multi-Tenant",
    statusColor: "text-yellow-400",
    tech: ["Next.js", "Supabase Auth", "RLS"],
    description:
      "De herramienta interna a SaaS. ERP de gestión deportiva con control de acceso biométrico y finanzas.",
    metric:
      "Gestiona operaciones diarias de un gimnasio real con +60 usuarios.",
    icon: Users,
    featured: true,
    link: "https://fitgym-app.com/login",
  },
  {
    title: "Hardware Store POS",
    status: "En Producción",
    statusColor: "text-green-400",
    tech: ["Supabase Realtime", "React Query", "API", "Sunat"],
    description:
      "Sistema POS especializado para ferreterías con facturación electrónica.",
    icon: ShoppingCart,
    link: "https://ferreteria2-0.vercel.app/",
  },
  {
    title: "Real Estate Mi Hogar",
    status: "En Desarrollo",
    statusColor: "text-blue-400",
    tech: ["Mapbox", "GeoJSON", "Filtros Avanzados"],
    description:
      "Búsqueda de propiedades geoespacial estilo Zillow optimizada para el mercado local de Lima.",
    icon: Globe,
    link: "https://inmobiliaria-ashen-one.vercel.app/",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BentoProjects = () => {
  return (
    <section id="proyectos" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Proyectos <span className="gradient-text">Reales</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Software construido para resolver problemas de negocios reales.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`glass-card-hover p-6 md:p-8 group cursor-pointer ${
                project.featured ? "md:col-span-2" : ""
              }`}
              onClick={() =>
                project.link && window.open(project.link, "_blank")
              }
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <project.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs font-medium ${project.statusColor}`}
                    >
                      ● {project.status}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {project.metric && (
                <p className="text-sm text-primary/80 mb-5 font-medium">
                  📊 {project.metric}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoProjects;
