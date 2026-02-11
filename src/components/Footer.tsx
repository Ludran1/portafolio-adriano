import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl font-semibold text-foreground mb-3 max-w-xl mx-auto">
          ¿Buscas un desarrollador que entienda de{" "}
          <span className="gradient-text">P&L, UX y Código</span>?
        </p>
        <p className="text-muted-foreground mb-8">Hablemos.</p>

        <div className="flex justify-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-12">
          © {new Date().getFullYear()} · Built with obsession.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
