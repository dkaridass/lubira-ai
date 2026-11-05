# Lead tracking: setup and tracked links

## What happens when someone fills the form

1. The lead is saved in Supabase (`leads` table) **and** emailed to you at the same moment, through formsubmit.co.
2. The visitor sees success if at least one of the two worked. A lead is lost only if both fail, and then the visitor sees an error that points to WhatsApp.
3. The lead's `source` column records where the visit came from, for example `website:linkedin/post23`.

## One-time setup (about 10 minutes)

1. **Supabase: add the two missing columns.** In the Supabase SQL editor run:
   ```sql
   ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS services_demandes TEXT;
   ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS budget TEXT;
   ```
2. **Netlify: set the environment variables** (Site settings, Environment variables), then redeploy:

   | Variable | Value | Needed for |
   |---|---|---|
   | `VITE_SUPABASE_URL` | your Supabase project URL | saving leads |
   | `VITE_SUPABASE_ANON_KEY` | your Supabase anon key | saving leads |
   | `VITE_LEAD_EMAIL` | the inbox for alerts (optional; defaults to the address already used by `/contact`) | email alerts |
   | `VITE_PLAUSIBLE_DOMAIN` | `lubira-ai.netlify.app` (or your own domain) | analytics (optional) |

   If the Supabase variables are missing, leads still arrive by email, but nothing is saved in the database.
3. **formsubmit.co: confirm the inbox once.** The first alert sent to a new address contains an activation link.
   Click it, or alerts will not be delivered. Send a test lead from the website after deploying.
4. **Plausible (optional).** Create a site at plausible.io for the same domain. Then add these goals in
   Plausible (Site settings, Goals, Custom event): `lead_submitted`, `whatsapp_click`, `audit_cta_click`.
   Without `VITE_PLAUSIBLE_DOMAIN` no tracker is loaded at all.

## Tracked links for LinkedIn

Add `?utm_source=...&utm_campaign=...` to any link you share. The tag is remembered for the whole visit, even
if the person browses other pages first, and is saved with the lead.

| Where you share it | Link |
|---|---|
| A LinkedIn post (change `post23` to the post number) | `https://lubira-ai.netlify.app/?utm_source=linkedin&utm_medium=social&utm_campaign=post23` |
| First comment under a post | `https://lubira-ai.netlify.app/?utm_source=linkedin&utm_medium=comment&utm_campaign=post23` |
| LinkedIn profile, Featured section | `https://lubira-ai.netlify.app/?utm_source=linkedin&utm_medium=profile&utm_campaign=featured` |
| LinkedIn DM or connection message | `https://lubira-ai.netlify.app/?utm_source=linkedin&utm_medium=dm&utm_campaign=outreach` |
| WhatsApp status or broadcast | `https://lubira-ai.netlify.app/?utm_source=whatsapp&utm_medium=social&utm_campaign=status` |
| Email signature | `https://lubira-ai.netlify.app/?utm_source=email&utm_medium=signature&utm_campaign=darius` |

Rules: lowercase, letters, digits, `-`, `_` and `.` only (anything else is stripped).

## Reading the results

- **Which post or channel produced leads:** in Supabase, open the `leads` table and read the `source` column
  (`website` means no tag, a direct visit).
- **What visitors do before they convert:** Plausible shows visits per campaign and the three goals above.
  The `where` property tells you which button was used (`hero`, `header`, `floating_button`, `footer`,
  `process_band`, `contact_section`, `home_form`, `contact_page`).
