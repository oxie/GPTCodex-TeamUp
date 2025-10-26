import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Zap, Shield, FileCode, Users, BarChart, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
    scrolled 
      ? "bg-white/90 shadow-md py-2" 
      : "bg-transparent py-4"
  }`;

  const expertiseDropdownItems = [
    { icon: <Brain size={16} />, label: "AI Infrastructure", href: "#services" },
    { icon: <Globe size={16} />, label: "Cloud Engineering", href: "#services" },
    { icon: <Zap size={16} />, label: "DevOps & GitOps", href: "#services" },
    { icon: <FileCode size={16} />, label: "Infrastructure as Code", href: "#services" },
    { icon: <Shield size={16} />, label: "AI Systems Security", href: "#ai-expertise" },
  ];

  const mobileNavVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" }
  };

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-xl font-bold text-white">VP</span>
                </div>
                <div className="ml-3">
                  <span className="text-lg font-semibold text-slate-800">Valentin Petrov</span>
                  <span className="block text-xs">
                    <span className="text-indigo-600 font-medium">Gen</span>
                    <span className="text-blue-600 font-medium">Ops</span>
                    <span className="text-slate-500"> | Next-Gen AI Infrastructure</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:ml-10 md:flex md:space-x-2">
              <a href="#hero" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium">
                Home
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-slate-700 hover:text-primary flex items-center px-3 py-2 text-sm font-medium focus:outline-none">
                    Expertise <ChevronDown size={16} className="ml-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 p-2">
                  {expertiseDropdownItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <a href={item.href} className="flex items-center py-2 cursor-pointer">
                        <span className="mr-2 text-primary">{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <a href="#portfolio" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium">
                Portfolio
              </a>
              
              <a href="#about" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium">
                About
              </a>
              
              <a href="#contact" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center space-x-4">
            <div className="flex items-center border-r border-slate-200 pr-4">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                Open to Work
              </Badge>
            </div>
            <a href="#contact">
              <Button className="font-medium">
                Contact Me
              </Button>
            </a>
          </div>
          
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-slate-700" : "text-slate-800"
              } hover:text-primary hover:bg-primary-50 focus:outline-none transition-colors`}
              onClick={toggleMobileMenu}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileNavVariants}
            className="md:hidden bg-white shadow-lg overflow-hidden fixed top-[60px] left-0 right-0 z-50"
          >
            <div className="px-4 pt-3 pb-4 space-y-1 divide-y divide-slate-100 max-h-[80vh] overflow-y-auto">
              <a 
                href="#hero" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              
              <div className="pt-2">
                <div className="px-3 py-2 text-sm font-medium text-slate-500">Expertise</div>
                {expertiseDropdownItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary ml-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-primary">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
              
              <a 
                href="#portfolio" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              
              <a 
                href="#about" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              
              <a 
                href="#ai-expertise" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Expertise
              </a>
              
              <a 
                href="#contact" 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="pt-2 pb-1">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full justify-center" size="lg">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
