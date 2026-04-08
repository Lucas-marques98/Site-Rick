"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, BookOpen, Clock, ShieldCheck } from "lucide-react";
import { useRef } from "react";

function ParallaxStatCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(ySpring, [-40, 40], [6, -6]);
  const rotateY = useTransform(xSpring, [-40, 40], [-6, 6]);
  const glareX = useTransform(xSpring, [-40, 40], ["0%", "100%"]);
  const glareY = useTransform(ySpring, [-40, 40], ["0%", "100%"]);

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 600 }}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseLeave={handleReset}
      onTouchMove={(e) => {
        const t = e.touches[0];
        handleMove(t.clientX, t.clientY);
      }}
      onTouchEnd={handleReset}
      whileTap={{ scale: 0.96 }}
      className={`relative group cursor-pointer ${className ?? ""}`}
    >
      {/* Glare */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.2) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function Authority() {
  const stats = [
    { number: "5+", label: "Anos de Atuação", icon: <Clock /> },
    { number: "300+", label: "Casos Conduzidos", icon: <BookOpen /> },
    { number: "100%", label: "Sigilo Absoluto", icon: <ShieldCheck /> },
    { number: "Top", label: "Advocacia Especializada", icon: <Award /> }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ParallaxStatCard>
                  <div className="text-center p-4 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 mx-auto bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </ParallaxStatCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
