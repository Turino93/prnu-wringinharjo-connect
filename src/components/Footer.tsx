import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logoNU from "@/assets/logo-nu.jpg";

const Footer = () => {
  return (
    <footer className="gradient-primary islamic-pattern">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoNU} 
                alt="Logo PRNU Wringinharjo" 
                className="w-12 h-12 rounded-full object-cover bg-white"
              />
              <div>
                <h3 className="font-bold text-lg text-foreground">PRNU Wringinharjo</h3>
                <p className="text-sm text-foreground/70">Nahdlatul Ulama</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Pengurus Ranting Nahdlatul Ulama Wringinharjo berkomitmen untuk menyebarkan 
              Islam Ahlussunnah wal Jama'ah dengan penuh kedamaian dan kerahmatan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/persuratan" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Persuratan
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-foreground/70" />
                <span className="text-sm text-foreground/70">
                  Desa Wringinharjo, Kecamatan Gandrungmangu, Kabupaten Cilacap
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-foreground/70" />
                <span className="text-sm text-foreground/70">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-foreground/70" />
                <span className="text-sm text-foreground/70">prnu.wringinharjo@gmail.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/20 mt-8 pt-6">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} PRNU Wringinharjo. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
