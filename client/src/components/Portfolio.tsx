import { useQuery } from "@tanstack/react-query";
import { PortfolioItem } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const { data: portfolioItems, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  // Fallback portfolio items in case of loading or error
  const defaultPortfolioItems = [
    {
      id: 1,
      title: "AI Commit Assistant",
      description: "Generate semantic Git commit messages using AI that follow convention and capture context from code changes.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["GitHub App", "GPT-4", "Python"],
      category: "Dev Tools",
      order: 0
    },
    {
      id: 2,
      title: "CursorAI Extension",
      description: "VSCode extension bringing advanced AI-assisted code generation and refactoring capabilities with local model support.",
      imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["VSCode", "TypeScript", "LLM", "Ollama"],
      category: "IDE",
      order: 1
    },
    {
      id: 3,
      title: "Terminal GPT",
      description: "Command-line AI assistant that provides context-aware code generation, debugging help, and documentation lookup without leaving the terminal.",
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["CLI", "Rust", "GPT-4", "Developer Tools"],
      category: "CLI",
      order: 2
    },
    {
      id: 4,
      title: "ModelMerge Studio",
      description: "Interactive tool for merging and fine-tuning multiple LLMs to create specialized models for specific tasks and domains.",
      imageUrl: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["LLM", "Model Merging", "GGUF", "PyTorch"],
      category: "AI Tools",
      order: 3
    },
    {
      id: 5,
      title: "PromptLab",
      description: "Collaborative platform for creating, testing, and sharing prompts with version control and automated testing capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1545986753-d894f3555e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Prompt Engineering", "NextJS", "Collaboration", "Testing"],
      category: "Prompt Tools",
      order: 4
    },
    {
      id: 6,
      title: "AI Inference Bench",
      description: "Comprehensive benchmarking tool for AI model inference across various hardware configurations and optimization techniques.",
      imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Benchmarking", "CUDA", "TensorRT", "Inference"],
      category: "Performance",
      order: 5
    }
  ];

  const displayItems = portfolioItems || defaultPortfolioItems;

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Featured Projects</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">My Recent Work</p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-slate-500">
            Selected projects showcasing my expertise in AI infrastructure, cloud engineering, and DevOps
          </p>
        </div>

        <div className="mt-16">
          {/* Platforms Section */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* CrypticLevel */}
            <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-slate-100">
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 relative overflow-hidden text-white">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Cryptic-Level.com</h3>
                    <p className="text-lg text-white/90">
                      Decentralized AI Computing Platform
                    </p>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <p className="mb-6 text-slate-700">
                    AI-powered blockchain network where distributed nodes collectively power AI inference, creating a decentralized AI computing platform with enhanced performance and reliability.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">Blockchain</Badge>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700">AI Inference</Badge>
                    <Badge variant="outline" className="bg-pink-50 text-pink-700">Distributed Computing</Badge>
                  </div>
                  <a 
                    href="https://cryptic-level.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-primary-700 font-medium"
                  >
                    Visit Platform
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* SpicyOrbit */}
            <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-slate-100">
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 p-8 relative overflow-hidden text-white">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">SpicyOrbit.com</h3>
                    <p className="text-lg text-white/90">
                      GenOps AI Infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <p className="mb-6 text-slate-700">
                    GenOps platform that transforms infrastructure management with AI-powered automation, compliance monitoring, and intelligent scaling for enterprise environments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">GenOps</Badge>
                    <Badge variant="outline" className="bg-cyan-50 text-cyan-700">Kubernetes</Badge>
                    <Badge variant="outline" className="bg-teal-50 text-teal-700">Cloud Native</Badge>
                  </div>
                  <a 
                    href="https://spicyorbit.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-primary-700 font-medium"
                  >
                    Visit Platform
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Platforms */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* CookieDrift */}
            <div className="bg-white overflow-hidden shadow-md rounded-xl border border-slate-100">
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-6 relative overflow-hidden text-white">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-1">CookieDrift.com</h3>
                    <p className="text-md text-white/90">
                      Intelligent Cookie Management
                    </p>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <p className="mb-4 text-slate-700 text-sm">
                    Intelligent cookie management platform with AI-driven consent optimization and privacy compliance automation for enterprise websites.
                  </p>
                  <a 
                    href="https://cookiedrift.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-primary-700 font-medium text-sm"
                  >
                    Visit Platform
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* GitOpsNow */}
            <div className="bg-white overflow-hidden shadow-md rounded-xl border border-slate-100">
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-6 relative overflow-hidden text-white">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-1">GitOpsNow.com</h3>
                    <p className="text-md text-white/90">
                      Enterprise DevOps Transformation
                    </p>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <p className="mb-4 text-slate-700 text-sm">
                    Enterprise DevOps consultancy providing GitOps transformation services, cloud-native architecture, and CI/CD pipeline optimization.
                  </p>
                  <a 
                    href="https://gitopsnow.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-primary-700 font-medium text-sm"
                  >
                    Visit Platform
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Projects Section */}
        <div className="mt-16 bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-inner">
          <div className="text-center mb-8">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-3 py-1 mb-3">
              Open Source
            </Badge>
            <h3 className="text-2xl font-bold text-slate-800">Personal Projects</h3>
            <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
              Personal projects I'm currently working on to improve developer productivity and AI infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">AI Commit Assistant</h4>
              <p className="text-sm text-slate-600 mb-3">
                Generating semantic Git commit messages from code changes using advanced AI models.
              </p>
              <Badge variant="outline" className="bg-primary-50 text-primary-700">Coming Q3 2024</Badge>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">CursorAI Extension</h4>
              <p className="text-sm text-slate-600 mb-3">
                AI-assisted VSCode extension for code generation with local model support.
              </p>
              <Badge variant="outline" className="bg-primary-50 text-primary-700">Coming Q3 2024</Badge>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Terminal GPT</h4>
              <p className="text-sm text-slate-600 mb-3">
                Command-line AI assistant with context-aware code generation and debugging.
              </p>
              <Badge variant="outline" className="bg-primary-50 text-primary-700">Coming Q4 2024</Badge>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">ModelMerge Studio</h4>
              <p className="text-sm text-slate-600 mb-3">
                Tool for merging and fine-tuning LLMs for specialized tasks and domains.
              </p>
              <Badge variant="outline" className="bg-primary-50 text-primary-700">Coming Q1 2025</Badge>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="https://github.com/valentinpetrov" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className="mt-8 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary/90 px-6 py-6 shadow-sm"
            >
              View My GitHub Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
