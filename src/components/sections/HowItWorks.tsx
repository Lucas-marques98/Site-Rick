"use client"
import { motion } from "framer-motion";
import { MessageCircle, FileSearch, Target, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "1. Contato Primário",
      text: "Atendimento imediato e sigiloso para entender os detalhes do seu caso via WhatsApp.",
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "2. Análise Jurídica",
      text: "Nossa equipe mergulha nos documentos para traçar as possibilidades e saídas lógicas.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "3. Estratégia Ofensiva",
      text: "Definimos o melhor caminho de defesa ou ataque jurídico desenhado sob medida.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "4. Acompanhamento",
      text: "Você acompanha cada passo do processo conosco até a resolução com maestria.",
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="/office-hero.png" 
          alt="Escritório de Advocacia" 
          className="w-full h-full object-cover opacity-30 brightness-110 contrast-125 mix-blend-luminosity grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/80 to-slate-900/95"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-3">Simplicidade e Ação</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Como funciona o <span className="text-secondary">nosso atendimento</span>
          </h2>
          <p className="text-lg text-slate-300">
            Acreditamos que o cliente precisar estar amparado desde o primeiro segundo. Veja nossa jornada em 4 passos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-0.5 bg-white/10 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group relative hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-sm text-secondary group-hover:-translate-y-2 group-hover:bg-secondary group-hover:border-secondary/20 group-hover:text-primary transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
