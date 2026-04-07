import Navbar from "@/components/ui/Navbar";
import TopBar from "@/components/ui/TopBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import PracticeAreas from "@/components/sections/PracticeAreas";
import SocialProof from "@/components/sections/SocialProof";
import Authority from "@/components/sections/Authority";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import SocialProofPopup from "@/components/ui/SocialProofPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-0 overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Hero />
      <Authority />
      <About />
      <HowItWorks />
      <PracticeAreas />
      <SocialProof />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Utilities */}
      <FloatingWhatsApp />
      <ExitIntentPopup />
      <SocialProofPopup />
    </main>
  );
}
