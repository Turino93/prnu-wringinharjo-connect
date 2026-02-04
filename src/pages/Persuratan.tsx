import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LetterCard from "@/components/LetterCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  Send, 
  Plus, 
  Search, 
  FileText,
  Filter,
  Download
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

// Sample data
const suratMasuk = [
  {
    id: "1",
    nomorSurat: "001/SM/PRNU-WRH/I/2024",
    perihal: "Undangan Rapat Koordinasi MWCNU",
    tanggal: "15 Januari 2024",
    pengirim: "MWCNU Gandrungmangu",
    type: "masuk" as const,
    status: "selesai" as const,
  },
  {
    id: "2",
    nomorSurat: "002/SM/PRNU-WRH/I/2024",
    perihal: "Permohonan Pengajian Akbar",
    tanggal: "20 Januari 2024",
    pengirim: "Fatayat NU Wringinharjo",
    type: "masuk" as const,
    status: "proses" as const,
  },
  {
    id: "3",
    nomorSurat: "003/SM/PRNU-WRH/II/2024",
    perihal: "Surat Edaran Ramadhan 1445 H",
    tanggal: "1 Februari 2024",
    pengirim: "PCNU Cilacap",
    type: "masuk" as const,
    status: "pending" as const,
  },
];

const suratKeluar = [
  {
    id: "1",
    nomorSurat: "001/SK/PRNU-WRH/I/2024",
    perihal: "Laporan Kegiatan Triwulan IV 2023",
    tanggal: "5 Januari 2024",
    penerima: "MWCNU Gandrungmangu",
    type: "keluar" as const,
    status: "selesai" as const,
  },
  {
    id: "2",
    nomorSurat: "002/SK/PRNU-WRH/I/2024",
    perihal: "Permohonan Narasumber Pengajian",
    tanggal: "18 Januari 2024",
    penerima: "KH. Ahmad Fauzi",
    type: "keluar" as const,
    status: "selesai" as const,
  },
  {
    id: "3",
    nomorSurat: "003/SK/PRNU-WRH/II/2024",
    perihal: "Undangan Haul Akbar",
    tanggal: "10 Februari 2024",
    penerima: "Seluruh Jamaah NU Wringinharjo",
    type: "keluar" as const,
    status: "proses" as const,
  },
];

const Persuratan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Surat berhasil dibuat!",
      description: "Surat baru telah ditambahkan ke dalam sistem.",
    });
    setIsDialogOpen(false);
  };

  const filteredMasuk = suratMasuk.filter(
    (surat) =>
      surat.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredKeluar = suratKeluar.filter(
    (surat) =>
      surat.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 gradient-hero islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-in">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Sistem Persuratan Digital</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Layanan Persuratan
            </h1>
            <p className="text-lg opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Kelola surat masuk dan surat keluar organisasi secara digital dengan mudah dan terorganisir
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{suratMasuk.length}</p>
                  <p className="text-sm text-muted-foreground">Surat Masuk</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Send className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{suratKeluar.length}</p>
                  <p className="text-sm text-muted-foreground">Surat Keluar</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {suratMasuk.filter(s => s.status === "proses").length + suratKeluar.filter(s => s.status === "proses").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Diproses</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {suratMasuk.filter(s => s.status === "selesai").length + suratKeluar.filter(s => s.status === "selesai").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Selesai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Cari surat berdasarkan nomor atau perihal..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Buat Surat
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Buat Surat Baru</DialogTitle>
                    <DialogDescription>
                      Isi formulir berikut untuk membuat surat baru.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Jenis Surat</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis surat" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masuk">Surat Masuk</SelectItem>
                          <SelectItem value="keluar">Surat Keluar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nomor">Nomor Surat</Label>
                      <Input id="nomor" placeholder="Contoh: 001/SK/PRNU-WRH/I/2024" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="perihal">Perihal</Label>
                      <Input id="perihal" placeholder="Masukkan perihal surat" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tujuan">Pengirim/Penerima</Label>
                      <Input id="tujuan" placeholder="Masukkan nama pengirim atau penerima" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="isi">Isi Surat</Label>
                      <Textarea id="isi" placeholder="Masukkan isi surat..." rows={4} />
                    </div>
                    <div className="flex justify-end gap-2 pt-4">
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Batal
                      </Button>
                      <Button type="submit">Simpan Surat</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="masuk" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger value="masuk" className="gap-2">
                <Mail className="w-4 h-4" />
                Surat Masuk
              </TabsTrigger>
              <TabsTrigger value="keluar" className="gap-2">
                <Send className="w-4 h-4" />
                Surat Keluar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="masuk">
              {filteredMasuk.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredMasuk.map((surat) => (
                    <LetterCard key={surat.id} {...surat} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground">Tidak ada surat masuk</h3>
                  <p className="text-muted-foreground">Belum ada surat masuk yang ditemukan.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="keluar">
              {filteredKeluar.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredKeluar.map((surat) => (
                    <LetterCard key={surat.id} {...surat} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Send className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground">Tidak ada surat keluar</h3>
                  <p className="text-muted-foreground">Belum ada surat keluar yang ditemukan.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Persuratan;
