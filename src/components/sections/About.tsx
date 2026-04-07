"use client"
import { motion } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-2 md:-inset-4 border border-secondary/30 rounded-xl transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10"></div>
              <div className="absolute -inset-2 md:-inset-4 border-2 border-primary/10 rounded-xl transform -translate-x-1 -translate-y-1 md:-translate-x-3 md:-translate-y-3 -z-10 bg-slate-50"></div>

              <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="/rick.png"
                  alt="Dr. Henrique Fernandes"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none"></div>
              </div>

              <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-8 bg-primary text-white p-4 md:p-6 rounded-xl shadow-2xl max-w-[160px] sm:max-w-[180px] md:max-w-[200px] z-10 hover:-translate-y-2 transition-all duration-300 hover:shadow-primary/30">
                <Shield className="w-8 h-8 mb-3 text-secondary" />
                <p className="font-serif font-bold text-lg leading-tight mb-1">Ética e Transparência</p>
                <p className="text-sm text-slate-300">Valores fundamentais</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-[2px] bg-secondary"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Sobre o Doutor</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Dr. Henrique Fernandes
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Com uma sólida e vasta experiência no mercado jurídico, Dr. Henrique Fernandes tem se destacado por uma advocacia moderna, estratégica e focada inteiramente na resolução eficiente dos problemas de seus clientes.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Possui atuação multidisciplinar, com um atendimento que une o rigor técnico da lei à sensibilidade necessária para lidar com questões complexas, sejam elas cíveis, trabalhistas, familiares ou criminais. Nosso escritório prioriza a humanização, garantindo que você compreenda cada etapa do seu processo de forma transparente e segura.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Atendimento Personalizado",
                "Estratégias Focadas em Resultados",
                "Sigilo e Confidencialidade",
                "Agilidade e Transparência"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mr-3 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border-l-4 border-primary p-5 shadow-sm inline-block rounded-r-lg">
              <p className="font-serif text-slate-900 font-bold text-lg mb-1">OAB/SP: <span className="text-primary tracking-wider border-b border-primary/20 pb-0.5">EDITÁVEL</span></p>
              <p className="text-sm text-slate-500">Regularmente inscrito na Ordem dos Advogados do Brasil</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
