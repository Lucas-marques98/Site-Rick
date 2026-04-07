"use client"
import { motion } from "framer-motion";
import { Award, BookOpen, Clock, ShieldCheck } from "lucide-react";

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
                className="text-center group"
              >
                <div className="w-12 h-12 mx-auto bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
