"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

export default function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const cities = ["São Paulo", "Guarulhos", "Campinas", "Osasco", "Santo André", "Ribeirão Preto"];
  const [city, setCity] = useState("São Paulo");

  useEffect(() => {
    const interval = setInterval(() => {
      setCity(cities[Math.floor(Math.random() * cities.length)]);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000);
    }, 38000); // 38s entre popups
    
    // Primeira aparição em 12s
    const firstTimeout = setTimeout(() => {
      setCity(cities[Math.floor(Math.random() * cities.length)]);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 6000);
    }, 12000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 left-4 sm:left-6 z-50 bg-white shadow-2xl rounded-xl p-4 border border-slate-100 flex items-start space-x-3 max-w-[280px]"
        >
          <div className="bg-green-100 p-2 rounded-full shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1 pr-4">
            <p className="text-[11px] text-slate-500 font-medium mb-0.5 uppercase tracking-wide">Agora mesmo</p>
            <p className="text-sm font-semibold text-slate-800 leading-tight">
              Cliente de {city} <br />
              <span className="text-primary font-bold">entrou em contato.</span>
            </p>
          </div>
          <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-slate-400 hover:text-slate-600">
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
