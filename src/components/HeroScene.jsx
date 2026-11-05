import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { WhatsappLogo, SealCheck } from '@phosphor-icons/react';

const EASE = [0.22, 1, 0.36, 1];   // base curve: weighted, decelerates into place
const AMBIENT = [0.45, 0, 0.55, 1]; // symmetric curve for slow looping float

/**
 * HeroScene: the animated case-study panel.
 *  - dashboard card tilts toward the pointer (CSS 3D, spring-smoothed)
 *  - floating objects sit at different translateZ depths, so they parallax when the card tilts
 *  - the number counts up, the chart draws, the chat message "types"
 * Only transform and opacity animate. Tilt is off on touch devices; with reduced motion
 * everything renders in its final state.
 */
export default function HeroScene() {
  const reduce = useReducedMotion();
  const stage = useRef(null);
  const inView = useInView(stage, { once: true, amount: 0.3 });
  const [fine] = useState(() => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches);

  // Pointer tilt
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.6 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const onMove = (e) => {
    if (!fine || reduce) return;
    const r = stage.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  // Vanta NET (three.js) behind the card: loaded only on desktop pointers, after the page is idle,
  // and never with reduced motion or data saver. Three.js is a separate lazy chunk.
  const vantaEl = useRef(null);
  const [vantaReady, setVantaReady] = useState(false);
  useEffect(() => {
    const saveData = navigator.connection?.saveData;
    if (!fine || reduce || saveData || window.innerWidth < 1024) return;
    let effect = null; let io = null; let cancelled = false;
    const load = async () => {
      try {
        const [netMod, THREE] = await Promise.all([import('vanta/dist/vanta.net.min'), import('three')]);
        if (cancelled || !vantaEl.current) return;
        // The UMD bundle's export is wrapped differently by dev and production builds: find the function.
        const NET = [netMod, netMod.default, netMod.default?.default, window.VANTA?.NET].find((f) => typeof f === 'function');
        if (!NET) throw new Error('Vanta NET not found');
        effect = NET({
          el: vantaEl.current, THREE,
          mouseControls: false, touchControls: false, gyroControls: false,
          color: 0xE8A27C, backgroundColor: 0x181818,
          points: 7, maxDistance: 22, spacing: 22, showDots: true, scale: 1, scaleMobile: 1,
        });
        setVantaReady(true);
        // Pause the render loop while the card is off screen, resume when it returns.
        io = new IntersectionObserver(([e]) => {
          if (!effect) return;
          if (e.isIntersecting) { if (!effect.req) effect.animationLoop(); }
          else { window.cancelAnimationFrame(effect.req); effect.req = 0; }
        }, { threshold: 0 });
        io.observe(vantaEl.current);
      } catch (err) { console.warn('Hero background unavailable:', err?.message || err); /* the card is complete without it */ }
    };
    // Wait ~3s so Three.js parsing never competes with the first seconds of scrolling, then use an idle slot.
    let idle = 0;
    const wait = setTimeout(() => { idle = window.requestIdleCallback ? window.requestIdleCallback(load, { timeout: 2000 }) : setTimeout(load, 0); }, 3000);
    return () => {
      cancelled = true;
      clearTimeout(wait);
      if (idle) (window.cancelIdleCallback || clearTimeout)(idle);
      io?.disconnect();
      effect?.destroy();
    };
  }, [fine, reduce]);

  // Count-up for the headline number
  const count = useMotionValue(reduce ? 70 : 0);
  const shown = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(count, 70, { duration: 1.8, ease: EASE, delay: 0.3 });
    return () => c.stop();
  }, [inView, reduce, count]);

  // Chat: typing dots, then the message
  const [typed, setTyped] = useState(!!reduce);
  useEffect(() => {
    if (!inView || reduce) return;
    const t = setTimeout(() => setTyped(true), 2200);
    return () => clearTimeout(t);
  }, [inView, reduce]);

  const float = (delay, dist = 8) => (reduce ? {} : {
    animate: inView ? { y: [0, -dist, 0] } : undefined,
    transition: { duration: 6, repeat: Infinity, ease: AMBIENT, delay },
  });

  return (
    <div ref={stage} className="scene" onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        className="scene-tilt"
        style={{ rotateX: rotX, rotateY: rotY }}
        initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      >
        <div className="scene-card">
          <div ref={vantaEl} className={`scene-vanta${vantaReady ? ' is-ready' : ''}`} aria-hidden="true" />
          <div className="scene-main">
            <p className="kicker">Cas client · HNM Mining</p>
            <p className="big" aria-hidden="true">−<motion.span>{shown}</motion.span><span>%</span></p>
            <p className="sr-only">Moins 70 pour cent</p>
            <p className="caption-on-dark">Temps de reporting</p>
          </div>

          {/* Decorative mini dashboard */}
          <div className="scene-chart" aria-hidden="true">
            <div className="bars">
              {[0.45, 0.7, 0.55, 0.9, 0.62, 0.8].map((h, i) => (
                <motion.i key={i} style={{ height: `${h * 100}%`, originY: 1 }}
                  initial={reduce ? false : { scaleY: 0 }} animate={inView ? { scaleY: 1 } : undefined}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.5 + i * 0.08 }} />
              ))}
            </div>
            <svg viewBox="0 0 300 100" preserveAspectRatio="none">
              <motion.g style={{ originX: 0 }} initial={reduce ? false : { scaleX: 0 }} animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 1.4, ease: EASE, delay: 0.7 }}>
                <path d="M0,80 L40,72 L80,68 L120,55 L160,50 L200,32 L240,28 L300,18" fill="none" stroke="#E8A27C" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              </motion.g>
            </svg>
          </div>

          <ul className="scene-pills" aria-label="Garanties techniques">
            <li>OCDE · conforme</li>
            <li>Supabase · instance isolée</li>
            <li>Support en français · 24h</li>
          </ul>
        </div>

        {/* Floating objects at different depths */}
        <motion.div className="float float--chat" aria-hidden="true" style={{ z: 70 }}
          initial={reduce ? false : { opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}>
          <motion.div className="float-inner" {...float(0)}>
            <span className="wa-avatar"><WhatsappLogo size={20} weight="fill" /></span>
            {typed ? (
              <span className="chat-msg">Rapport de production envoyé</span>
            ) : (
              <span className="typing"><i /><i /><i /></span>
            )}
          </motion.div>
        </motion.div>

        <motion.div className="float float--chip" aria-hidden="true" style={{ z: 110 }}
          initial={reduce ? false : { opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 1.5 }}>
          <motion.div className="float-inner" {...float(1.2, 10)}>
            <SealCheck size={20} weight="fill" color="#2E7D5B" />
            <span>OCDE · conforme</span>
          </motion.div>
        </motion.div>

        <motion.div className="float float--disc" aria-hidden="true" style={{ z: 150 }}
          initial={reduce ? false : { opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.7, ease: EASE, delay: 1.8 }}>
          <motion.div className="disc"
            animate={reduce || !inView ? undefined : { rotateY: [-24, 24, -24], y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: AMBIENT }}>
            <span>48h</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
