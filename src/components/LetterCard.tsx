import { Calendar, ArrowRight, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LetterCardProps {
  id: string;
  nomorSurat: string;
  perihal: string;
  tanggal: string;
  pengirim?: string;
  penerima?: string;
  type: "masuk" | "keluar";
  status: "pending" | "proses" | "selesai";
}

const LetterCard = ({ nomorSurat, perihal, tanggal, pengirim, penerima, type, status }: LetterCardProps) => {
  const statusColors = {
    pending: "bg-secondary/20 text-secondary-foreground border-secondary",
    proses: "bg-accent text-accent-foreground border-primary/30",
    selesai: "bg-primary/10 text-primary border-primary/30",
  };

  const statusLabels = {
    pending: "Menunggu",
    proses: "Diproses",
    selesai: "Selesai",
  };

  return (
    <div className="group p-5 bg-card rounded-xl border border-border hover:border-primary/30 shadow-sm hover:shadow-card transition-all duration-200">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${type === "masuk" ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary-foreground"}`}>
            {type === "masuk" ? <Mail className="w-5 h-5" /> : <Send className="w-5 h-5" />}
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {type === "masuk" ? "Surat Masuk" : "Surat Keluar"}
            </p>
            <p className="font-medium text-foreground">{nomorSurat}</p>
          </div>
        </div>
        <Badge className={`${statusColors[status]} border text-xs`}>
          {statusLabels[status]}
        </Badge>
      </div>

      <h4 className="font-semibold text-foreground mb-3 line-clamp-2">{perihal}</h4>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{tanggal}</span>
        </div>
        {pengirim && (
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Pengirim:</span> {pengirim}
          </p>
        )}
        {penerima && (
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Penerima:</span> {penerima}
          </p>
        )}
      </div>

      <Button variant="ghost" size="sm" className="w-full justify-between group-hover:bg-accent">
        Lihat Detail
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default LetterCard;
