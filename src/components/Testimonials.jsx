import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Rahman',
    role: 'Member 4 tahun',
    rating: 5,
    review: 'Dulu badanku gendut, sekarang udah langsing. Trainer di sini sabar banget ngajarin. Tempatnya bersih dan alat-alatnya lengkap. Worth it!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&q=80&fit=crop',
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    role: 'Member 1 tahun',
    rating: 5,
    review: 'Kolam renangnya aman banget untuk anak-anak. Pegawainya ramah, fasilitasnya bagus. Keluarga saya selalu excited hari Sabtu untuk kesini.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&q=80&fit=crop',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Pemain Badminton',
    rating: 5,
    review: 'Lapangan badminton di sini terbaik yang pernah saya main. Terang, luas, dan maintainnya teratur. Sering ngadain turnamen juga, seru!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&q=80&fit=crop',
  },
  {
    id: 4,
    name: 'Maya Sari',
    role: 'Personal Trainer',
    rating: 5,
    review: 'Sebagai trainer, aku approve banget tempat ini. Peralatan standard internasional, bersih, AC dingin. Member puas, trainer juga puas!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&q=80&fit=crop',
  },
  {
    id: 5,
    name: 'Rizky Pratama',
    role: 'Pemain Tenis Profesional',
    rating: 5,
    review: 'Court tennisnya super mantap. Permukaannya bagus, maintenance teratur, dan ada lights untuk main malam. Best spot di area ini!',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrentIndex(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrentIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0e0600 0%, #2a0e00 50%, #1a0a00 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
        .test-serif { font-family: 'Bebas Neue', Impact, sans-serif; letter-spacing: 0.02em; }
        .test-sans  { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Orange vertical accent line */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[3px] z-30 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)' }}
      />

      <div className="relative z-10 pt-24 pb-16 px-5 lg:px-10">

        {/* Section label */}
        <motion.div
          className="test-sans flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-orange-400">
            Member Testimonials
          </span>
        </motion.div>

        {/* Two-column: big heading left + body text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.h2
            className="test-serif text-white leading-none"
            style={{ fontSize: 'clamp(48px, 7vw, 110px)', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span style={{ opacity: 0.7 }}>What Our </span>
            <span>Members</span>
            <br />
            <span style={{ opacity: 0.7 }}>Say</span>
          </motion.h2>

          <motion.div
            className="test-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <span className="text-orange-400/60 text-xs mt-1 select-none" style={{ fontFamily: 'monospace' }}>[↓]</span>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Don't just take our word for it. Hear from our satisfied members about their experience at Sports Club Pondok Tjandra Indah.
              </p>
            </div>
            <div className="h-px bg-white/10 mt-4" />
          </motion.div>
        </div>

        {/* Testimonial card — editorial sharp */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-px bg-white/[0.06]"
          >
            {/* Left: quote + author */}
            <div className="bg-[#0e0600] p-8 lg:p-12 flex flex-col gap-6">
              {/* Stars */}
              <div className="flex gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="test-sans text-white/90 text-lg lg:text-2xl font-light leading-relaxed">
                  "{current.review}"
                </p>
              </blockquote>

              <div className="h-px bg-white/10" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0" style={{ borderRadius: '2px' }}>
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'saturate(0.6)' }}
                  />
                </div>
                <div>
                  <p className="test-sans text-white font-semibold text-sm">{current.name}</p>
                  <p className="test-sans text-orange-400/70 text-[10px] font-medium tracking-[0.18em] uppercase">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Right: full photo */}
            <div className="relative overflow-hidden hidden lg:block" style={{ minHeight: '380px' }}>
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.55) brightness(0.85)' }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(14,6,0,0.6) 0%, transparent 55%)' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-8">
          <motion.button
            onClick={prev}
            className="test-sans flex items-center gap-2 text-white/40 hover:text-white text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300"
            whileHover={{ x: -2 }}
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </motion.button>

          <div className="flex items-center gap-4">
            <span
              className="text-white/25 text-[10px] tracking-widest select-none"
              style={{ fontFamily: 'monospace' }}
            >
              {String(currentIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === currentIndex ? '24px' : '6px',
                    height: '2px',
                    background: i === currentIndex ? '#f97316' : 'rgba(255,255,255,0.18)',
                    borderRadius: 0,
                  }}
                />
              ))}
            </div>
          </div>

          <motion.button
            onClick={next}
            className="test-sans flex items-center gap-2 text-white/40 hover:text-white text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300"
            whileHover={{ x: 2 }}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Editorial bottom watermark */}
      <div className="relative z-10 overflow-hidden pb-32 mt-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2
            className="test-serif text-white leading-none px-5 lg:px-10 select-none"
            style={{ fontSize: 'clamp(60px, 11vw, 170px)', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 0.92, opacity: 0.08 }}
          >
            Testimonials
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
