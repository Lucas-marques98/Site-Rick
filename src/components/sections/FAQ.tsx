"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto custa uma consulta e análise do meu caso?",
      answer: "No primeiro contato via WhatsApp, fazemos uma avaliação inicial gratuita para entender a viabilidade do seu caso. Custos honorários são definidos com total transparência e justiça apenas após nossa equipe firmar a melhor estratégia."
    },
    {
      question: "O atendimento para outras cidades é 100% online?",
      answer: "Sim. Nossas consultas são conduzidas por videochamada ou WhatsApp, com o mesmo rigor e eficiência do presencial. Atuamos nacionalmente por processos digitais com troca de documentos 100% segura."
    },
    {
      question: "Em quanto tempo a equipe dá o primeiro retorno?",
      answer: "Nossa meta é a resolução imediata. Durante o horário comercial, contatando via WhatsApp, você falará com um especialista entre 5 a 15 minutos."
    },
    {
      question: "Quais são as chances de sucesso no meu processo?",
      answer: "No momento do diagnóstico jurídico, seremos absolutamente sinceros sobre riscos e possibilidades. Não prometemos o impossível, mas prometemos entregar o trabalho técnico mais qualificado para chegar à vitória."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="/office-hero.png"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover opacity-25 brightness-110 contrast-125 mix-blend-overlay grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/95"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <div className="flex justify-center mb-4"><HelpCircle className="w-10 h-10 text-secondary opacity-50" /></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-300 text-lg">Respostas claras para a sua tranquilidade.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm border transition-colors duration-300 overflow-hidden ${isOpen ? 'border-primary/30 shadow-md' : 'border-slate-200'}`}
              >
                {/* Botão do acordeão — funciona em touch nativamente */}
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  whileTap={{ scale: 0.99 }}
                  className="w-full px-5 py-5 md:px-6 md:py-6 text-left flex justify-between items-center select-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-base md:text-lg font-bold pr-6 transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-primary text-secondary shadow-md' : 'bg-slate-50 text-slate-400'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
