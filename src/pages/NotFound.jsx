import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page introuvable" description="Cette page n'existe pas ou a été déplacée." path="/404" />
      <section className="notfound">
        <div className="container">
          <p className="code" aria-hidden="true">404</p>
          <h1 style={{ marginTop: 16 }}>Cette page est introuvable.</h1>
          <p className="lead" style={{ margin: '16px auto 0', maxWidth: 480 }}>
            Le lien est peut-être incorrect, ou la page a été déplacée. Revenez à l&apos;accueil ou demandez votre audit gratuit.
          </p>
          <div className="ctas" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <Link to="/" className="btn btn--primary">Retour à l&apos;accueil <ArrowRight size={18} className="arrow" aria-hidden="true" /></Link>
            <Link to="/contact" className="btn btn--secondary">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
