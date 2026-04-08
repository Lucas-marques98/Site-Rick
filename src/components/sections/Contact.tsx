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

            <motion.a
              href="https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique,%20gostaria%20de%20falar%20sobre%20um%20caso."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto px-4 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-primary to-slate-800 text-white rounded-lg shadow-xl mb-10 sm:mb-12 font-medium text-center text-sm md:text-lg group"
            >
              <MessageSquare className="w-5 h-5 mb-2 sm:mb-0 sm:mr-3 shrink-0 group-hover:animate-bounce" />
              <span>Falar com um advogado no WhatsApp</span>
            </motion.a>

            <div className="space-y-6">
              {[
                { icon: <Phone className="w-5 h-5" />, label: "Telefone", value: "+55 (11) 99554-4304" },
                { icon: <MapPin className="w-5 h-5" />, label: "Localização", value: "Av. Paulista, Sala 1002, São Paulo - SP" },
                { icon: <Mail className="w-5 h-5" />, label: "E-mail", value: "contato@drhenriquefernandes.com.br", breakAll: true },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div className="ml-4 pt-1 w-full overflow-hidden">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">{item.label}</h4>
                    <p className={`text-slate-600 ${item.breakAll ? 'break-all md:break-normal' : ''}`}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-100 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Envie sua mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 bg-white shadow-sm"
                    placeholder="João Silva"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Seu WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 bg-white shadow-sm"
                    placeholder="(11) 90000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Descrição Curta do Caso (Opcional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300 bg-white resize-none shadow-sm"
                    placeholder="Gostaria de tirar uma dúvida sobre..."
                  ></textarea>
                </div>

                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-full bg-primary hover:bg-slate-800 text-white font-medium py-4 rounded-lg transition-colors duration-300 shadow-md flex justify-center items-center disabled:opacity-80"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Direcionando para o WhatsApp...
                    </span>
                  ) : (
                    "Enviar Mensagem Segura"
                  )}
                </motion.button>
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
