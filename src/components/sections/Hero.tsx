import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#F5F2EA]">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A3C34]/5 -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Text Content */}
          <div className="flex-1 text-left order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-bold uppercase tracking-widest mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                Inscrições Abertas
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-[#1A3C34] tracking-tight">
                Mulheres fortes não precisam <span className="text-[#C5A059]">controlar tudo</span> para serem poderosas.
              </h1>

              <p className="font-sans text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-light">
                Conduzo mulheres exaustas a trocarem o peso do controle pela liberdade da confiança — para que seu casamento deixe de ser um campo de batalha e volte a ser um espaço de expansão.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <motion.a
                  href={`https://wa.me/554899033590?text=${encodeURIComponent("Olá Carina! Vim através do site e gostaria de saber mais sobre a mentoria sistêmica.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#C5A059] hover:bg-[#B08D48] text-white font-sans font-semibold py-5 px-10 rounded-full text-lg uppercase tracking-widest shadow-xl shadow-[#C5A059]/20 transition-all flex items-center gap-3 group px-4 inline-flex"
                >
                  Falar no WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="flex flex-col justify-center">
                  <span className="text-sm font-semibold text-[#1A3C34]">Vagas Limitadas</span>
                  <span className="text-xs text-gray-500 uppercase tracking-tighter">Acompanhamento Individual</span>
                </div>
              </div>


            </motion.div>
          </div>

          {/* Right Column: Expert Photo */}
          <div className="flex-1 relative order-2 lg:order-2 w-full max-w-lg lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative Elements for the image */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl z-0" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#1A3C34]/5 rounded-full blur-3xl z-0" />

              <div className="relative z-10">
                <div className="absolute inset-0 border-2 border-[#C5A059] rounded-[2rem] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10" />
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://i.imgur.com/2u6C9zG.jpeg"
                    alt="Carina Ferreira - Mentora Sistêmica"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 md:right-0 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[180px] hidden sm:block"
                >
                  <p className="text-[#1A3C34] font-serif font-bold text-lg md:text-xl leading-tight">Carina Ferreira</p>
                  <p className="text-xs text-[#C5A059] font-bold uppercase tracking-widest mt-1">Mentoria Sistêmica</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#1A3C34]/30 hidden lg:block"
      >
        <div className="w-5 h-9 border-2 border-[#1A3C34]/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#C5A059] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
