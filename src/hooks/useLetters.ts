import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export type LetterType = "masuk" | "keluar";
export type LetterStatus = "pending" | "proses" | "selesai";

export interface Letter {
  id: string;
  nomor_surat: string;
  perihal: string;
  tanggal: string;
  pengirim: string | null;
  penerima: string | null;
  isi: string | null;
  type: LetterType;
  status: LetterStatus;
  created_at: string;
  updated_at: string;
}

export interface CreateLetterInput {
  nomor_surat: string;
  perihal: string;
  tanggal?: string;
  pengirim?: string;
  penerima?: string;
  isi?: string;
  type: LetterType;
  status?: LetterStatus;
}

export const useLetters = (type?: LetterType) => {
  return useQuery({
    queryKey: ["letters", type],
    queryFn: async () => {
      let query = supabase
        .from("letters")
        .select("*")
        .order("created_at", { ascending: false });

      if (type) {
        query = query.eq("type", type);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data as Letter[];
    },
  });
};

export const useCreateLetter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateLetterInput) => {
      const { data, error } = await supabase
        .from("letters")
        .insert([input])
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data as Letter;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["letters"] });
      toast({
        title: "Surat berhasil dibuat!",
        description: "Surat baru telah ditambahkan ke dalam sistem.",
      });
    },
    onError: (error) => {
      toast({
        title: "Gagal membuat surat",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateLetter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Letter> & { id: string }) => {
      const { data, error } = await supabase
        .from("letters")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data as Letter;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["letters"] });
      toast({
        title: "Surat berhasil diperbarui!",
      });
    },
    onError: (error) => {
      toast({
        title: "Gagal memperbarui surat",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteLetter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("letters")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["letters"] });
      toast({
        title: "Surat berhasil dihapus!",
      });
    },
    onError: (error) => {
      toast({
        title: "Gagal menghapus surat",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
