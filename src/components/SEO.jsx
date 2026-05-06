import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  path = '/',
  keywords = ''
}) {
  const siteUrl = 'https://lubira-ai.netlify.app';
  const fullUrl = `${siteUrl}${path}`;
  const defaultTitle = "LUBIRA AI | Intelligence Artificielle à Lubumbashi, RDC";
  const defaultDescription = "LUBIRA AI — Cabinet de conseil en intelligence artificielle basé à Lubumbashi, RDC. Automatisation des processus, agents IA, conformité OCDE, bots WhatsApp. Livraison en 48h. Premier audit gratuit.";
  const defaultKeywords = "intelligence artificielle RDC, IA Congo, IA Lubumbashi, automatisation entreprise Congo, consultant IA Afrique, solutions IA RDC, agent IA Congo, transformation digitale RDC, automatisation processus Lubumbashi, chatbot WhatsApp Congo, conformité OCDE IA, intelligence artificielle Afrique, IA secteur minier Congo, digitalisation entreprise RDC, conseil stratégique IA Congo";

  const pageTitle = title ? `${title} | LUBIRA AI` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />

      {/* Twitter */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
}
