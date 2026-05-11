import { motion } from 'framer-motion';
import { useState } from 'react';

const marqueeText = 'FITNESS • PERFORMANCE • STRENGTH • SWIMMING • BADMINTON • TENNIS • TRAIN HARD • NO LIMITS • SPORTS CLUB PTI';

const Marquee = () => {
  const [hovered, setHovered] = useState(false);
  const duration = hovered ? 18 : 28;

  return (
    <motion.section
      className="relative overflow-hidden bg-[#0b0803] py-8 sm:py-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <style>{`
        .marquee-text {
          color: rgba(255, 255, 255, 0.18);
          text-shadow: 0 0 28px rgba(249, 115, 22, 0.16);
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0b0803] to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0803] to-transparent opacity-80" />

      <div className="relative z-10" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="relative overflow-hidden rounded-none bg-black/20 py-6 shadow-[0_26px_90px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/12 via-transparent to-orange-500/08 opacity-80" />
          <div className="relative z-10">
            <motion.div
              className="flex whitespace-nowrap items-center gap-16 marquee-text"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, duration, ease: 'linear' } }}
            >
              <span className="uppercase tracking-[0.38em] font-black text-[clamp(1.5rem,3vw,3rem)]">
                {marqueeText}
              </span>
              <span className="uppercase tracking-[0.38em] font-black text-[clamp(1.5rem,3vw,3rem)]">
                {marqueeText}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Marquee;
