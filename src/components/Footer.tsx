import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground islamic-pattern">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-bold text-xl">NU</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">PRNU Wringinharjo</h3>
                <p className="text-sm opacity-80">Nahdlatul Ulama</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Pimpinan Ranting Nahdlatul Ulama Wringinharjo berkomitmen untuk menyebarkan 
              Islam Ahlussunnah wal Jama'ah dengan penuh kedamaian dan kerahmatan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/persuratan" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Persuratan
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">
                  Desa Wringinharjo, Kecamatan Gandrungmangu, Kabupaten Cilacap
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-80">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-80">prnu.wringinharjo@gmail.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <p className="text-center text-sm opacity-60">
            © {new Date().getFullYear()} PRNU Wringinharjo. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
