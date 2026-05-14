import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────
   Shared background elements
───────────────────────────────────────── */
const BG = () => {
  const [videoFailed, setVideoFailed] = useState(false);
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {videoFailed ? (
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=90"
            alt="Athlete training"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.65) brightness(0.9)' }}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.65) brightness(0.9)' }}
            onError={() => setVideoFailed(true)}
          >
            <source
              src="https://www.pexels.com/download/video/33261218/?fps=25.0&h=720&w=1280"
              type="video/mp4"
            />
          </video>
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 15%, rgba(50,14,0,0.5) 50%, rgba(20,6,0,0.93) 80%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,2,0,0.97) 0%, rgba(5,2,0,0.2) 40%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,5,0,0.55) 0%, transparent 20%)' }} />
      </motion.div>
      <motion.div
        className="absolute top-0 bottom-0 z-30 pointer-events-none"
        style={{ right: 0, width: '3px', background: 'linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)' }}
        initial={{ scaleY: 0, originY: '0%' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
      />
    </>
  );
};

/* ─────────────────────────────────────────
   Desktop Hero
───────────────────────────────────────── */
const HeroDesktop = () => (
  <section
    id="home"
    className="relative w-full min-h-screen flex-col overflow-hidden hidden lg:flex"
    style={{ background: 'linear-gradient(160deg, #1a0a00 0%, #3d1500 40%, #7c2d00 100%)' }}
  >
    <BG />

    {/* Navbar spacer */}
    <div className="relative z-20 h-24 shrink-0" />

    {/* Body text — top right, grows to fill */}
    <div className="relative z-20 flex-1 flex items-start justify-end px-10 pt-4">
      <motion.div
        className="hero-sans max-w-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
        <div className="flex items-start gap-3 mb-4">
          <span className="text-orange-400/60 text-xs mt-1 select-none shrink-0" style={{ fontFamily: 'monospace' }}>
            [↓]
          </span>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            Redefine your potential in a space where performance and wellness unite for an exceptional fitness experience.
            <br /><br />
            <span className="text-white font-medium">Sports Club Pondok Tjandra Indah</span>
          </p>
        </div>
        <div className="h-px bg-white/10 my-4" />
        <motion.a
          href="#facilities"
          className="hero-sans inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-orange-400 hover:text-white transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          Explore Facilities
          <ArrowUpRight className="w-3 h-3" />
        </motion.a>
      </motion.div>
    </div>

    {/* Headline — bottom */}
    <div className="relative z-20 shrink-0">
      <motion.div
        className="overflow-hidden"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1
          className="hero-serif text-white leading-none px-10 select-none"
          style={{ fontSize: 'clamp(80px, 12.5vw, 190px)', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 0.95 }}
        >
          <div style={{ opacity: 0.7 }}>Level Up</div>
          <div>Your Fitness Journey</div>
        </h1>
      </motion.div>
      <div className="h-8 bg-black" />
    </div>
  </section>
);

/* ─────────────────────────────────────────
   Mobile Hero
───────────────────────────────────────── */
const HeroMobile = () => (
  <section
    id="home"
    className="relative w-full overflow-hidden flex flex-col lg:hidden"
    style={{ height: '100svh', background: 'linear-gradient(160deg, #1a0a00 0%, #3d1500 40%, #7c2d00 100%)' }}
  >
    <BG />

    {/* Navbar spacer */}
    <div className="relative z-20 h-20 shrink-0" />

    {/* Top label */}
    <motion.div
      className="relative z-20 px-5 flex items-center gap-3 shrink-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <div className="h-px w-6 bg-orange-500" />
      <span className="hero-sans text-[10px] font-medium tracking-[0.22em] uppercase text-orange-400">
        Welcome to Excellence
      </span>
    </motion.div>

    {/* Centered content area */}
    <div className="flex-1 flex items-center justify-center">
      {/* Headline */}
      <motion.div
        className="relative z-20 px-5 shrink-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="hero-serif text-white leading-none select-none text-center"
          style={{ fontSize: 'clamp(52px, 14vw, 90px)', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 0.95 }}
        >
          <div style={{ opacity: 0.6 }}>Train</div>
          <div>Like An</div>
          <div>Athlete.</div>
        </h1>
      </motion.div>
    </div>

    {/* Bottom panel — solid, no gap */}
    <motion.div
      className="relative z-20 shrink-0"
      style={{ background: 'linear-gradient(to top, #0e0600 70%, transparent 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <div className="px-5 pt-8 pb-0">
        <div className="h-px bg-white/20 mb-4" />
        <div className="flex items-start gap-3 mb-4">
          <span className="text-orange-400/70 text-xs mt-0.5 select-none shrink-0" style={{ fontFamily: 'monospace' }}>[↓]</span>
          <p className="hero-sans text-white/80 text-xs leading-relaxed">
            Redefine your potential in a space where performance and wellness unite.{' '}
            <span className="text-white font-semibold">Sports Club Pondok Tjandra Indah</span>
          </p>
        </div>
        <a
          href="#facilities"
          className="hero-sans inline-flex items-center gap-2 bg-orange-500 text-white text-[11px] font-medium tracking-[0.18em] uppercase px-5 py-3 w-full justify-center"
          style={{ borderRadius: '2px' }}
        >
          Explore Facilities
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
      <div className="h-8 bg-black mt-4" />
    </motion.div>
  </section>
);

/* ─────────────────────────────────────────
   Hero — renders correct version per breakpoint
───────────────────────────────────────── */
const Hero = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
      .hero-serif { font-family: 'Bebas Neue', Impact, sans-serif; }
      .hero-sans  { font-family: 'Outfit', sans-serif; }
    `}</style>
    <HeroDesktop />
    <HeroMobile />
  </>
);

export default Hero;