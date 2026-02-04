import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Heart, 
  Building2, 
  GraduationCap,
  ArrowRight,
  Calendar,
  MapPin
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Layanan Persuratan",
    description: "Kelola surat masuk dan keluar organisasi secara digital dengan mudah dan terorganisir.",
  },
  {
    icon: Building2,
    title: "Kegiatan Keagamaan",
    description: "Berbagai kegiatan keagamaan rutin seperti pengajian, tahlilan, dan peringatan hari besar Islam.",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Program pendidikan untuk warga NU mulai dari TPQ, Madrasah Diniyah, hingga kajian kitab kuning.",
  },
  {
    icon: Heart,
    title: "Sosial & Kemasyarakatan",
    description: "Kegiatan sosial seperti santunan yatim, bakti sosial, dan pemberdayaan masyarakat.",
  },
];

const upcomingEvents = [
  {
    title: "Pengajian Rutin Ahad Pagi",
    date: "Setiap Ahad, 06:00 WIB",
    location: "Masjid Baitul Muttaqin",
  },
  {
    title: "Tahlilan Rutin Malam Jum'at",
    date: "Setiap Kamis, 19:30 WIB",
    location: "Musholla Al-Ikhlas",
  },
  {
    title: "Peringatan Maulid Nabi SAW",
    date: "15 Rabiul Awal 1446 H",
    location: "Masjid Baitul Muttaqin",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Layanan & Program Kami
            </h2>
            <p className="text-muted-foreground">
              PRNU Wringinharjo menyediakan berbagai layanan dan program untuk 
              kemaslahatan umat dan kemajuan masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-primary font-medium">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Mengenal Lebih Dekat PRNU Wringinharjo
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Pimpinan Ranting Nahdlatul Ulama (PRNU) Wringinharjo merupakan struktur 
                organisasi NU di tingkat desa yang berkomitmen menjaga dan menyebarkan 
                ajaran Islam Ahlussunnah wal Jama'ah.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Dengan semangat tawasuth (moderat), tawazun (seimbang), tasamuh (toleran), 
                dan i'tidal (adil), kami terus berkontribusi untuk kemajuan umat dan bangsa.
              </p>
              <Link to="/tentang">
                <Button size="lg" className="gap-2 group">
                  Selengkapnya
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Kegiatan Mendatang
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-accent/50 rounded-lg border border-border"
                    >
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Butuh Layanan Persuratan?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Akses layanan persuratan digital kami untuk memudahkan pengurusan 
            surat-menyurat organisasi dengan lebih efisien.
          </p>
          <Link to="/persuratan">
            <Button variant="hero" size="xl" className="gap-2 group">
              <FileText className="w-5 h-5" />
              Akses Persuratan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
