"use client"
import { Scale, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-8 pb-8 border-b border-slate-800">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col items-start mb-2">
              <img 
                src="/Logoo.png" 
                alt="Dr. Henrique Fernandes Logo" 
                className="h-24 md:h-56 w-auto object-contain mb-2 brightness-200 contrast-125 origin-left transform md:scale-110" 
              />
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Escritório de advocacia com foco em resoluções estratégicas, combinando expertise jurídica profunda e atendimento especializado de alto padrão.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/drhenrique_fernandes/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300"
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
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/5511995544304?text=Olá,%20Dr.%20Henrique,%20vim%20pelo%20site." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre o Advogado</a></li>
              <li><a href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legais</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>OAB/SP 530.036</li>
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center text-xs text-slate-500 space-y-2">
          <p>&copy; {new Date().getFullYear()} Dr. Henrique Fernandes. Todos os direitos reservados.</p>
          <p className="flex items-center">
            Desenvolvido por 
            <a 
              href="https://www.instagram.com/lucasmarques676/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-1 text-slate-300 hover:text-white hover:underline transition-all font-medium"
            >
              Lucas Marques
            </a> 
            <span className="ml-1 text-sm">💻</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
