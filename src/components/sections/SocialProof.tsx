"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

function ParallaxCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(ySpring, [-50, 50], [6, -6]);
  const rotateY = useTransform(xSpring, [-50, 50], [-6, 6]);
  const glareX = useTransform(xSpring, [-50, 50], ["0%", "100%"]);
  const glareY = useTransform(ySpring, [-50, 50], ["0%", "100%"]);

  const handleMove = (clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(clientX - (rect.left + rect.width / 2));
    y.set(clientY - (rect.top + rect.height / 2));
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
      className={`relative group ${className ?? ""}`}
    >
      {/* Glare */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function SocialProof() {
  const reviews = [
    {
      name: "Marcos V.",
      text: "Fui muito bem atendido. O primeiro contato demorou quase 20 minutos e já estava fechando o site, mas a Dra. me ligou e resolveu minha liminar hiper rápido.",
      rating: 4
    },
    {
      name: "Juliana Santos",
      text: "Ótimo profissional, explicou os riscos reais sem falsas promessas. Me traçou uma estratégia preventiva que salvou meu patrimônio. Competência é a palavra.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      text: "Encontrei do zero pela internet. Em meia hora no WhatsApp ele analisou a foto da minha notificação e me disse o que devia fazer. Senti firmeza.",
      rating: 5
    },
    {
      name: "Fernanda Cristina",
      text: "Honorários super justos e parcelados. O andamento da minha causa trabalhista é burocrático e lento, mas toda semana eles mandam atualização. Muito obrigado equipe.",
      rating: 4
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Experiência Real</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              A confiança de quem já foi <span className="text-secondary">defendido por nós</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 inline-block self-start md:self-end"
          >
            <div className="flex space-x-1 text-secondary mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-white text-sm font-medium">Classificação Máxima em Avaliações no Google</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ParallaxCard className="h-full">
                <div className="bg-white rounded-2xl p-6 relative shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-primary/5 transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="flex space-x-1 text-yellow-400 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-current' : 'text-slate-200'}`} />
                      ))}
                    </div>

                    <p className="text-slate-600 mb-8 italic leading-relaxed">
                      &quot;{review.text}&quot;
                    </p>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold uppercase text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                        <p className="text-xs text-slate-500">Cliente atendido</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
