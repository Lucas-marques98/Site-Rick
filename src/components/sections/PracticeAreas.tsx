"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Scale, Users, Briefcase, HeartHandshake, Landmark, FileText, ArrowRight } from "lucide-react";
import { useRef } from "react";

function ParallaxCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(ySpring, [-50, 50], [8, -8]);
  const rotateY = useTransform(xSpring, [-50, 50], [-8, 8]);
  const glareX = useTransform(xSpring, [-50, 50], ["0%", "100%"]);
  const glareY = useTransform(ySpring, [-50, 50], ["0%", "100%"]);

  const handleMove = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(clientX - cx);
    y.set(clientY - cy);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseLeave={handleReset}
      onTouchMove={(e) => {
        const t = e.touches[0];
        handleMove(t.clientX, t.clientY);
      }}
      onTouchEnd={handleReset}
      whileTap={{ scale: 0.97 }}
      className={`relative group cursor-pointer ${className ?? ""}`}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function PracticeAreas() {
  const areas = [
    {
      title: "Direito Criminal",
      description: "Atuação estratégica em inquéritos policiais, ações penais e recursos, garantindo a ampla defesa e o devido processo legal.",
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: "Direito Trabalhista",
      description: "Assessoria em litígios envolvendo empregador e empregado, rescisões, horas extras e reconhecimento de vínculo.",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Direito de Família",
      description: "Condução sensível de divórcios, pensão alimentícia, guarda de menores e inventários, preservando conflitos e direitos.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Direito Civil",
      description: "Atuação especializada em contratos, indenizações, responsabilidade civil, propriedade e cobranças em geral.",
      icon: <HeartHandshake className="w-8 h-8" />
    },
    {
      title: "Direito Previdenciário",
      description: "Garantia do seu direito a aposentadoria, auxílios, pensão por morte e revisões de benefícios junto ao INSS.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Direito Tributário",
      description: "Defesa e consultoria para empresas e pessoas físicas contra execuções fiscais e planejamento visando redução de impostos.",
      icon: <Landmark className="w-8 h-8" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="atuacao" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Especialidades</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Áreas de Atuação
            </h2>
            <p className="text-lg text-slate-600">
              Oferecemos soluções jurídicas inteligentes e assertivas, com o compromisso de defender os seus interesses com excelência nas mais diversas áreas do direito.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {areas.map((area, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ParallaxCard>
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-100 shadow-md group-hover:shadow-2xl group-hover:border-secondary/50 transition-all duration-300 relative overflow-hidden h-full">
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-primary group-hover:via-secondary group-hover:to-primary transition-all duration-500"></div>

                  <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {area.icon}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {area.description}
                  </p>

                  <a
                    href="https://wa.me/5511995544304?text=Olá,%20Desejo%20falar%20sobre%20direito%20específico."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary uppercase tracking-wider transition-colors"
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
