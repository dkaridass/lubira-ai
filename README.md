# LUBIRA AI — Website

This is the official website for LUBIRA AI, an AI consulting company based in Lubumbashi, DRC. 
It features a complete "Swiss editorial" design system, responsive single-page architecture, and Supabase integration for lead generation.

## 🚀 Technologies

- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database / Backend**: Supabase
- **Hosting**: Vercel / Netlify

## ⚙️ Environment Variables

To run this project locally or deploy it, you need to set up the following environment variables. Create a `.env` file in the root of the project:

```env
# Supabase Configuration (Required for the contact form)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

# Contact Information
VITE_WHATSAPP_NUMBER=243995974770
VITE_CONTACT_EMAIL=contact@lubira.ai

# Email API (Optional, for triggering emails via edge functions or client)
VITE_RESEND_API_KEY=your_resend_key
```

## 📦 Setup Instructions

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Database Setup (Supabase)**
   - Create a new project on [Supabase](https://supabase.com).
   - Go to the SQL Editor and run the SQL script found in `supabase-schema.sql`.
   - Copy your Project URL and anon key into the `.env` file.

3. **Development Server**
   ```bash
   npm run dev
   ```

4. **Production Build**
   ```bash
   npm run build
   ```

## 🗄️ Database Schema

The contact form writes directly to a `leads` table in Supabase. The schema is defined in `supabase-schema.sql`:

- `id` (UUID)
- `nom` (Text)
- `entreprise` (Text)
- `telephone` (Text)
- `email` (Text)
- `secteur` (Text)
- `besoin` (Text)
- `status` (Text) — Default: 'nouveau'
- `source` (Text) — Default: 'website'
- `created_at` (Timestamp)

Row Level Security (RLS) is enabled to allow anonymous inserts but restrict reads/updates to authenticated admins only.

## 🎨 Design System

- **Typography**: Playfair Display (Headings), Inter (Body). Fluid typography using clamp().
- **Colors**: Pure White (#FFFFFF), Near Black (#0A0A0A), Brand Red (#C4341A).
- **Style**: Strict editorial. No gradients, no rounded corners (except the WhatsApp button), no box shadows on cards.

## 📝 License

Proprietary — All rights reserved to LUBIRA AI.
