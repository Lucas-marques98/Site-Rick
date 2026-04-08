"use client"
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">
            Onde Estamos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Atendemos presencialmente e de forma online. Venha nos visitar ou agende uma consulta pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Endereço</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Av. Paulista, 1000, Sala 1002<br />
                    Bela Vista – São Paulo, SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Horário de Atendimento</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h<br />
                    <span className="text-primary font-medium">Urgências: WhatsApp 24h</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.google.com/maps/search/Av.+Paulista,+1000,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-primary to-slate-800 text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Navigation className="w-5 h-5" />
              Abrir no Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative">
              {/* Map header bar */}
              <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-slate-100 rounded-full px-4 py-1.5 text-xs text-slate-500 truncate">
                  maps.google.com · Av. Paulista, São Paulo
                </div>
              </div>

              {/* Google Maps Embed — Av. Paulista, São Paulo */}
              <iframe
                title="Localização do Escritório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.157!2d-46.6533!3d-23.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1712480000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
