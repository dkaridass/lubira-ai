import Reveal from './Reveal';

/**
 * Section heading. Eyebrow and lead fade up. The title is a plain <h2>: the line-by-line reveal
 * (GSAP SplitText) is added after load by <Choreography />, so GSAP stays out of the first paint.
 */
export default function SectionHead({ eyebrow, title, lead, align = 'center', as: H = 'h2', id }) {
  return (
    <div className={`section-head${align === 'left' ? ' section-head--left' : ''}`}>
      {eyebrow && <Reveal as="span" className="eyebrow">{eyebrow}</Reveal>}
      <H id={id}>{title}</H>
      {lead && <Reveal as="p" className="lead" delay={0.15}>{lead}</Reveal>}
    </div>
  );
}
