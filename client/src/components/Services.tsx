import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { CheckItem } from "@/components/ui/check-item";
import { ChevronRight, LayoutGrid, Cloud, Cpu } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Service } from "@shared/schema";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  // Expertise areas to showcase skills
  const defaultServices = [
    {
      id: 1,
      title: "AI Infrastructure Engineering",
      description: "Designing and implementing infrastructure for AI systems at scale",
      icon: "LayoutGrid",
      color: "primary",
      features: ["Large Language Model Deployment", "GPU/TPU Cluster Management", "AI Systems Scaling"],
      order: 0
    },
    {
      id: 2,
      title: "DevOps & Cloud Architecture",
      description: "Building robust cloud environments with modern DevOps practices",
      icon: "Cloud",
      color: "secondary",
      features: ["Multi-Cloud Strategy", "Infrastructure as Code", "GitOps Workflows"],
      order: 1
    },
    {
      id: 3,
      title: "MLOps Automation",
      description: "Streamlining machine learning workflows from development to production",
      icon: "Cpu",
      color: "accent",
      features: ["CI/CD for ML Models", "Monitoring & Observability", "Model Versioning"],
      order: 2
    }
  ];

  const getIconComponent = (iconName: string) => {
    // Use directly imported icons to prevent errors
    switch (iconName) {
      case "LayoutGrid":
        return <LayoutGrid className="h-6 w-6" />;
      case "Cloud":
        return <Cloud className="h-6 w-6" />;
      case "Cpu":
        return <Cpu className="h-6 w-6" />;
      default:
        // Fallback for other icons
        const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
        return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
    }
  };

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "bg-primary/10 text-primary",
      secondary: "bg-secondary/10 text-secondary",
      accent: "bg-emerald-600/10 text-emerald-600"
    };
    
    return colorMap[color] || colorMap.primary;
  };

  const displayServices = services || defaultServices;

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Expertise Areas</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">AI & Cloud Engineering Specialties</p>
          <p className="mt-5 max-w-xl mx-auto text-xl text-slate-500">
            My core technical specialties combine AI infrastructure engineering with modern DevOps practices to build scalable, reliable systems.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service) => (
            <div key={service.id} className="relative group">
              <div className="h-full flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="absolute h-1 w-full top-0 left-0 bg-gradient-to-r from-primary/80 to-primary/20"></div>
                <div className="px-6 py-8 flex-1 flex flex-col">
                  <div className={`w-14 h-14 rounded-lg ${getColorClass(service.color)} flex items-center justify-center mb-5 shadow-sm`}>
                    {getIconComponent(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-7 flex-1">
                    {service.features.map((feature, idx) => (
                      <CheckItem key={idx} text={feature} />
                    ))}
                  </ul>
                  <a href="#portfolio" className="text-primary hover:text-primary-700 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    See my work <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact">
            <Button 
              variant="outline" 
              className="mt-8 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary/90 px-6 py-6 shadow-sm"
            >
              Connect With Me
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
