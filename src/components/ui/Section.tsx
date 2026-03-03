import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  delay = 0 
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};
