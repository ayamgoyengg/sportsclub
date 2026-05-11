import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, MessageCircle, PhoneCall, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0e0600 0%, #2a0e00 50%, #1a0a00 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
        .contact-serif { font-family: 'Bebas Neue', Impact, sans-serif; letter-spacing: 0.02em; }
        .contact-sans  { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Noise texture — same as other sections */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Orange vertical accent line — same as other sections */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[3px] z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)',
        }}
      />

      <div className="relative z-10 pt-24 pb-16 px-5 lg:px-10">

        {/* ── Section label ── */}
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

        {/* Two-column: big heading left + description right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

          {/* Left — large serif heading */}
          <motion.h2
            className="contact-serif text-white leading-none"
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
            <span style={{ opacity: 0.7 }}>Get In </span>
            <span>Touch</span>
            <br />
            <span style={{ opacity: 0.7 }}>With Us</span>
          </motion.h2>

          {/* Right — description */}
          <motion.div
            className="contact-sans text-white/80 leading-relaxed"
            style={{ fontSize: '18px', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              Ready to start your fitness journey? Contact us for memberships, facility bookings, and any inquiries about our premium sports club.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="contact-sans text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="contact-sans text-white/70 leading-relaxed">Pondok Tjandra Indah, Sidoarjo</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="contact-sans text-lg font-semibold text-white mb-2">Operating Hours</h3>
                  <p className="contact-sans text-white/70 leading-relaxed">Mon - Fri: 6:00 AM - 9:00 PM</p>
                  <p className="contact-sans text-white/70 leading-relaxed">Sat - Sun: 6:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="contact-sans text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="contact-sans text-white/70 leading-relaxed">+62 8xx-xxxx-xxxx</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="contact-sans text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="contact-sans text-white/70 leading-relaxed">info@sportsclubpti.com</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://wa.me/628xxxxxxxxxx?text=Halo%20min,%20saya%20ingin%20bertanya%20mengenai%20informasi%20club"
                className="group flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="contact-sans">WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+628xxxxxxxxxx"
                className="group flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="contact-sans">Call Now</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header with title and external link button */}
            <div className="flex items-center justify-between p-6 pb-4">
              <h3 className="contact-sans text-xl font-semibold text-white">Find Us</h3>
              <motion.a
                href="https://maps.google.com/maps?q=Pondok+Tjandra+Indah+Sports+Club"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="contact-sans">Open in Maps</span>
              </motion.a>
            </div>

            {/* Map Container */}
            <div className="relative aspect-video overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0170277742427!2d112.7845802!3d-7.351983700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fad3b03da875%3A0x3150cb4591f3e38a!2sPondok%20Tjandra%20Indah%20Sports%20Club!5e0!3m2!1sen!2sid!4v1778433833518!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pondok Tjandra Indah Sports Club Location"
                className="group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay gradient for premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Location pin overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  className="bg-orange-500/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Footer with address */}
            <div className="p-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="contact-sans text-white font-medium mb-1">Sports Club Pondok Tjandra Indah</p>
                  <p className="contact-sans text-white/60 text-sm">Pondok Tjandra Indah Complex, Sidoarjo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;