import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '6287896222233'; // Replace with actual number
    const message = 'Halo min, saya ingin bertanya mengenai Sports Club Pondok Tjandra Indah';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      <span className="text-2xl">💬</span>
    </motion.button>
  );
};

export default WhatsAppButton;