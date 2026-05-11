import { motion } from 'framer-motion';
import { Dumbbell, Waves, Zap, Target, ArrowUpRight } from 'lucide-react';

const facilities = [
  {
    icon: Dumbbell,
    title: 'Premium Gym',
    subtitle: 'Elite Fitness Experience',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    pricing: [
      { type: 'Student Membership', price: 'Rp340.000', period: '/month' },
      { type: 'Gold Membership', price: 'Rp400.000', period: '/month', popular: true },
    ],
    features: ['Weight Training Zone', 'Cardio Area', 'Recovery Zone', 'Personal Training', 'Nutrition Guidance'],
    whatsappMessage: 'Halo min, saya ingin bertanya mengenai membership Gym',
  },
  {
    icon: Waves,
    title: 'Swimming Pool',
    subtitle: 'Crystal Clear Paradise',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800&q=80',
    pricing: [
      { type: 'Kids', price: 'Rp35.000', period: '/visit' },
      { type: 'Adult', price: 'Rp50.000', period: '/visit' },
    ],
    features: ['Temperature Controlled', 'Kids Play Area', 'Water Slides', 'Life Guards', 'Changing Rooms'],
    whatsappMessage: 'Halo min, saya ingin bertanya mengenai tiket Renang',
  },
  {
    icon: Zap,
    title: 'Badminton Court',
    subtitle: 'Professional Indoor Courts',
    image: 'https://media.istockphoto.com/id/1192023529/photo/asian-badminton-player-is-hitting-in-court.webp?a=1&b=1&s=612x612&w=0&k=20&c=oGIRBPR1-s0Jc58WmCOoyW56bcGm2J_je-JiabHB8_o=',
    pricing: [
      { type: 'Court Rental', price: 'Rp60.000', period: '/hour' },
    ],
    features: ['Premium Lighting', 'Rubber Flooring', 'Equipment Rental', 'Pro Shop', 'Tournament Ready'],
    whatsappMessage: 'Halo min, saya ingin booking Lapangan Badminton',
  },
  {
    icon: Target,
    title: 'Tennis Court',
    subtitle: 'Outdoor Excellence',
    image: 'https://images.unsplash.com/photo-1620742820748-87c09249a72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVubmlzJTIwY291cnR8ZW58MHx8MHx8fDA%3D',
    pricing: [
      { type: 'Court Rental', price: 'Rp100.000', period: '/hour' },
    ],
    features: ['Clay Surface', 'Night Lighting', 'Equipment Rental', 'Coaching Available', 'Tournament Standard'],
    whatsappMessage: 'Halo min, saya ingin booking Lapangan Tenis',
  },
];

const handleWhatsAppClick = (message) => {
  const phoneNumber = '6287896222233';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
};

const Facilities = () => {
  return (
    <section
      id="facilities"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0e0600 0%, #2a0e00 50%, #1a0a00 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
        .fac-serif { font-family: 'Bebas Neue', Impact, sans-serif; letter-spacing: 0.02em; }
        .fac-sans  { font-family: 'Outfit', sans-serif; }
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
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)',
        }}
      />

      <div className="relative z-10 pt-24 pb-16 px-5 lg:px-10">

        {/* ── Section label ── */}
        <motion.div
          className="fac-sans flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-orange-400">
            Our Facilities
          </span>
        </motion.div>

        {/* ── Heading + body text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.h2
            className="fac-serif text-white leading-none"
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
            <span style={{ opacity: 0.7 }}>World-Class </span>
            <br />
            <span>Sports</span>
            <br />
            <span
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #f97316, #ea580c)',
                backgroundClip: 'text',
              }}
            >
              Facilities
            </span>
          </motion.h2>

          <motion.div
            className="fac-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-orange-400/60 text-xs mt-1 select-none" style={{ fontFamily: 'monospace' }}>
                [↓]
              </span>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Discover our premium sports facilities designed for athletes of all levels.
                Experience excellence in every court, pool, and training space.
              </p>
            </div>
            <div className="h-px bg-white/10" />
          </motion.div>
        </div>

        {/* ── Facilities grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              className="fac-sans group relative bg-transparent hover:bg-white/[0.03] transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image — full width, 16:9 */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'saturate(0.6) brightness(0.8)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,4,0,0.85) 0%, rgba(10,4,0,0.2) 50%, transparent 100%)',
                  }}
                />
                {/* Icon + title overlaid on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <facility.icon className="w-5 h-5 text-orange-400 mb-2" strokeWidth={1.5} />
                    <h3
                      className="fac-serif text-white"
                      style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 400, lineHeight: 1 }}
                    >
                      {facility.title}
                    </h3>
                    <p className="text-white/50 text-xs tracking-widest uppercase mt-1">{facility.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 lg:p-8">

                {/* Pricing row */}
                <div className="flex gap-4 mb-6 flex-wrap">
                  {facility.pricing.map((price, idx) => (
                    <div key={idx} className="flex-1 min-w-[120px]">
                      <p className="text-white/35 text-[10px] uppercase tracking-[0.15em] mb-1">{price.type}</p>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="fac-serif text-white"
                          style={{ fontSize: '22px', fontWeight: 400 }}
                        >
                          {price.price}
                        </span>
                        <span className="text-white/40 text-[11px]">{price.period}</span>
                      </div>
                      
                    </div>
                  ))}
                </div>

                <div className="h-px bg-white/[0.07] mb-6" />

                {/* Features */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-white/50 text-xs font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => handleWhatsAppClick(facility.whatsappMessage)}
                  className="fac-sans w-full inline-flex items-center justify-between gap-2 bg-orange-500 hover:bg-orange-400 text-white text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now via WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                </motion.button>
              </div>

              {/* Bottom hover line */}
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

      {/* ── Massive editorial bottom headline ── */}
      <div className="relative z-10 overflow-hidden pb-32 mt-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2
            className="fac-serif text-white leading-none px-5 lg:px-10 select-none"
            style={{
              fontSize: 'clamp(60px, 11vw, 170px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: 0.92,
              opacity: 0.08,
            }}
          >
            Our Facilities
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;