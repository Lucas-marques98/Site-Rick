"use client"
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md z-[60] overflow-hidden"
        >
          <div className="flex items-center justify-center py-2 px-4 max-w-7xl mx-auto cursor-pointer" onClick={() => window.open('https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique.', '_blank')}>
            <Zap className="w-4 h-4 mr-2 animate-pulse text-white drop-shadow-sm" />
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-center">
              Atendimento rápido via WhatsApp – resposta em poucos minutos
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
