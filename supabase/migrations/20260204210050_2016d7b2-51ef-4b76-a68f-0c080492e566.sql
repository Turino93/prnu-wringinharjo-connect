-- Create enum for letter type
CREATE TYPE public.letter_type AS ENUM ('masuk', 'keluar');

-- Create enum for letter status
CREATE TYPE public.letter_status AS ENUM ('pending', 'proses', 'selesai');

-- Create letters table
CREATE TABLE public.letters (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    nomor_surat TEXT NOT NULL,
    perihal TEXT NOT NULL,
    tanggal DATE NOT NULL DEFAULT CURRENT_DATE,
    pengirim TEXT,
    penerima TEXT,
    isi TEXT,
    type letter_type NOT NULL,
    status letter_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.letters ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (since this is an organizational system, all authenticated users can view)
CREATE POLICY "Anyone can view letters"
ON public.letters
FOR SELECT
TO anon, authenticated
USING (true);

-- Create policy for inserting letters (public access for now, can be restricted later with auth)
CREATE POLICY "Anyone can create letters"
ON public.letters
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy for updating letters
CREATE POLICY "Anyone can update letters"
ON public.letters
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Create policy for deleting letters
CREATE POLICY "Anyone can delete letters"
ON public.letters
FOR DELETE
TO anon, authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_letters_updated_at
BEFORE UPDATE ON public.letters
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add comment for documentation
COMMENT ON TABLE public.letters IS 'Stores incoming and outgoing letters for PRNU Wringinharjo';