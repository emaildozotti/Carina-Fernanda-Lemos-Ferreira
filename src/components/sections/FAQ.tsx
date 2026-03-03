import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ = () => {
  const faqs = [
    {
      question: "Se eu parar de controlar, minha casa não vai virar um caos?",
      answer: "No início, pode haver instabilidade. Mas é impossível organizar algo novo mantendo a estrutura velha. Eu vou te guiar para fazer essa transição com segurança, sem que tudo desmorone."
    },
    {
      question: "Meu marido precisa participar das sessões?",
      answer: "Não. O trabalho é focado na sua postura. Quando você muda sua posição no sistema (sai do lugar de mãe/controladora), todas as peças ao seu redor são obrigadas a se moverem também. A mudança começa em você."
    },
    {
      question: "Vou me tornar uma mulher submissa e sem voz?",
      answer: "Jamais. Honra e respeito não são submissão. Você continuará sendo uma mulher potente, mas aprenderá a usar essa potência para construir pontes, e não muros."
    },
    {
      question: "É terapia ou mentoria?",
      answer: "É um processo híbrido. Uso a profundidade terapêutica para curar a origem (passado) e a direção da mentoria para agir no agora (futuro). É para quem quer movimento."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F5F2EA]">
      <Section className="py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#C5A059] font-sans font-semibold tracking-widest uppercase text-sm mb-4 block">
            Dúvidas Comuns
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A3C34] font-bold mb-8 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed">
            Quebra de Objeções para a "Mulher Forte"
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-[#E8E6E1] overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-serif text-lg md:text-xl font-semibold text-[#1A3C34] pr-8">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#C5A059] shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C5A059] shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 font-sans leading-relaxed border-t border-[#E8E6E1] mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
