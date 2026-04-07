"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X, MessageCircle } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves the top of the window
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        // Save in sessionStorage so we don't annoy them multiple times per session
        sessionStorage.setItem("exitIntentTriggered", "true");
      }
    };

    // Only set it up if it hasn't fired in this session
    if (!sessionStorage.getItem("exitIntentTriggered")) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full overflow-hidden"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-6 text-yellow-500">
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Espere! Podemos te ajudar
              </h3>
              <p className="text-slate-600 mb-8">
                Fale agora com um advogado e tire suas dúvidas com rapidez, segurança e confidencialidade total. Não postergue seus direitos.
              </p>

              <a 
                href="https://wa.me/5511995544304?text=Olá,%20estava%20saindo%20do%20site%20mas%20decidi%20pedir%20ajuda."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsVisible(false)}
                className="w-full flex items-center justify-center p-4 bg-primary text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg font-medium text-base sm:text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                <span>Falar no WhatsApp agora</span>
              </a>
              
              <button
                onClick={() => setIsVisible(false)}
                className="mt-4 text-sm text-slate-400 hover:text-slate-600 font-medium"
              >
                Talvez mais tarde
              </button>
            </div>
            
            {/* Decors */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
