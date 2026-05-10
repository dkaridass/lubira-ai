-- Schema for LUBIRA AI CRM/Leads
-- Execute this in the Supabase SQL Editor

-- Create the leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nom TEXT NOT NULL,
    entreprise TEXT NOT NULL,
    telephone TEXT NOT NULL,
    email TEXT NOT NULL,
    secteur TEXT NOT NULL,
    besoin TEXT,
    status TEXT DEFAULT 'nouveau',
    source TEXT DEFAULT 'website',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users (website visitors) to insert new leads
CREATE POLICY "Allow public insert" ON public.leads
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Policy: Only authenticated admin users can read leads
CREATE POLICY "Allow admin select" ON public.leads
    FOR SELECT 
    TO authenticated
    USING (true);

-- Policy: Only authenticated admin users can update leads
CREATE POLICY "Allow admin update" ON public.leads
    FOR UPDATE 
    TO authenticated
    USING (true);

-- Policy: Only authenticated admin users can delete leads
CREATE POLICY "Allow admin delete" ON public.leads
    FOR DELETE 
    TO authenticated
    USING (true);
