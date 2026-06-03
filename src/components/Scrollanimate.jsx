import React from 'react';
import { motion } from 'framer-motion';

export default function Scrollanimate({ children, direction = 'left', delay = 0 }) {
  
  // Varian untuk pembungkus (container)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Jeda 0.2 detik antar elemen anak
        delayChildren: delay,
      }
    }
  };

  // Varian untuk anak-anak (items)
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full overflow-hidden"
    >
      {/* Kita membungkus children dalam motion untuk menerapkan itemVariants */}
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}