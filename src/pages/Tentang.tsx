import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award, Calendar } from "lucide-react";

const pengurus = [
  { nama: "KH. Ahmad Fauzi", jabatan: "Rais" },
  { nama: "H. Suratman", jabatan: "Ketua" },
  { nama: "Ust. Rohman", jabatan: "Wakil Ketua" },
  { nama: "Ust. Hasan Basri", jabatan: "Katib" },
  { nama: "H. Muslih", jabatan: "Bendahara" },
];

const nilaiNU = [
  {
    title: "Tawasuth (Moderat)",
    description: "Mengambil jalan tengah dalam menghadapi berbagai persoalan, tidak ekstrem kanan maupun kiri.",
    icon: Target,
  },
  {
    title: "Tawazun (Seimbang)",
    description: "Menjaga keseimbangan dalam berbagai aspek kehidupan, baik duniawi maupun ukhrawi.",
    icon: Heart,
  },
  {
    title: "Tasamuh (Toleran)",
    description: "Menghargai perbedaan pendapat dan keberagaman dalam bermasyarakat.",
    icon: Users,
  },
  {
    title: "I'tidal (Adil)",
    description: "Berlaku adil dan tidak memihak dalam setiap keputusan dan tindakan.",
    icon: Award,
  },
];

const Tentang = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 gradient-hero islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Tentang PRNU Wringinharjo
            </h1>
            <p className="text-lg opacity-90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Mengenal lebih dekat struktur organisasi dan nilai-nilai yang kami junjung tinggi
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium">Sejarah</span>
                <h2 className="text-3xl font-bold text-foreground mt-2 mb-6">
                  Perjalanan Panjang PRNU Wringinharjo
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Pimpinan Ranting Nahdlatul Ulama (PRNU) Wringinharjo didirikan pada tahun 1950-an 
                    oleh para ulama dan tokoh masyarakat setempat yang memiliki visi untuk menyebarkan 
                    ajaran Islam Ahlussunnah wal Jama'ah di Desa Wringinharjo.
                  </p>
                  <p>
                    Sejak berdiri, PRNU Wringinharjo telah menjadi wadah bagi masyarakat dalam 
                    menjalankan aktivitas keagamaan, sosial, dan pendidikan. Berbagai program 
                    telah dilaksanakan untuk meningkatkan kesejahteraan umat.
                  </p>
                  <p>
                    Hingga saat ini, PRNU Wringinharjo terus berkembang dan berkontribusi aktif 
                    dalam pembangunan masyarakat yang berakhlakul karimah.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tonggak Sejarah</h3>
                    <p className="text-sm text-muted-foreground">Milestone penting</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-16 text-primary font-bold">1950</div>
                    <p className="text-muted-foreground">Pendirian PRNU Wringinharjo</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 text-primary font-bold">1965</div>
                    <p className="text-muted-foreground">Pembangunan Madrasah Diniyah</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 text-primary font-bold">1980</div>
                    <p className="text-muted-foreground">Peresmian TPQ Al-Hidayah</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 text-primary font-bold">2000</div>
                    <p className="text-muted-foreground">Renovasi Sekretariat</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 text-primary font-bold">2024</div>
                    <p className="text-muted-foreground">Digitalisasi Persuratan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium">Nilai-Nilai</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
              Prinsip Ahlussunnah wal Jama'ah
            </h2>
            <p className="text-muted-foreground">
              Nilai-nilai yang menjadi pedoman kami dalam menjalankan organisasi dan bermasyarakat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {nilaiNU.map((nilai, index) => (
              <div 
                key={nilai.title}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <nilai.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{nilai.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{nilai.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pengurus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium">Struktur Organisasi</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
              Susunan Pengurus
            </h2>
            <p className="text-muted-foreground">
              Pengurus PRNU Wringinharjo masa khidmat 2024-2029
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {pengurus.map((item, index) => (
              <div 
                key={item.nama}
                className="bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-primary/30 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{item.nama}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tentang;
