import { Button } from "@/components/ui/button";
import Terminal from "@/components/ui/terminal";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  Zap, 
  Code, 
  Server, 
  GitBranch, 
  GitMerge,
  Cpu,
  LayoutGrid,
  Cloud,
  Globe,
  Shield,
  FileCode,
  Users,
  Network,
  CloudCog,
  Workflow,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Menu,
  X 
} from "lucide-react";

const Hero = () => {
  const techIcons = [
    { 
      name: "Kubernetes", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" 
    },
    { 
      name: "Docker", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" 
    },
    { 
      name: "Terraform", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" 
    },
    { 
      name: "AWS", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
    },
    { 
      name: "Google Cloud", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
    },
    { 
      name: "Azure", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
    },
    { 
      name: "Python", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
    },
    { 
      name: "TensorFlow", 
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" 
    },
    {
      name: "PyTorch",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Brain className="h-5 w-5 text-indigo-600" />,
      title: "AI Engineering",
      description: "LLM deployment & optimization"
    },
    {
      icon: <CloudCog className="h-5 w-5 text-blue-600" />,
      title: "Cloud Architecture",
      description: "Multi-cloud systems expert"
    },
    {
      icon: <GitBranch className="h-5 w-5 text-green-600" />,
      title: "CI/CD & GitOps",
      description: "Automated workflows"
    }
  ];

  return (
    <section id="hero" className="hero-pattern pt-28 pb-20 sm:pt-32 sm:pb-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="lg:col-span-6" 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex flex-wrap gap-3 mb-5">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1">
                AI Infrastructure
              </Badge>
              <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20 hover:bg-indigo-500/20 transition-colors px-3 py-1">
                Cloud Engineering
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20 transition-colors px-3 py-1">
                DevOps Specialist
              </Badge>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block">Valentin Petrov</span>
              <span className="gradient-text">GenOps & AI Engineer</span>
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 text-xl sm:text-2xl mt-4 max-w-3xl">
              Building <span className="text-primary font-semibold">next-generation infrastructure</span> for AI systems with modern DevOps practices and cutting-edge technologies.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white/50">Kubernetes</Badge>
              <Badge variant="outline" className="bg-white/50">AI Infrastructure</Badge>
              <Badge variant="outline" className="bg-white/50">GitOps</Badge>
              <Badge variant="outline" className="bg-white/50">Cloud Engineering</Badge>
              <Badge variant="outline" className="bg-white/50">LLM Systems</Badge>
            </div>
            
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a href="#contact">
                  <Button size="lg" className="w-full md:text-lg font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Contact Me
                  </Button>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#portfolio">
                  <Button size="lg" variant="outline" className="w-full md:text-lg font-medium">
                    View My Projects
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 border border-slate-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-full w-10 h-10 bg-slate-50 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-xs text-slate-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10 grid grid-cols-5 gap-3 sm:grid-cols-5 lg:grid-cols-9"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {techIcons.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex justify-center items-center opacity-70 hover:opacity-100 transition-all hover:scale-110"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <img src={tech.url} alt={tech.name} className="h-9 w-9" title={tech.name} />
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-8 text-sm text-slate-500 flex items-center flex-wrap">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <span>Recent Work:</span>
              <div className="font-medium ml-2 text-slate-700 flex flex-wrap">
                <span className="whitespace-nowrap">AI Infra Design</span>
                <span className="mx-1">·</span>
                <span className="whitespace-nowrap">LLM Deployment</span>
                <span className="mx-1">·</span>
                <span className="whitespace-nowrap">K8s Optimization</span>
                <span className="mx-1">·</span>
                <span className="whitespace-nowrap">Cloud Migration</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 lg:mt-0 lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl terminal-glow">
              {/* Enhanced terminal glow and gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 opacity-90 blur-xl -z-10"></div>
              
              <div className="bg-slate-900/95 p-6 sm:p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-3">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-2 py-1 rounded-md bg-slate-800/90 border border-slate-700/30 text-xs text-green-400 font-mono flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                      valentin@genops ~ /projects
                    </div>
                  </div>
                </div>
                <Terminal />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
