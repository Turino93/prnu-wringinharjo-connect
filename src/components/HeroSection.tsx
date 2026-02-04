import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero islamic-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium">Selamat Datang di Website Resmi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Pimpinan Ranting<br />
            <span className="text-secondary">Nahdlatul Ulama</span><br />
            Wringinharjo
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Menjaga dan menyebarkan ajaran Islam Ahlussunnah wal Jama'ah 
            dengan penuh kedamaian, kerahmatan, dan kemaslahatan umat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/persuratan">
              <Button variant="hero" size="xl" className="gap-2 group">
                <FileText className="w-5 h-5" />
                Layanan Persuratan
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/tentang">
              <Button variant="heroOutline" size="xl" className="gap-2">
                <Users className="w-5 h-5" />
                Tentang Kami
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">50+</div>
              <div className="text-sm opacity-80 mt-1">Tahun Berdiri</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">1000+</div>
              <div className="text-sm opacity-80 mt-1">Jamaah</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">15+</div>
              <div className="text-sm opacity-80 mt-1">Program Aktif</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="hsl(var(--background))"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
