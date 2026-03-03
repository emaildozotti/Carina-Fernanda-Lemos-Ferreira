import React from 'react';
import { Section } from '../ui/Section';
import { ShieldOff, Scale, Heart } from 'lucide-react';

export const Methodology = () => {
  const pillars = [
    {
      icon: <ShieldOff className="w-10 h-10 text-[#C5A059]" />,
      title: "O Desarmamento (Identidade)",
      description: "Entenderemos por que você precisou assumir o controle (suas feridas com pai e mãe) e como desligar o 'modo guerra' sem se sentir fraca ou vulnerável."
    },
    {
      icon: <Scale className="w-10 h-10 text-[#C5A059]" />,
      title: "A Hierarquia (Ordem)",
      description: "Enquanto você for mãe do seu marido, ele será seu filho. Vamos devolver as responsabilidades para quem de direito, permitindo que o masculino volte a ocupar o espaço que você monopolizou."
    },
    {
      icon: <Heart className="w-10 h-10 text-[#C5A059]" />,
      title: "A Confiança (Expansão)",
      description: "Aprender a arte de confiar e receber. Transformar o controle (que contrai) em presença (que expande). Você voltará a ser esposa e mulher."
    }
  ];

  return (
    <div className="bg-[#1A3C34] text-white">
      <Section className="py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#C5A059] font-sans font-semibold tracking-widest uppercase text-sm mb-4 block">
            A Metodologia
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Não é sobre "salvar o casamento". É sobre reordenar o seu lugar.
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A Mentoria não é um espaço para desabafar ou reclamar do marido. É um processo estratégico baseada em três pilares sistêmicos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-[#0F2823] p-8 md:p-10 rounded-2xl border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors duration-300 group"
            >
              <div className="bg-[#1A3C34] w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-[#C5A059]/30">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#C5A059] mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
