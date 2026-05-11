import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Facilities />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <ScrollProgress />
    </div>
  );
}

export default App;