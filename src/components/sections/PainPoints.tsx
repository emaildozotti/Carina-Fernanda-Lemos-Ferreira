import React from 'react';
import { Section } from '../ui/Section';
import { Shield, AlertTriangle, UserMinus, Frown } from 'lucide-react';

export const PainPoints = () => {
  const points = [
    {
      icon: <Shield className="w-8 h-8 text-[#C5A059]" />,
      title: "A Solidão da Liderança",
      description: "Você decide, paga, lembra e executa. Sente que se soltar por um minuto, a casa cai."
    },
    {
      icon: <UserMinus className="w-8 h-8 text-[#C5A059]" />,
      title: 'A "Mãe" do Marido',
      description: "Você perdeu a admiração por ele porque ocupou o lugar de mãe. A química acabou porque não existe tensão sexual entre mãe e filho."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#C5A059]" />,
      title: "O Estado de Alerta",
      description: "Você não descansa. Seu corpo dorme, mas sua mente continua vigiando o futuro, as contas e os perigos."
    },
    {
      icon: <Frown className="w-8 h-8 text-[#C5A059]" />,
      title: "O Ressentimento",
      description: "Você faz tudo, mas faz com raiva. Sente que ninguém cuida de você."
    }
  ];

  return (
    <div className="bg-[#F5F2EA]">
      <Section className="py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A059] font-sans font-semibold tracking-widest uppercase text-sm mb-4 block">
            O Espelho da Dor
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A3C34] font-bold mb-6 leading-tight">
            O preço invisível de ser a mulher que sustenta tudo.
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed">
            O mundo vê uma mulher forte, decidida e que resolve qualquer problema. Mas só você sabe o que acontece quando fecha a porta de casa:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-[#E8E6E1] hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="bg-[#F5F2EA] p-4 rounded-full shrink-0">
                {point.icon}
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A3C34] mb-3">
                  {point.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto bg-[#1A3C34] text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <p className="font-serif text-xl md:text-2xl italic leading-relaxed">
            "Você aprendeu a ser rígida para sobreviver. Mas essa armadura que te protegeu no passado é a mesma que está esmagando o seu casamento hoje."
          </p>
        </div>
      </Section>
    </div>
  );
};
