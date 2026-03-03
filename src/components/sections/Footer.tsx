import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Instagram, MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1A3C34] text-white pt-24 pb-12">
      <Section className="py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight text-[#C5A059]">
            Você já carregou esse peso sozinha por tempo demais.
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            A exaustão é um sinal de que o jeito antigo de viver não funciona mais.
            <br />
            Existe outro tipo de poder disponível para você. Um poder que não cansa.
          </p>

          <Button
            size="lg"
            className="text-lg px-12 py-6 shadow-xl shadow-[#C5A059]/20 bg-[#C5A059] hover:bg-[#B08D48] text-white"
            onClick={() => window.open(`https://wa.me/554899033590?text=${encodeURIComponent("Olá Carina! Vim através do site e gostaria de saber mais sobre a mentoria sistêmica.")}`, '_blank')}
          >
            Falar no WhatsApp Agora
          </Button>
        </div>

        <div className="border-t border-[#C5A059]/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-sans">
          <p>
            © 2026 Carina Ferreira. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="hidden md:inline">Política de Privacidade</span>
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
};
