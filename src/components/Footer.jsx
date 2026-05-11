import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0e0600 0%, #2a0e00 50%, #1a0a00 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');
        .footer-serif { font-family: 'Bebas Neue', Impact, sans-serif; letter-spacing: 0.02em; }
        .footer-sans  { font-family: 'Outfit', sans-serif; }
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
          background:
            "linear-gradient(to bottom, transparent 0%, #f97316 35%, #c2410c 75%, transparent 100%)",
        }}
      />

      <div className="relative z-10 pt-24 pb-16 px-5 lg:px-10">
        {/* ── Section label ── */}
        <motion.div
          className="footer-sans flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-orange-500" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-orange-400">
            Stay Connected
          </span>
        </motion.div>

        {/* Two-column: big heading left + description right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left — large serif heading */}
          <motion.h2
            className="footer-serif text-white leading-none"
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
            <span style={{ opacity: 0.7 }}>Sports Club </span>
            <span>Pondok</span>
            <br />
            <span style={{ opacity: 0.7 }}>Tjandra Indah</span>
          </motion.h2>

          {/* Right — description */}
          <motion.div
            className="footer-sans text-white/80 leading-relaxed"
            style={{ fontSize: "18px", lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              Join our community of fitness enthusiasts. Follow us on social
              media for the latest updates, special offers, and inspiring
              fitness content.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Logo and Social Media */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logo}
                alt="Sports Club PTI Logo"
                className="h-14 w-auto object-contain rounded-lg bg-white/10 p-2"
              />
              <h3 className="footer-serif text-2xl font-bold text-orange-400">
                Sports Club PTI
              </h3>
            </div>
            <p className="footer-sans text-white/70 mb-6 leading-relaxed">
              Your premium destination for fitness and sports activities.
              Experience world-class facilities in a luxurious environment.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/61587411177342/"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/pti_sportsclub/"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-sans text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-sans text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-sans text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>
            <div className="footer-sans space-y-3 text-white/70">
              <p>Pondok Tjandra Indah</p>
              <p>+62 878-9622-2233</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="footer-sans text-white/60">
            © 2026 Sports Club Pondok Tjandra Indah. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
