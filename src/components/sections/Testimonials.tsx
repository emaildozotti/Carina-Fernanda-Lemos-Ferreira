import React from 'react';
import { Section } from '../ui/Section';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Eu achava que meu marido era preguiçoso. Na mentoria entendi que eu não dava espaço para ele ser homem. Hoje ele lidera e eu descanso.",
      author: "M.S., Empresária"
    },
    {
      quote: "Cheguei exausta, pronta para separar. A Carina não passou a mão na minha cabeça, ela me mostrou minha responsabilidade. Foi o resgate da minha dignidade.",
      author: "A.L., Médica"
    },
    {
      quote: "Pela primeira vez em 10 anos, consegui dormir uma noite inteira sem me preocupar se a casa ia cair.",
      author: "R.F., Advogada"
    }
  ];

  return (
    <div className="bg-[#1A3C34] text-white">
      <Section className="py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#C5A059] font-sans font-semibold tracking-widest uppercase text-sm mb-4 block">
            Prova Social
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
            O que acontece quando você solta o controle:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#0F2823] p-8 md:p-10 rounded-2xl border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors duration-300 relative group"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-[#C5A059]/30 group-hover:text-[#C5A059] transition-colors duration-300" />
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-gray-200 mb-8 pt-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1A3C34] font-bold text-sm">
                  {testimonial.author.split(',')[0].trim().substring(0, 2)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#C5A059] tracking-wide text-sm uppercase">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
