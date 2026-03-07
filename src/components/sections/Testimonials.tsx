import React from 'react';
import { Section } from '../ui/Section';

export const Testimonials = () => {
  const col1 = [
    "https://i.imgur.com/YGi0zKN.jpeg",
    "https://i.imgur.com/UTwc4T8.jpeg"
  ];

  const col2 = [
    "https://i.imgur.com/HWGV0yO.jpeg",
    "https://i.imgur.com/yoMHWX0.jpeg"
  ];

  const col3 = [
    "https://i.imgur.com/WeUg6im.jpeg",
    "https://i.imgur.com/ykTHJtA.jpeg"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 items-start">
          {/* Coluna 1 */}
          <div className="flex flex-col gap-6">
            {col1.map((imgSrc, index) => (
              <div key={`col1-${index}`} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C5A059]/20 hover:border-[#C5A059]/50">
                <img src={imgSrc} alt={`Depoimento ${index + 1}`} className="w-full h-auto block" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-6">
            {col2.map((imgSrc, index) => (
              <div key={`col2-${index}`} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C5A059]/20 hover:border-[#C5A059]/50">
                <img src={imgSrc} alt={`Depoimento ${index + 3}`} className="w-full h-auto block" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col gap-6">
            {col3.map((imgSrc, index) => (
              <div key={`col3-${index}`} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C5A059]/20 hover:border-[#C5A059]/50">
                <img src={imgSrc} alt={`Depoimento ${index + 5}`} className="w-full h-auto block" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
