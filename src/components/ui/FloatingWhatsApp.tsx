"use client"
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit to avoid cluttering the pure hero
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Check initially
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      <div className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium py-1 px-3 mb-2 rounded-lg shadow-lg border border-slate-100 hidden sm:block">
        Fale conosco agora
      </div>
      <a
        href="https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique,%20preciso%20de%20ajuda%20jurídica."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_0_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] transition-all duration-300 relative group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white items-center justify-center text-[9px] font-bold">1</span>
        </span>
        <span className="absolute w-full h-full rounded-full bg-green-500 opacity-40 animate-ping"></span>
        <MessageCircle className="w-8 h-8 relative z-10" />
      </a>
    </motion.div>
  );
}
