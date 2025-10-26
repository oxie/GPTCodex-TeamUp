import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import AIExpertise from "@/components/AIExpertise";
import EnterprisePartners from "@/components/EnterprisePartners";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = function(e: Event) {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <AIExpertise />
        <EnterprisePartners />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
