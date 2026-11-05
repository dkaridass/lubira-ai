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

# Lead alerts and analytics (optional, see docs/lead-tracking.md)
VITE_LEAD_EMAIL=you@example.com
VITE_PLAUSIBLE_DOMAIN=your-domain.com

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

## 📈 Lead tracking

Every form submission is saved to Supabase and emailed to you in parallel, and tagged with the campaign it came from
(`?utm_source=linkedin&utm_campaign=post23`). Setup steps and ready-made tracked links: [docs/lead-tracking.md](docs/lead-tracking.md).

## 🗄️ Database Schema

The contact form writes directly to a `leads` table in Supabase. The schema is defined in `supabase-schema.sql`:

- `id` (UUID)
- `nom` (Text)
- `entreprise` (Text)
- `telephone` (Text)
- `email` (Text)
- `secteur` (Text)
- `besoin` (Text)
- `services_demandes` (Text)
- `budget` (Text)
- `status` (Text) — Default: 'nouveau'
- `source` (Text) — Default: 'website'
- `created_at` (Timestamp)

Row Level Security (RLS) is enabled to allow anonymous inserts but restrict reads/updates to authenticated admins only.

## 🎨 Design System

Calm, Apple-inspired, defined as tokens in `src/index.css`.

- **Typography**: Geist, one family, on the Tailwind type scale with named text styles (`heading-1` to `heading-6`, `title`, `body`, `caption`).
- **Colors**: neutral base (white, #F5F5F7, near black #1D1D1F) with a single copper accent (#A8542C, AA contrast). Dark surfaces use only #181818, #272727 and #313131.
- **Shape and depth**: radii 12 / 16 / 24 / 32, soft shadows, spacing on a fixed set (0 to 96px).
- **Motion**: base curve `cubic-bezier(.22, 1, .36, 1)`; only transform and opacity animate; everything respects `prefers-reduced-motion`. Smooth scroll (Lenis), scroll storytelling and title reveals (GSAP), the hero network (Vanta) and two React Bits components are attached after load, so they stay off the first paint. Licences: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## 📝 License

Proprietary — All rights reserved to LUBIRA AI.
