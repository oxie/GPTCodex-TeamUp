import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Services",
      links: [
        { name: "GitOps Automation", url: "#" },
        { name: "Cloud Native", url: "#" },
        { name: "Platform Engineering", url: "#" },
        { name: "Infrastructure as Code", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Portfolio", url: "#" },
        { name: "Case Studies", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Documentation", url: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", url: "#" },
        { name: "Contact", url: "#" },
        { name: "Privacy", url: "#" },
        { name: "Terms", url: "#" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-6 w-6" />, 
      url: "https://github.com" 
    },
    { 
      icon: <Linkedin className="h-6 w-6" />, 
      url: "https://linkedin.com" 
    },
    { 
      icon: <Twitter className="h-6 w-6" />, 
      url: "https://twitter.com" 
    }
  ];

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">VP</span>
              <span className="ml-2 text-slate-300 font-medium">DevOps & AI</span>
            </div>
            <p className="mt-4 text-slate-400">
              Transforming infrastructure with GitOps methodology and building innovative AI-powered developer tools.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} className="text-base text-slate-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-slate-400 text-center">
            &copy; {currentYear} Valentin Petrov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
