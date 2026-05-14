import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0e0600 0%, #2a0e00 50%, #1a0a00 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
        .contact-serif { font-family: 'Bebas Neue', Impact, sans-serif; letter-spacing: 0.02em; }
        .contact-sans  { font-family: 'Outfit', sans-serif; }
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
          background:
            "linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)",
        }}
      />

      <div className="relative z-10 pt-24 pb-16 px-5 lg:px-10">

        {/* Section label */}
        <motion.div
          className="contact-sans flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-orange-400">
            Contact Us
          </span>
        </motion.div>

        {/* Two-column heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.h2
            className="contact-serif text-white leading-none"
            style={{
              fontSize: "clamp(48px, 7vw, 110px)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span style={{ opacity: 0.7 }}>Get In </span>
            <span>Touch</span>
            <br />
            <span style={{ opacity: 0.7 }}>With Us</span>
          </motion.h2>

          <motion.div
            className="contact-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <span className="text-orange-400/60 text-xs mt-1 select-none" style={{ fontFamily: 'monospace' }}>[↓]</span>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Ready to start your fitness journey? Contact us for memberships,
                facility bookings, and any inquiries about our premium sports club.
              </p>
            </div>
            <div className="h-px bg-white/10 mt-4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            className="space-y-px bg-white/[0.06]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Location */}
            <div className="bg-[#0e0600] hover:bg-white/[0.04] transition-colors duration-300 p-6 flex items-start gap-4">
              <div className="p-3 bg-orange-500/15 flex-shrink-0">
                <MapPin className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="contact-sans text-sm font-semibold text-white mb-1 tracking-wide">Location</h3>
                <p className="contact-sans text-white/60 text-sm leading-relaxed">Pondok Tjandra Indah, Sidoarjo</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#0e0600] hover:bg-white/[0.04] transition-colors duration-300 p-6 flex items-start gap-4">
              <div className="p-3 bg-orange-500/15 flex-shrink-0">
                <Clock className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="contact-sans text-sm font-semibold text-white mb-1 tracking-wide">Operating Hours</h3>
                <p className="contact-sans text-white/60 text-sm">Mon – Fri: 6:00 AM – 9:00 PM</p>
                <p className="contact-sans text-white/60 text-sm">Sat – Sun: 6:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#0e0600] hover:bg-white/[0.04] transition-colors duration-300 p-6 flex items-start gap-4">
              <div className="p-3 bg-orange-500/15 flex-shrink-0">
                <Phone className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="contact-sans text-sm font-semibold text-white mb-1 tracking-wide">Phone</h3>
                <p className="contact-sans text-white/60 text-sm">+62 878-9622-2233</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/6287896222233?text=Halo%20min,%20saya%20ingin%20bertanya%20mengenai%20informasi%20club"
              className="contact-sans flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-4 w-full transition-all duration-300"
              style={{ borderRadius: '0' }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            className="border border-white/[0.08] overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
              <h3 className="contact-sans text-sm font-semibold text-white tracking-wide">Find Us</h3>
              <motion.a
                href="https://maps.google.com/maps?q=Pondok+Tjandra+Indah+Sports+Club"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-sans flex items-center gap-2 text-white/40 hover:text-orange-400 text-[10px] font-medium tracking-[0.15em] uppercase transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Maps
              </motion.a>
            </div>

            <div className="relative" style={{ aspectRatio: '4/3' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0170277742427!2d112.7845802!3d-7.351983700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fad3b03da875%3A0x3150cb4591f3e38a!2sPondok%20Tjandra%20Indah%20Sports%20Club!5e0!3m2!1sen!2sid!4v1778433833518!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pondok Tjandra Indah Sports Club Location"
              />
            </div>

            <div className="flex items-start gap-3 px-6 py-4 border-t border-white/[0.08]">
              <div className="p-2 bg-orange-500/15 flex-shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-orange-400" strokeWidth={1.5} />
              </div>
              <div>
                <p className="contact-sans text-white text-sm font-medium">Sports Club Pondok Tjandra Indah</p>
                <p className="contact-sans text-white/50 text-xs mt-0.5">Pondok Tjandra Indah Complex, Sidoarjo</p>
              </div>
            </div>
          </motion.div>
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
            className="contact-serif text-white leading-none px-5 lg:px-10 select-none"
            style={{ fontSize: 'clamp(60px, 11vw, 170px)', fontWeight: 400, letterSpacing: '0.02em', lineHeight: 0.92, opacity: 0.08 }}
          >
            Contact Us
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
