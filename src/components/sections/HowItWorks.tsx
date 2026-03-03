import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { FileText, Search, Calendar } from 'lucide-react';

export const HowItWorks = () => {
  const WHATSAPP_URL = `https://wa.me/554899033590?text=${encodeURIComponent("Olá Carina! Vim através do site e gostaria de saber mais sobre a mentoria sistêmica.")}`;

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      step: "PASSO 1",
      title: "O Primeiro Passo",
      description: "Você já deu o passo mais importante preenchendo o formulário das anúncios. Agora, vamos conectar essas informações."
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      step: "PASSO 2",
      title: "Nossa Conexão",
      description: "Ao clicar no botão, você será direcionada para o meu WhatsApp pessoal para validarmos seu momento e objetivos."
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      step: "PASSO 3",
      title: "Sua Transformação",
      description: "Se houver alinhamento, agendaremos sua Sessão de Diagnóstico Online para traçar seu plano de reordenação."
    }
  ];

  return (
    <div className="bg-white">
      <Section id="how-it-works" className="py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#C5A059] font-sans font-semibold tracking-widest uppercase text-sm mb-4 block">
            Próximos Passos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A3C34] font-bold mb-8 leading-tight">
            Como funciona após seu cadastro
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Você já iniciou seu processo. Agora, o próximo passo é uma conversa direta para alinhar as expectativas da sua Mentoria:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#E8E6E1] -z-10 transform translate-y-4" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-[#1A3C34] flex items-center justify-center mb-8 shadow-lg border-4 border-white group-hover:bg-[#C5A059] transition-colors duration-300">
                {step.icon}
              </div>
              <span className="text-[#C5A059] font-bold tracking-widest text-sm mb-2 block">
                {step.step}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1A3C34] mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="text-lg px-12 py-6 shadow-xl shadow-[#C5A059]/20 bg-[#C5A059] hover:bg-[#B08D48] text-white"
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            Falar no WhatsApp Agora
          </Button>
        </div>
      </Section>
    </div>
  );
};
