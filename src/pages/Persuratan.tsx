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
  Download,
  Loader2,
  Lock
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
import { useLetters, useCreateLetter, type LetterType } from "@/hooks/useLetters";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Persuratan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "" as LetterType | "",
    nomor_surat: "",
    perihal: "",
    pengirim_penerima: "",
    isi: "",
  });

  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const { data: suratMasuk = [], isLoading: loadingMasuk } = useLetters("masuk");
  const { data: suratKeluar = [], isLoading: loadingKeluar } = useLetters("keluar");
  const createLetter = useCreateLetter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.type || !formData.nomor_surat || !formData.perihal) {
      return;
    }

    createLetter.mutate({
      type: formData.type,
      nomor_surat: formData.nomor_surat,
      perihal: formData.perihal,
      pengirim: formData.type === "masuk" ? formData.pengirim_penerima : undefined,
      penerima: formData.type === "keluar" ? formData.pengirim_penerima : undefined,
      isi: formData.isi || undefined,
      tanggal: format(new Date(), "yyyy-MM-dd"),
    }, {
      onSuccess: () => {
        setIsDialogOpen(false);
        setFormData({
          type: "",
          nomor_surat: "",
          perihal: "",
          pengirim_penerima: "",
          isi: "",
        });
      }
    });
  };

  const filteredMasuk = suratMasuk.filter(
    (surat) =>
      surat.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.nomor_surat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredKeluar = suratKeluar.filter(
    (surat) =>
      surat.perihal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.nomor_surat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalProses = [...suratMasuk, ...suratKeluar].filter(s => s.status === "proses").length;
  const totalSelesai = [...suratMasuk, ...suratKeluar].filter(s => s.status === "selesai").length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 gradient-hero islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-6 animate-fade-in shadow-md">
              <FileText className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Sistem Persuratan Digital</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s" }}>
              Layanan Persuratan
            </h1>
            <p className="text-lg animate-fade-in-up text-foreground/80" style={{ animationDelay: "0.2s" }}>
              Kelola surat masuk dan surat keluar organisasi secara digital dengan mudah dan terorganisir
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Admin Notice */}
          {!authLoading && !isAdmin && (
            <div className="mb-6 p-4 bg-muted rounded-xl border border-border flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground font-medium">
                  Mode Baca Saja
                </p>
                <p className="text-xs text-muted-foreground">
                  {user 
                    ? "Anda login sebagai user biasa. Hubungi administrator untuk mendapatkan akses mengelola surat."
                    : "Login sebagai admin untuk dapat menambah dan mengelola surat."}
                </p>
              </div>
              {!user && (
                <Link to="/login">
                  <Button size="sm">Login Admin</Button>
                </Link>
              )}
            </div>
          )}

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
                  <p className="text-2xl font-bold text-foreground">{totalProses}</p>
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
                  <p className="text-2xl font-bold text-foreground">{totalSelesai}</p>
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
              {isAdmin && (
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
                        <Select 
                          value={formData.type} 
                          onValueChange={(value: LetterType) => setFormData({ ...formData, type: value })}
                        >
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
                        <Input 
                          id="nomor" 
                          placeholder="Contoh: 001/SK/PRNU-WRH/I/2024" 
                          value={formData.nomor_surat}
                          onChange={(e) => setFormData({ ...formData, nomor_surat: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="perihal">Perihal</Label>
                        <Input 
                          id="perihal" 
                          placeholder="Masukkan perihal surat" 
                          value={formData.perihal}
                          onChange={(e) => setFormData({ ...formData, perihal: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tujuan">
                          {formData.type === "keluar" ? "Penerima" : "Pengirim"}
                        </Label>
                        <Input 
                          id="tujuan" 
                          placeholder={`Masukkan nama ${formData.type === "keluar" ? "penerima" : "pengirim"}`}
                          value={formData.pengirim_penerima}
                          onChange={(e) => setFormData({ ...formData, pengirim_penerima: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="isi">Isi Surat</Label>
                        <Textarea 
                          id="isi" 
                          placeholder="Masukkan isi surat..." 
                          rows={4} 
                          value={formData.isi}
                          onChange={(e) => setFormData({ ...formData, isi: e.target.value })}
                        />
                      </div>
                      <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                          Batal
                        </Button>
                        <Button type="submit" disabled={createLetter.isPending}>
                          {createLetter.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                          Simpan Surat
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
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
              {loadingMasuk ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : filteredMasuk.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredMasuk.map((surat) => (
                    <LetterCard 
                      key={surat.id} 
                      id={surat.id}
                      nomorSurat={surat.nomor_surat}
                      perihal={surat.perihal}
                      tanggal={format(new Date(surat.tanggal), "dd MMMM yyyy")}
                      pengirim={surat.pengirim || undefined}
                      type="masuk"
                      status={surat.status}
                    />
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
              {loadingKeluar ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : filteredKeluar.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredKeluar.map((surat) => (
                    <LetterCard 
                      key={surat.id} 
                      id={surat.id}
                      nomorSurat={surat.nomor_surat}
                      perihal={surat.perihal}
                      tanggal={format(new Date(surat.tanggal), "dd MMMM yyyy")}
                      penerima={surat.penerima || undefined}
                      type="keluar"
                      status={surat.status}
                    />
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
