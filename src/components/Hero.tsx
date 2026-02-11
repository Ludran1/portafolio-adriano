import { motion } from "framer-motion";
import { Rocket, Bot, Dumbbell, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: Rocket, label: "Shipping Fast" },
  { icon: Bot, label: "AI-Augmented" },
  { icon: Dumbbell, label: "Business Owner" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {badges.map((badge, i) => (
              <span key={i} className="neon-badge">
                <badge.icon size={14} />
                {badge.label}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Founder</span>
            <span className="text-foreground"> & Product</span>
            <br />
            <span className="text-foreground">Engineer.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Construyo sistemas SaaS que facturan y gestionan negocios reales.
            Combinando 3 años de operaciones comerciales con arquitectura de
            software moderna.
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              Ver Proyectos (SaaS)
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-semibold border border-border text-foreground hover:bg-muted/50 transition-colors"
            >
              Hablemos de Negocios
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
