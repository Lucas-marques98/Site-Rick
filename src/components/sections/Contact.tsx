"use client"
import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.open('https://wa.me/5511995544304?text=Olá,%20Desejo%20uma%20análise.', '_blank');
    }, 1200);
  };
  return (
    <section id="contato" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* CTA & Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Dê o Primeiro Passo</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Precisa de ajuda jurídica agora?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Não adie a resolução dos seus problemas. Entre em contato com nossa equipe para um atendimento sigiloso, rápido e focado em proteger aquilo que mais importa para você.
            </p>

            <a 
              href="https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique,%20gostaria%20de%20falar%20sobre%20um%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-primary to-slate-800 text-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 mb-12 font-medium text-lg group"
            >
              <MessageSquare className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Falar com um advogado no WhatsApp
            </a>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4 pt-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Telefone</h4>
                  <p className="text-slate-600">+55 (11) 99554-4304</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-4 pt-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Localização</h4>
                  <p className="text-slate-600">Av. Paulista, Sala 1002, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4 pt-1">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">E-mail</h4>
                  <p className="text-slate-600">contato@drhenriquefernandes.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Envie sua mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] outline-none transition-all duration-300 bg-white shadow-sm"
                    placeholder="João Silva"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Seu WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] outline-none transition-all duration-300 bg-white shadow-sm"
                    placeholder="(11) 90000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Descrição Curta do Caso (Opcional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary focus:scale-[1.02] outline-none transition-all duration-300 bg-white resize-none shadow-sm"
                    placeholder="Gostaria de tirar uma dúvida sobre..."
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-slate-800 text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-md flex justify-center items-center active:scale-[0.98] disabled:opacity-80"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Direcionando para o WhatsApp...
                    </span>
                  ) : (
                    "Enviar Mensagem Segura"
                  )}
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  Garantimos total sigilo e confidencialidade.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
