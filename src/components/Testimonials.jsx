import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rahman',
      role: 'Regular Member',
      rating: 5,
      review: 'Exceptional facilities with world-class equipment. The trainers are highly professional and the environment is perfect for serious fitness enthusiasts. Highly recommended!',
      avatar: 'AR',
      gradient: 'from-primary to-secondary'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'Gold Member',
      rating: 5,
      review: 'Perfect family destination! My kids absolutely love the swimming pool area, and I enjoy the comprehensive gym facilities. The staff is incredibly friendly and attentive.',
      avatar: 'SN',
      gradient: 'from-secondary to-primary'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Tennis Enthusiast',
      rating: 5,
      review: 'The tennis courts are professionally maintained with excellent lighting for evening games. The surface quality is comparable to international standards.',
      avatar: 'BS',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Maya Sari',
      role: 'Fitness Trainer',
      rating: 5,
      review: 'As a professional trainer, I appreciate the quality equipment and clean environment. This club sets the standard for premium fitness facilities in the region.',
      avatar: 'MS',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      name: 'Rizky Pratama',
      role: 'Badminton Player',
      rating: 5,
      review: 'The indoor badminton courts are fantastic with premium lighting and professional flooring. Perfect for competitive play and training sessions.',
      avatar: 'RP',
      gradient: 'from-purple-500 to-pink-500'
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial.id}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-12 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5 rounded-2xl`}></div>

            {/* Quote Icon */}
            <div className="relative z-10 flex justify-center mb-8">
              <div className={`p-4 bg-gradient-to-br ${currentTestimonial.gradient} rounded-2xl`}>
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Rating */}
            <div className="relative z-10 flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                </motion.div>
              ))}
            </div>

            {/* Review */}
            <blockquote className="relative z-10 text-center mb-8">
              <p className="test-sans text-xl sm:text-2xl text-white font-light leading-relaxed italic">
                "{currentTestimonial.review}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="relative z-10 text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full text-white font-bold text-xl mb-4`}>
                {currentTestimonial.avatar}
              </div>
              <h4 className="test-sans text-xl font-bold text-white mb-1">{currentTestimonial.name}</h4>
              <p className="test-sans text-white/60">{currentTestimonial.role}</p>
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

        {/* Before vs After Member Experiences */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Section label */}
          <motion.div
            className="test-sans flex items-center gap-3 mb-12 justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-orange-400">
              Before vs After
            </span>
            <div className="h-px w-8 bg-orange-500" />
          </motion.div>

          {/* Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
                quote: 'Turun 12kg dalam 4 bulan',
                name: 'Sarah Putri',
                transformation: 'Dari 78kg menjadi 66kg dengan program gym rutin di Sports Club PTI'
              },
              {
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
                quote: 'Sekarang rutin olahraga tiap pagi',
                name: 'Ahmad Rahman',
                transformation: 'Awalnya malas berolahraga menjadi aktif dan disiplin'
              },
              {
                image: 'https://plus.unsplash.com/premium_photo-1664910607414-6e5eb86a9dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
                quote: 'Lebih percaya diri setelah join',
                name: 'Maya Sari',
                transformation: 'Dari minder dengan tubuhnya menjadi confident dan energik'
              }
            ].map((experience, index) => (
              <motion.div
                key={experience.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={`${experience.name} transformation`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <blockquote className="test-sans text-lg font-medium text-white mb-3 italic">
                    "{experience.quote}"
                  </blockquote>

                  <div className="mb-4">
                    <h4 className="test-sans text-white font-semibold text-base mb-1">
                      {experience.name}
                    </h4>
                    <p className="test-sans text-white/70 text-sm leading-relaxed">
                      {experience.transformation}
                    </p>
                  </div>

                  {/* Transformation indicator */}
                  <div className="flex items-center gap-2">
                    <div className="h-px w-4 bg-orange-500" />
                    <span className="test-sans text-xs font-medium text-orange-400 uppercase tracking-wide">
                      Real Results
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;