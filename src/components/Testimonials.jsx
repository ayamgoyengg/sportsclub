import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rahman',
      role: 'Member 4 tahun',
      rating: 5,
      review: 'Dulu badanku gendut, sekarang udah langsing. Trainer di sini sabar banget ngajarin. Tempatnya bersih dan alat-alatnya lengkap. Worth it!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&q=80&fit=crop',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'Member 1 tahun',
      rating: 5,
      review: 'Kolam renangnya aman banget untuk anak-anak. Pegawainya ramah, fasilitasnya bagus. Keluarga saya selalu excited hari Sabtu untuk kesini.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&q=80&fit=crop',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Pemain Badminton',
      rating: 5,
      review: 'Lapangan badminton di sini terbaik yang pernah saya main. Terang, luas, dan maintainnya teratur. Sering ngadain turnamen juga, seru!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&q=80&fit=crop',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Maya Sari',
      role: 'Personal Trainer',
      rating: 5,
      review: 'Sebagai trainer, aku approve banget tempat ini. Peralatan standard internasional, bersih, AC dingin. Member puas, trainer juga puas!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&q=80&fit=crop',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      name: 'Rizky Pratama',
      role: 'Pemain Tenis Profesional',
      rating: 5,
      review: 'Court tennisnya super mantap. Permukaannya bagus, maintenance teratur, dan ada lights untuk main malam. Best spot di area ini!',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

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

      {/* Noise texture — same as Hero/About/Facilities */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Orange vertical accent line — same as Hero/About/Facilities */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[3px] z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)',
        }}
      />

      <div className="relative z-10 pt-24 pb-16 px-5 lg:px-10">

        {/* ── Section label ── */}
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

        {/* Two-column: big heading left + description right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-4">

          {/* Left — large serif heading */}
          <motion.h2
            className="test-serif text-white leading-none"
            style={{
              fontSize: 'clamp(48px, 7vw, 110px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 0.95,
            }}
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

          {/* Right — description */}
          <motion.div
            className="test-sans text-white/80 leading-relaxed"
            style={{ fontSize: '18px', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              Don't just take our word for it. Hear from our satisfied members about their experience at Sports Club Pondok Tjandra Indah.
            </p>
          </motion.div>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={currentTestimonial.id}
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background with gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-10`}
            />
            
            {/* Main Content - Flexbox layout */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-8 sm:p-12 bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Left: Member Photo */}
              <motion.div
                className="flex justify-center md:justify-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full max-w-xs aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Right: Review Content */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Quote */}
                <blockquote className="mb-6">
                  <p className="test-sans text-lg sm:text-2xl text-white font-light leading-relaxed">
                    "{currentTestimonial.review}"
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-orange-500 to-transparent w-12 mb-6" />

                {/* Author Info */}
                <div>
                  <h4 className="test-sans text-lg font-bold text-white mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="test-sans text-white/70 text-sm">
                    {currentTestimonial.role}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;