"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Atuação", href: "#atuacao" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "top-0 bg-slate-900/85 backdrop-blur-md shadow-sm py-3" : "top-8 bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <a href="#" className="flex items-center transition-transform hover:scale-105">
            <img 
              src="/Logoo.png" 
              alt="Dr. Henrique Fernandes Logo" 
              className="h-28 md:h-48 w-auto object-contain drop-shadow-md -my-8 md:-my-12 transform scale-[1.15] md:scale-110" 
            />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-slate-300 hover:text-white" : "text-slate-200"}`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-5 pl-2 border-l border-white/20">
            <a 
              href="https://www.instagram.com/drhenrique_fernandes/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`transition-colors hover:text-pink-500 ${isScrolled ? "text-slate-300 hover:text-pink-500" : "text-slate-200"}`}
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique,%20gostaria%20de%20falar%20sobre%20um%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-md hover:bg-slate-800 transition-colors shadow-lg shadow-primary/20 text-sm font-medium active:scale-95 cursor-pointer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${isScrolled ? "text-white" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 mt-3 border-t border-slate-800 shadow-xl"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-200 font-medium hover:text-white transition-colors hover:bg-slate-800 p-2 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique,%20gostaria%20de%20falar%20sobre%20um%20caso."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-primary text-white py-3 rounded-md hover:bg-slate-800 transition-colors mt-2 active:scale-95"
              >
                Falar com Advogado
              </a>
              <a
                href="https://www.instagram.com/drhenrique_fernandes/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center flex items-center justify-center space-x-2 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white py-3 rounded-md hover:opacity-90 transition-opacity mt-2 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span>Seguir no Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
