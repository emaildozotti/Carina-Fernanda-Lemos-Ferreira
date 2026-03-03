import React from 'react';
import { Section } from '../ui/Section';
import { Play } from 'lucide-react';

export const VideoSection = () => {
  return (
    <Section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="font-serif text-3xl md:text-5xl text-[#1A3C34] font-bold mb-12">
          Assista à Mensagem da Carina
        </h2>

        <div className="relative max-w-[400px] mx-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white">
          <iframe
            src="https://www.youtube.com/embed/dVAXfPNl-9A"
            title="Video de Apresentação"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  );
};
