import React from 'react';
import { Section } from '../ui/Section';
import { CheckCircle } from 'lucide-react';

export const Bio = () => {
  return (
    <Section className="py-20 md:py-32 bg-[#F5F2EA]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
        <div className="order-1 md:order-1 relative">
          <div className="absolute -inset-4 border-2 border-[#C5A059] rounded-2xl md:translate-x-4 md:translate-y-4 z-0" />
          <img
            src="https://i.imgur.com/x62orKP.jpeg"
            alt="Carina Ferreira"
            className="relative z-10 w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="order-2 md:order-2">
          <span className="text-[#C5A059] font-sans font-semibold tracking-widest uppercase text-sm mb-4 block">
            Quem é a Mentora
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A3C34] font-bold mb-8 leading-tight">
            De "General" a Mulher Real: Quem é Carina Ferreira?
          </h2>

          <div className="space-y-6 font-sans text-gray-700 leading-relaxed text-lg">
            <p className="font-medium italic text-[#1A3C34]">
              Eu não li sobre a sua dor em um livro. Eu vivi ela.
            </p>
            <p>
              Cresci em um lar onde emoção era sinônimo de caos. Muito cedo, decidi: "Eu não posso ser mais um problema". Aprendi a calar o que sentia e a resolver tudo. Me tornei a mulher forte, estruturada e... exausta.
            </p>
            <p>
              Levei essa rigidez para o meu casamento e quase o sufoquei. Eu achava que controlar era amar.
            </p>
            <p>
              Hoje, como Terapeuta e Mentora Sistêmica, uso minha travessia e técnica para guiar mulheres como você. Meu trabalho não é te consertar — você não está quebrada. Meu trabalho é te ajudar a baixar as armas para que você possa, finalmente, ser cuidada.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-[#C5A059]/30">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[#1A3C34] font-medium">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                <span>Especialista em Dinâmica Sistêmica Familiar.</span>
              </div>
              <div className="flex items-center gap-3 text-[#1A3C34] font-medium">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                <span>Mentora de Mulheres e Liderança Feminina.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
