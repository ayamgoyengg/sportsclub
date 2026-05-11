import { motion } from 'framer-motion';
import { Dumbbell, Users, Heart, Award, Zap, Shield, Waves } from 'lucide-react';

const highlights = [
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    description: 'World-class fitness equipment, well-maintained and regularly updated to support your best performance.',
  },
  {
    icon: Shield,
    title: 'Certified Trainers',
    description: 'Certified professional trainers ready to help you hit your fitness goals with a tailored program.',
  },
  {
    icon: Heart,
    title: 'Family Friendly',
    description: 'A welcoming environment built for the whole family — from kids to adults, everyone fits in.',
  },
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Clean, well-maintained pool with dedicated lanes for children and adults, supervised by trained lifeguards.',
  },
  {
    icon: Users,
    title: 'Active Community',
    description: 'Join thousands of active members who motivate and support each other on their fitness journey.',
  },
  {
    icon: Zap,
    title: 'Variety Classes',
    description: 'A wide range of fitness classes — yoga, zumba, HIIT, and more — led by experienced instructors.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0e0600 0%, #2a0e00 50%, #1a0a00 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
        .about-serif { font-family: 'Bebas Neue', Impact, sans-serif; letter-spacing: 0.02em; }
        .about-sans  { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Noise texture — same as Hero */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Orange vertical accent line — right edge, same as Hero */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[3px] z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)',
        }}
      />

      {/* ── Section top: label + body text — mirroring Hero right-side block ── */}
      <div className="relative z-10 pt-24 pb-16 px-5 lg:px-10">

        {/* Label row */}
        <motion.div
          className="about-sans flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-orange-400">
            About Our Club
          </span>
        </motion.div>

        {/* Two-column: big heading left + body text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

          {/* Left — large serif heading */}
          <motion.h2
            className="about-serif text-white leading-none"
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
            <span style={{ opacity: 0.7 }}>Where </span>
            <span>Excellence</span>
            <br />
            <span
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #f97316, #ea580c)',
                backgroundClip: 'text',
              }}
            >
              Meets Fitness
            </span>
          </motion.h2>

          {/* Right — body text block, same bracket style as Hero */}
          <motion.div
            className="about-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3 mb-6">
              <span
                className="text-orange-400/60 text-xs mt-1 select-none"
                style={{ fontFamily: 'monospace' }}
              >
                [↓]
              </span>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Experience premium sports facilities in a luxurious and modern environment designed for your ultimate fitness journey. Our club combines world-class amenities with exceptional service to create an unparalleled experience.
                <br /><br />
                <span className="text-white font-medium">Sports Club Pondok Tjandra Indah</span>
              </p>
            </div>
            <div className="h-px bg-white/10 mb-6" />

            {/* Image — sits under body text on right column */}
            <div className="relative rounded-sm overflow-hidden" style={{ height: '280px' }}>
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Premium Gym Facilities"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.7) brightness(0.85)' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(10,4,0,0.7) 0%, transparent 60%)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/8 mb-20" />

        {/* ── Highlights grid ── */}
        <motion.div
          className="about-sans mb-8 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-orange-400">
            Why Choose Us
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="about-sans group relative bg-transparent hover:bg-white/[0.04] transition-colors duration-300 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="mb-5">
                <item.icon
                  className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3
                className="about-serif text-white mb-3 group-hover:text-orange-100 transition-colors duration-300"
                style={{
                  fontSize: '22px',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                {item.title}
              </h3>

              {/* Body */}
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {item.description}
              </p>

              {/* Bottom line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-orange-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Massive editorial bottom headline — same as Hero ── */}
      <div className="relative z-10 overflow-hidden pb-32">
        <motion.div
          className="mt-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2
            className="about-serif text-white leading-none px-5 lg:px-10 select-none"
            style={{
              fontSize: 'clamp(60px, 11vw, 170px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 0.92,
              opacity: 0.08,
            }}
          >
            About Our Club
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default About;