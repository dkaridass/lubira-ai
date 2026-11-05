import ScrollVelocity from '../reactbits/ScrollVelocity';

// Sectors served: the same list the contact form offers.
const ROW_1 = ['Mines et Ressources', 'Construction et BTP', 'Banque et Finance', 'Assurance et Courtage'];
const ROW_2 = ['Agriculture et Agro-industrie', 'ONG et Organisations', 'Commerce et Distribution', 'Cabinet Professionnel'];

/**
 * Sector marquee (React Bits ScrollVelocity). Decorative: the rows drift on their own and
 * speed up with scroll. The sectors are also listed once for screen readers.
 */
export default function SectorBand() {
  return (
    <section className="band" aria-label="Secteurs accompagnés">
      <p className="sr-only">Secteurs accompagnés : {[...ROW_1, ...ROW_2].join(', ')}.</p>
      <div aria-hidden="true">
        <ScrollVelocity
          texts={[ROW_1.join('   ·   '), ROW_2.join('   ·   ')]}
          velocity={45}
          numCopies={4}
          separator="   ·   "
          parallaxClassName="marquee"
          scrollerClassName="marquee-track"
          outlineAlternate
        />
      </div>
    </section>
  );
}
