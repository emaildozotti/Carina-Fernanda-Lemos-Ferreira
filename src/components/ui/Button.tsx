import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md uppercase tracking-wider";
  
  const variants = {
    primary: "bg-[#C5A059] text-white hover:bg-[#B08D48] focus:ring-[#C5A059]",
    secondary: "bg-[#1A3C34] text-white hover:bg-[#0F2823] focus:ring-[#1A3C34]",
    outline: "border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white focus:ring-[#C5A059]"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
