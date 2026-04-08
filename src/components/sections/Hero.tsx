"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Efeito Parallax suave
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center pt-24 bg-slate-900 overflow-hidden">
      
      {/* Background Image with Parallax & Initial Scale-in */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y }}
        className="absolute -top-[10%] left-0 w-full h-[130%] z-0"
      >
        <div className="absolute inset-0 bg-[url('/office-hero.png')] bg-cover bg-center" />
      </motion.div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-900/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 z-10" />

      {/* TEXT CONTENT CENTERED */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center pb-12 md:pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider text-secondary bg-white/10 uppercase mb-6 md:mb-8 border border-white/20 shadow-sm backdrop-blur-md">
            Excelência Jurídica
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 md:mb-8">
            Defesa estratégica e <br className="hidden md:block"/>
            especializada para <span className="text-secondary relative whitespace-nowrap">proteger seus direitos
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/40 fill-current" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10 L100,20 L0,20 Z" /></svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Atendimento jurídico humanizado e personalizado nas principais áreas do Direito. Experiência que faz a diferença no seu caso.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              href="https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique,%20gostaria%20de%20falar%20sobre%20um%20caso."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full sm:w-auto flex items-center justify-center p-[2px] rounded-xl bg-gradient-to-r from-accent to-blue-400 group relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-400/20"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="w-full bg-slate-900/40 backdrop-blur-sm px-4 sm:px-8 py-4 rounded-[10px] flex items-center justify-center font-medium text-white transition-all duration-300 group-hover:bg-transparent">
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                <span>Falar no WhatsApp</span>
              </div>
            </motion.a>
            
            <motion.a 
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full sm:w-auto px-4 sm:px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl hover:bg-white/10 hover:border-white/40 shadow-md hover:shadow-xl font-medium flex items-center justify-center group backdrop-blur-sm"
            >
              <span>Agendar Consulta</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 shrink-0 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 hover:text-white transition-colors z-20">
        <span className="text-[10px] uppercase tracking-widest mb-2 font-medium">Role para baixo</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
}
