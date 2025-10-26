import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Terminal, Braces, Search, Code, Brain, Sparkles, Workflow, LineChart, Bot, GitBranch, Database, Share, Microscope } from "lucide-react";

const AIExpertise = () => {
  const aiExperienceTimeline = [
    {
      year: "2017-2018",
      title: "Neural Networks & Reinforcement Learning",
      company: "PaySafe",
      role: "DevOps Engineer",
      description: "Early adoption of AI technologies while maintaining development environments and implementing PCI-compliant infrastructure with tools like OpenStack and OpenShift.",
      technologies: ["OpenAI Gym", "TensorFlow", "Ansible", "Kubernetes", "Docker"],
      icon: <Brain className="h-8 w-8 text-primary/80" />
    },
    {
      year: "2018",
      title: "Computer Vision & Generative Models",
      company: "Gaming Innovation Group",
      role: "SysOps Engineer",
      description: "Explored computer vision models while managing cloud infrastructure using Terraform and implementing container orchestration with DC/OS and Kubernetes.",
      technologies: ["GANs", "CNNs", "Terraform", "Docker", "Prometheus"],
      icon: <Sparkles className="h-8 w-8 text-primary/80" />
    },
    {
      year: "2018-2023",
      title: "Diffusion Models & Creative AI",
      company: "PaySafe",
      role: "DevOps Engineer",
      description: "Experimented with diffusion models while refactoring CI/CD stacks and implementing HashiCorp Vault for secret management in secure payment systems.",
      technologies: ["Stable Diffusion", "Bamboo", "Ansible", "AWS", "Vault"],
      icon: <Terminal className="h-8 w-8 text-primary/80" />
    },
    {
      year: "2022-2023",
      title: "LLMs & Prompt Engineering",
      company: "PaySafe",
      role: "DevOps Engineer",
      description: "Explored GPT models and prompt engineering techniques while automating DevOps processes and managing releases in a highly-secure financial environment.",
      technologies: ["GPT-3/4", "AWS", "F5", "Akamai", "Ansible"],
      icon: <Code className="h-8 w-8 text-primary/80" />
    },
    {
      year: "2023-Present",
      title: "AI Agents & Enterprise Integration",
      company: "Nexo",
      role: "Senior DevOps Engineer",
      description: "Building AI agent architectures while managing AWS cloud infrastructure, implementing GitOps with FluxCD and optimizing Kubernetes deployments for crypto platform.",
      technologies: ["LangChain", "AWS EKS", "FluxCD", "Terraform", "Prometheus"],
      icon: <Workflow className="h-8 w-8 text-primary/80" />
    }
  ];

  const aiTechnologyCategories = [
    {
      category: "Foundation Models",
      technologies: [
        { name: "OpenAI GPT-4", description: "Expert-level usage of GPT-4 for various applications, including code generation and complex reasoning tasks." },
        { name: "Google Gemini", description: "Implementation of Google's multimodal AI system for enterprise applications." },
        { name: "Claude", description: "Integrating Anthropic's Claude for enterprise use cases requiring enhanced safety and reliability." },
        { name: "Llama 2/3", description: "Deployment of Meta's open-source LLMs for on-premises and privacy-focused applications." },
        { name: "Mistral", description: "Working with Mistral AI's high-performance models for specialized enterprise applications." }
      ],
      icon: <Brain />
    },
    {
      category: "AI Frameworks",
      technologies: [
        { name: "LangChain", description: "Building complex chains and agents for enterprise-grade applications with advanced retrieval capabilities." },
        { name: "TensorFlow", description: "Deep expertise with Google's machine learning framework for building neural networks and ML pipelines." },
        { name: "PyTorch", description: "Developing and training custom neural network models for specialized enterprise applications." },
        { name: "Hugging Face", description: "Leveraging the Transformers ecosystem for fine-tuning and deploying models at scale." },
        { name: "JAX", description: "Utilizing Google's high-performance numerical computing library for research applications." }
      ],
      icon: <Braces />
    },
    {
      category: "AI Tools & Environments",
      technologies: [
        { name: "Google Colab", description: "Advanced usage for prototyping, training, and experimenting with large AI models and datasets." },
        { name: "LM Studio", description: "Local deployment and optimization of language models for privacy-sensitive applications." },
        { name: "OpenAI API", description: "Enterprise integration of OpenAI's API suite for production applications." },
        { name: "n8n", description: "Creating sophisticated automation workflows with AI-powered agent integrations." },
        { name: "Google ADK", description: "Building with Google's AI Development Kit to create next-generation applications." }
      ],
      icon: <Terminal />
    },
    {
      category: "AI Coding Assistants",
      technologies: [
        { name: "Cursor", description: "Advanced AI-powered IDE for intelligent code completion, refactoring, and generation across multiple languages." },
        { name: "Cline", description: "Command-line AI assistant for developers to implement features and solve complex problems directly in their terminal." },
        { name: "Roo Code", description: "Intelligent coding assistant for automating routine tasks and augmenting developer workflows." },
        { name: "Windsurf", description: "Experimental browser-based AI code editor with advanced reasoning and contextual understanding." },
        { name: "GitHub Copilot", description: "Expertise with AI pair programming assistants for various integrated development environments." }
      ],
      icon: <Code />
    },
    {
      category: "AI Agents",
      technologies: [
        { name: "AutoGPT", description: "Developing autonomous AI agents capable of executing complex tasks with minimal human guidance." },
        { name: "MetaGPT", description: "Implementing multi-agent systems for collaborative problem-solving in enterprise environments." },
        { name: "GPT Researcher", description: "Creating specialized AI research assistants for knowledge-intensive tasks." },
        { name: "MCP AGENTS", description: "Pioneering work on terminal sandbox and browser-based AI agents for enterprise applications." },
        { name: "OpenAI Interpreter", description: "Leveraging Code Interpreter for data analysis and computational tasks." }
      ],
      icon: <Bot />
    }
  ];

  const enterpriseAIApplications = [
    {
      title: "DevOps Automation",
      description: "AI-powered GitOps systems that autonomously manage infrastructure, predict issues, and optimize deployments.",
      features: ["Anomaly detection", "Self-healing infrastructure", "Intelligent scaling", "Predictive maintenance"],
      icon: <GitBranch className="h-8 w-8 text-primary/80" />
    },
    {
      title: "Intelligent Observability",
      description: "Advanced monitoring systems with AI-driven insights that transform telemetry data into actionable intelligence.",
      features: ["Pattern recognition", "Root cause analysis", "Predictive alerts", "Natural language querying"],
      icon: <LineChart className="h-8 w-8 text-primary/80" />
    },
    {
      title: "Knowledge Engineering",
      description: "Enterprise knowledge bases augmented with vector search and RAG for intelligent information retrieval.",
      features: ["Semantic search", "Document understanding", "Contextual responses", "Knowledge graph integration"],
      icon: <Database className="h-8 w-8 text-primary/80" />
    },
    {
      title: "Multimodal AI Integration",
      description: "Solutions that combine text, image, and code modalities for comprehensive enterprise automation.",
      features: ["Cross-modal reasoning", "Visual programming", "Document processing", "Multimedia analysis"],
      icon: <Share className="h-8 w-8 text-primary/80" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="ai-expertise" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1">
            AI & DevOps Expertise Since 2017
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            My Technology Journey
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            My experience combines cutting-edge AI technologies with robust DevOps practices, creating reliable infrastructure for advanced AI systems
          </p>
        </motion.div>

        {/* AI Experience Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">AI & DevOps Career Journey</h3>
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary opacity-20 rounded-full"></div>
            
            <motion.div 
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {aiExperienceTimeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h4>
                    <div className="text-indigo-600 font-medium mb-1 text-sm">{item.company} | {item.role}</div>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="bg-white/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 flex justify-end'}`}>
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* AI Technologies */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">AI Technology Expertise</h3>
          
          {/* First row - 3 cards */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiTechnologyCategories.slice(0, 3).map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-slate-50 border-b border-slate-100">
                    <div className="flex items-center">
                      <div className="mr-3 text-primary">
                        {category.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">{category.category}</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3 flex-1">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                        <h5 className="font-medium text-slate-900 mb-1">{tech.name}</h5>
                        <p className="text-sm text-slate-600">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Second row - 2 cards centered */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {aiTechnologyCategories.slice(3, 5).map((category, index) => (
                <motion.div 
                  key={index + 3}
                  className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                >
                  <div className="p-4 bg-slate-50 border-b border-slate-100">
                    <div className="flex items-center">
                      <div className="mr-3 text-primary">
                        {category.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">{category.category}</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3 flex-1">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                        <h5 className="font-medium text-slate-900 mb-1">{tech.name}</h5>
                        <p className="text-sm text-slate-600">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Focus Areas */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">My AI Focus Areas</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {enterpriseAIApplications.map((app, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="mb-4 rounded-full bg-primary/10 p-3 self-start">
                  {app.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">{app.title}</h4>
                <p className="text-sm text-slate-600 mb-4 flex-grow">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Coming Soon: MCP API Servers */}
        <div className="mt-20 mb-24 relative overflow-hidden bg-slate-900 rounded-xl p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/30 text-white border-primary/40 px-4 py-1.5">
              Personal Project
            </Badge>
            <h3 className="text-3xl font-bold text-white mb-4">AI Agent Infrastructure</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              My ongoing project to create a robust infrastructure for AI agent development and deployment
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-6 w-6 text-primary-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Terminal Sandboxes</h4>
                <p className="text-sm text-slate-400">
                  Secure, isolated environments for AI agents to safely execute terminal commands and develop software solutions.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-6 w-6 text-primary-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Browser-Based Agents</h4>
                <p className="text-sm text-slate-400">
                  Intelligent agents that can navigate, analyze, and interact with web interfaces to automate complex workflows.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Share className="h-6 w-6 text-primary-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise API</h4>
                <p className="text-sm text-slate-400">
                  Scalable infrastructure for integrating AI agents with existing enterprise systems and workflows.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://github.com/valentinpetrov" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                See My GitHub
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 text-center">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 px-3 py-1">
            Looking Forward
          </Badge>
          <p className="text-xl font-medium text-slate-800 mb-4">
            Bridging AI capabilities with infrastructure engineering
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto">
            I'm passionate about building the infrastructure that powers the next generation of AI systems, making them reliable, scalable, and accessible for various applications.
          </p>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;
