import Reveal from './Reveal';

export default function SectionHead({ eyebrow, title, lead, align = 'center', as: H = 'h2', id }) {
  return (
    <Reveal className={`section-head${align === 'left' ? ' section-head--left' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H id={id}>{title}</H>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
