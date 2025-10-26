import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Technology } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

// Define interface for default tech items that's compatible with Technology
interface DefaultTechItem {
  id: number;
  name: string;
  order: number | null;
  imageUrl: string;
  category: string;
}

// Define category data
const categoryData = [
  { id: "ai-models", name: "AI Models & LLMs", badge: "Production since 2017" },
  { id: "ai-frameworks", name: "AI Frameworks & MLOps", badge: "Enterprise Implementation" },
  { id: "ai-tools", name: "AI Tools & Vector DBs", badge: "RAG & Embeddings" },
  { id: "cloud", name: "Cloud Platforms & Services", badge: "Multi-Cloud Expert" },
  { id: "gitops", name: "GitOps & CI/CD", badge: "Automation Specialist" },
  { id: "devops", name: "DevOps & Infrastructure", badge: "IaC & Observability" },
  { id: "security", name: "Security & Compliance", badge: "Zero-Trust Architecture" }
];

// Default tech data grouped by category with proper types
const defaultTechnologies: DefaultTechItem[] = [
  // AI Models & LLMs
  { id: 101, name: "GPT-4o", order: 1, imageUrl: "https://img.icons8.com/color/240/chatgpt.png", category: "ai-models" },
  { id: 102, name: "Claude 3.5 Sonnet", order: 2, imageUrl: "https://img.icons8.com/fluency/240/circled-a.png", category: "ai-models" },
  { id: 103, name: "Gemini Pro", order: 3, imageUrl: "https://img.icons8.com/color/240/google-logo.png", category: "ai-models" },
  { id: 104, name: "Llama 3.1", order: 4, imageUrl: "https://img.icons8.com/color/240/meta.png", category: "ai-models" },
  { id: 105, name: "Mistral Large", order: 5, imageUrl: "https://img.icons8.com/fluency/240/m-cute.png", category: "ai-models" },
  { id: 106, name: "Cohere Command", order: 6, imageUrl: "https://img.icons8.com/fluency/240/c.png", category: "ai-models" },
  { id: 107, name: "Stable Diffusion", order: 7, imageUrl: "https://img.icons8.com/fluency/240/image.png", category: "ai-models" },
  { id: 108, name: "DALL-E 3", order: 8, imageUrl: "https://img.icons8.com/fluency/240/image-editing.png", category: "ai-models" },
  
  // AI Frameworks & MLOps
  { id: 201, name: "LangChain", order: 1, imageUrl: "https://img.icons8.com/fluency/240/chain.png", category: "ai-frameworks" },
  { id: 202, name: "TensorFlow", order: 2, imageUrl: "https://img.icons8.com/color/240/tensorflow.png", category: "ai-frameworks" },
  { id: 203, name: "PyTorch", order: 3, imageUrl: "https://img.icons8.com/color/240/pytorch.png", category: "ai-frameworks" },
  { id: 204, name: "Hugging Face", order: 4, imageUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/240/external-hugging-face-a-company-developing-open-source-machine-learning-logo-color-tal-revivo.png", category: "ai-frameworks" },
  { id: 205, name: "MLflow", order: 5, imageUrl: "https://img.icons8.com/fluency/240/workflow.png", category: "ai-frameworks" },
  { id: 206, name: "Weights & Biases", order: 6, imageUrl: "https://img.icons8.com/fluency/240/analytics.png", category: "ai-frameworks" },
  { id: 207, name: "Kubeflow", order: 7, imageUrl: "https://img.icons8.com/color/240/kubernetes.png", category: "ai-frameworks" },
  { id: 208, name: "Ray", order: 8, imageUrl: "https://img.icons8.com/fluency/240/distributed-computing.png", category: "ai-frameworks" },
  
  // AI Tools & Vector DBs
  { id: 301, name: "OpenAI API", order: 1, imageUrl: "https://img.icons8.com/color/240/openai-chatgpt.png", category: "ai-tools" },
  { id: 302, name: "Pinecone", order: 2, imageUrl: "https://img.icons8.com/fluency/240/database.png", category: "ai-tools" },
  { id: 303, name: "ChromaDB", order: 3, imageUrl: "https://img.icons8.com/fluency/240/database-view.png", category: "ai-tools" },
  { id: 304, name: "Weaviate", order: 4, imageUrl: "https://img.icons8.com/fluency/240/vector.png", category: "ai-tools" },
  { id: 305, name: "Ollama", order: 5, imageUrl: "https://img.icons8.com/fluency/240/laptop.png", category: "ai-tools" },
  { id: 306, name: "LM Studio", order: 6, imageUrl: "https://img.icons8.com/fluency/240/workstation.png", category: "ai-tools" },
  { id: 307, name: "Qdrant", order: 7, imageUrl: "https://img.icons8.com/fluency/240/search-database.png", category: "ai-tools" },
  { id: 308, name: "LangSmith", order: 8, imageUrl: "https://img.icons8.com/fluency/240/mind-map.png", category: "ai-tools" },
  
  // Cloud Platforms & Services
  { id: 401, name: "AWS", order: 1, imageUrl: "https://img.icons8.com/color/240/amazon-web-services.png", category: "cloud" },
  { id: 402, name: "Azure", order: 2, imageUrl: "https://img.icons8.com/fluency/240/azure-1.png", category: "cloud" },
  { id: 403, name: "GCP", order: 3, imageUrl: "https://img.icons8.com/color/240/google-cloud.png", category: "cloud" },
  { id: 404, name: "DigitalOcean", order: 4, imageUrl: "https://img.icons8.com/ios-filled/240/digitalocean.png", category: "cloud" },
  { id: 405, name: "Vercel", order: 5, imageUrl: "https://img.icons8.com/fluency/240/web-design.png", category: "cloud" },
  { id: 406, name: "Cloudflare", order: 6, imageUrl: "https://img.icons8.com/color/240/cloudflare.png", category: "cloud" },
  { id: 407, name: "Linode", order: 7, imageUrl: "https://img.icons8.com/color/240/linode.png", category: "cloud" },
  { id: 408, name: "Oracle Cloud", order: 8, imageUrl: "https://img.icons8.com/color/240/oracle-logo.png", category: "cloud" },
  
  // GitOps & CI/CD
  { id: 501, name: "GitHub Actions", order: 1, imageUrl: "https://img.icons8.com/fluency/240/github.png", category: "gitops" },
  { id: 502, name: "GitLab CI/CD", order: 2, imageUrl: "https://img.icons8.com/color/240/gitlab.png", category: "gitops" },
  { id: 503, name: "Bitbucket Pipelines", order: 3, imageUrl: "https://img.icons8.com/color/240/bitbucket.png", category: "gitops" },
  { id: 504, name: "Jenkins", order: 4, imageUrl: "https://img.icons8.com/color/240/jenkins.png", category: "gitops" },
  { id: 505, name: "ArgoCD", order: 5, imageUrl: "https://img.icons8.com/fluency/240/ship-wheel.png", category: "gitops" },
  { id: 506, name: "FluxCD", order: 6, imageUrl: "https://img.icons8.com/fluency/240/synchronize.png", category: "gitops" },
  { id: 507, name: "TeamCity", order: 7, imageUrl: "https://img.icons8.com/color/240/teamcity.png", category: "gitops" },
  { id: 508, name: "CircleCI", order: 8, imageUrl: "https://img.icons8.com/color/240/circleci.png", category: "gitops" },
  
  // DevOps & Infrastructure
  { id: 601, name: "Kubernetes", order: 1, imageUrl: "https://img.icons8.com/color/240/kubernetes.png", category: "devops" },
  { id: 602, name: "Docker", order: 2, imageUrl: "https://img.icons8.com/fluency/240/docker.png", category: "devops" },
  { id: 603, name: "Terraform", order: 3, imageUrl: "https://img.icons8.com/color/240/terraform.png", category: "devops" },
  { id: 604, name: "Ansible", order: 4, imageUrl: "https://img.icons8.com/color/240/ansible.png", category: "devops" },
  { id: 605, name: "Helm", order: 5, imageUrl: "https://img.icons8.com/fluency/240/helm.png", category: "devops" },
  { id: 606, name: "Prometheus", order: 6, imageUrl: "https://img.icons8.com/color/240/prometheus-app.png", category: "devops" },
  { id: 607, name: "Grafana", order: 7, imageUrl: "https://img.icons8.com/color/240/grafana.png", category: "devops" },
  { id: 608, name: "Pulumi", order: 8, imageUrl: "https://img.icons8.com/fluency/240/cloud-storage.png", category: "devops" },
  
  // Security & Compliance
  { id: 701, name: "HashiCorp Vault", order: 1, imageUrl: "https://img.icons8.com/fluency/240/safe.png", category: "security" },
  { id: 702, name: "AWS WAF", order: 2, imageUrl: "https://img.icons8.com/fluency/240/firewall.png", category: "security" },
  { id: 703, name: "Falco", order: 3, imageUrl: "https://img.icons8.com/fluency/240/cyber-security.png", category: "security" },
  { id: 704, name: "Kyverno", order: 4, imageUrl: "https://img.icons8.com/fluency/240/rules.png", category: "security" },
  { id: 705, name: "Chaos Monkey", order: 5, imageUrl: "https://img.icons8.com/fluency/240/bug.png", category: "security" },
  { id: 706, name: "Trivy", order: 6, imageUrl: "https://img.icons8.com/fluency/240/security-checked.png", category: "security" },
  { id: 707, name: "Snyk", order: 7, imageUrl: "https://img.icons8.com/color/240/snyk.png", category: "security" },
  { id: 708, name: "OWASP ZAP", order: 8, imageUrl: "https://img.icons8.com/fluency/240/security-shield-green.png", category: "security" }
];

// Define TechWithCategory type
type TechWithCategory = Technology | DefaultTechItem;

// Animation variants
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

const TechStack = () => {
  const { data: apiTechnologies } = useQuery<Technology[]>({
    queryKey: ["/api/technologies"],
  });

  // Use useMemo to avoid infinite re-renders with useEffect
  const technologies = useMemo(() => {
    // If API data is available, use it, otherwise use default data
    if (apiTechnologies && apiTechnologies.length > 0) {
      return apiTechnologies;
    }
    return defaultTechnologies;
  }, [apiTechnologies]);

  // Group technologies by category
  const groupedTechnologies = useMemo(() => {
    const result: Record<string, TechWithCategory[]> = {};
    
    // Initialize all categories
    categoryData.forEach(category => {
      result[category.id] = [];
    });
    
    // Add technologies to their categories with error handling
    technologies.forEach(tech => {
      if (tech && tech.name && tech.category && result[tech.category] !== undefined) {
        result[tech.category].push({
          ...tech,
          imageUrl: tech.imageUrl || '' // Ensure imageUrl is never undefined
        });
      }
    });
    
    // Sort each category alphabetically by name
    Object.keys(result).forEach(categoryId => {
      result[categoryId] = result[categoryId].sort((a, b) => a.name.localeCompare(b.name));
    });
    
    return result;
  }, [technologies]);

  return (
    <section id="tech-stack" className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Technology Stack</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-6">
            Proven expertise across cutting-edge AI models, enterprise cloud platforms, and automation tools that have powered successful deployments for financial services, gaming, and fintech companies.
          </p>
          <div className="flex justify-center gap-8 text-sm text-slate-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">7+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div>Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div>Production Ready</div>
            </div>
          </div>
        </div>

        {/* Core Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-start mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M12 8v8"/><path d="M19 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path><path d="M5 8H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"></path><path d="M17 17h1a2 2 0 0 1 2 2v1"/><path d="M7 17H6a2 2 0 0 0-2 2v1"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">AI & Machine Learning</h3>
                <p className="text-sm text-slate-600 mb-3">Production-ready AI implementations that deliver measurable business impact and ROI.</p>
                <div className="text-xs text-primary font-medium mb-3">✓ Reduced inference costs by 60% • ✓ 99.9% uptime SLA</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">GPT-4 • Claude</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">LangChain</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">TensorFlow</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">PyTorch</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-start mb-5">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">DevOps & Automation</h3>
                <p className="text-sm text-slate-600 mb-3">Enterprise-grade CI/CD pipelines that eliminate manual deployments and reduce time-to-market.</p>
                <div className="text-xs text-blue-600 font-medium mb-3">✓ 70% faster deployments • ✓ Zero-downtime releases</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">Kubernetes</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">Docker</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">Terraform</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">GitOps</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-start mb-5">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Cloud Infrastructure</h3>
                <p className="text-sm text-slate-600 mb-3">Scalable, secure architectures that handle millions of transactions with enterprise-level reliability.</p>
                <div className="text-xs text-indigo-600 font-medium mb-3">✓ PCI-DSS compliant • ✓ 99.99% availability</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">AWS Expert</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">Azure</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">GCP</span>
              </div>
              <div className="flex items-center py-2 px-3 bg-slate-50 rounded-lg text-xs">
                <span className="font-medium text-slate-700">Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technologies Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Enterprise Technology Stack</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Production-ready infrastructure and AI systems powering mission-critical applications across fintech, gaming, and enterprise sectors
            </p>
          </div>
          
          {/* Enhanced Technology Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {/* AI & Machine Learning */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 opacity-60"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mr-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M12 8v8"/><path d="M19 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path><path d="M5 8H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"></path><path d="M17 17h1a2 2 0 0 1 2 2v1"/><path d="M7 17H6a2 2 0 0 0-2 2v1"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">AI & Machine Learning</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Production Ready</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Show AI Models, Frameworks, and Tools combined */}
                  {[
                    { name: "GPT-4o", imageUrl: "https://img.icons8.com/color/240/chatgpt.png" },
                    { name: "Claude 3.5 Sonnet", imageUrl: "https://img.icons8.com/fluency/240/circled-a.png" },
                    { name: "Llama 3.1", imageUrl: "https://img.icons8.com/color/240/meta.png" },
                    { name: "LangChain", imageUrl: "https://img.icons8.com/fluency/240/chain.png" },
                    { name: "TensorFlow", imageUrl: "https://img.icons8.com/color/240/tensorflow.png" },
                    { name: "PyTorch", imageUrl: "https://img.icons8.com/color/240/pytorch.png" },
                    { name: "Pinecone", imageUrl: "https://img.icons8.com/fluency/240/database.png" },
                    { name: "ChromaDB", imageUrl: "https://img.icons8.com/fluency/240/database-view.png" }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-white/50">
                      <div className="h-10 w-10 flex items-center justify-center mr-4 shrink-0 bg-white rounded-lg shadow-sm">
                        <img 
                          src={tech.imageUrl} 
                          alt={tech.name} 
                          className="max-h-8 max-w-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (!target.dataset.fallback) {
                              target.dataset.fallback = 'true';
                              target.src = 'https://img.icons8.com/fluency/48/artificial-intelligence.png';
                            }
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 opacity-60"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mr-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Cloud Platforms</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Multi-Cloud Expert</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Show Cloud and DevOps Technologies */}
                  {[
                    { name: "AWS", imageUrl: "https://img.icons8.com/color/240/amazon-web-services.png" },
                    { name: "Azure", imageUrl: "https://img.icons8.com/fluency/240/azure-1.png" },
                    { name: "GCP", imageUrl: "https://img.icons8.com/color/240/google-cloud.png" },
                    { name: "DigitalOcean", imageUrl: "https://img.icons8.com/ios-filled/240/digitalocean.png" },
                    { name: "Kubernetes", imageUrl: "https://img.icons8.com/color/240/kubernetes.png" },
                    { name: "Docker", imageUrl: "https://img.icons8.com/fluency/240/docker.png" },
                    { name: "Terraform", imageUrl: "https://img.icons8.com/color/240/terraform.png" },
                    { name: "Ansible", imageUrl: "https://img.icons8.com/color/240/ansible.png" }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-white/50">
                      <div className="h-10 w-10 flex items-center justify-center mr-4 shrink-0 bg-white rounded-lg shadow-sm">
                        <img 
                          src={tech.imageUrl} 
                          alt={tech.name} 
                          className="max-h-8 max-w-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (!target.dataset.fallback) {
                              target.dataset.fallback = 'true';
                              target.src = 'https://img.icons8.com/fluency/48/cloud.png';
                            }
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & Automation */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 opacity-60"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mr-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">DevOps & GitOps</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Automation Expert</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Show GitOps and CI/CD Technologies */}
                  {[
                    { name: "ArgoCD", imageUrl: "https://img.icons8.com/fluency/240/ship-wheel.png" },
                    { name: "FluxCD", imageUrl: "https://img.icons8.com/fluency/240/synchronize.png" },
                    { name: "GitHub Actions", imageUrl: "https://img.icons8.com/fluency/240/github.png" },
                    { name: "GitLab CI/CD", imageUrl: "https://img.icons8.com/color/240/gitlab.png" },
                    { name: "Jenkins", imageUrl: "https://img.icons8.com/color/240/jenkins.png" },
                    { name: "Bitbucket Pipelines", imageUrl: "https://img.icons8.com/color/240/bitbucket.png" },
                    { name: "TeamCity", imageUrl: "https://img.icons8.com/color/240/teamcity.png" },
                    { name: "CircleCI", imageUrl: "https://img.icons8.com/color/240/circleci.png" }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-white/50">
                      <div className="h-10 w-10 flex items-center justify-center mr-4 shrink-0 bg-white rounded-lg shadow-sm">
                        <img 
                          src={tech.imageUrl} 
                          alt={tech.name} 
                          className="max-h-8 max-w-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (!target.dataset.fallback) {
                              target.dataset.fallback = 'true';
                              target.src = 'https://img.icons8.com/fluency/48/git.png';
                            }
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-60"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Security & Compliance</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Zero-Trust Ready</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Show Security and Compliance Technologies */}
                  {[
                    { name: "HashiCorp Vault", imageUrl: "https://img.icons8.com/fluency/240/safe.png" },
                    { name: "AWS WAF", imageUrl: "https://img.icons8.com/fluency/240/firewall.png" },
                    { name: "Falco", imageUrl: "https://img.icons8.com/fluency/240/cyber-security.png" },
                    { name: "Kyverno", imageUrl: "https://img.icons8.com/fluency/240/rules.png" },
                    { name: "Trivy", imageUrl: "https://img.icons8.com/fluency/240/security-checked.png" },
                    { name: "Snyk", imageUrl: "https://img.icons8.com/color/240/snyk.png" },
                    { name: "OWASP ZAP", imageUrl: "https://img.icons8.com/fluency/240/security-shield-green.png" },
                    { name: "Chaos Monkey", imageUrl: "https://img.icons8.com/fluency/240/bug.png" }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-white/50">
                      <div className="h-10 w-10 flex items-center justify-center mr-4 shrink-0 bg-white rounded-lg shadow-sm">
                        <img 
                          src={tech.imageUrl} 
                          alt={tech.name} 
                          className="max-h-8 max-w-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (!target.dataset.fallback) {
                              target.dataset.fallback = 'true';
                              target.src = 'https://img.icons8.com/fluency/48/security-shield-green.png';
                            }
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Technologies Highlight */}
          <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl border border-slate-200 p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 -ml-16 -mb-16"></div>
            
            <div className="relative text-center mb-10">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Most Trusted Production Tools</h4>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Core technologies powering enterprise applications with proven reliability, scalability, and security standards
              </p>
            </div>
            
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png", level: "Expert", experience: "6+ years", color: "from-orange-500 to-yellow-500" },
                { name: "Kubernetes", icon: "https://img.icons8.com/color/48/kubernetes.png", level: "Production", experience: "CKAD Certified", color: "from-blue-500 to-indigo-500" },
                { name: "Terraform", icon: "https://img.icons8.com/color/48/terraform.png", level: "Expert", experience: "IaC Leader", color: "from-purple-500 to-pink-500" },
                { name: "Docker", icon: "https://img.icons8.com/fluency/48/docker.png", level: "Expert", experience: "Multi-stage", color: "from-blue-400 to-cyan-500" },
                { name: "GPT-4o", icon: "https://img.icons8.com/color/48/chatgpt.png", level: "Production", experience: "RAG Systems", color: "from-green-500 to-emerald-500" },
                { name: "GitHub Actions", icon: "https://img.icons8.com/fluency/48/github.png", level: "Expert", experience: "CI/CD Master", color: "from-gray-700 to-gray-900" },
                { name: "HashiCorp Vault", icon: "https://img.icons8.com/fluency/48/safe.png", level: "Advanced", experience: "Secrets Mgmt", color: "from-yellow-500 to-orange-500" },
                { name: "Prometheus", icon: "https://img.icons8.com/color/48/prometheus-app.png", level: "SRE", experience: "Monitoring", color: "from-red-500 to-pink-500" },
                { name: "ArgoCD", icon: "https://img.icons8.com/fluency/48/ship-wheel.png", level: "GitOps", experience: "Sync Master", color: "from-teal-500 to-cyan-500" },
                { name: "Grafana", icon: "https://img.icons8.com/color/48/grafana.png", level: "Expert", experience: "Observability", color: "from-orange-500 to-red-500" },
                { name: "Jenkins", icon: "https://img.icons8.com/color/48/jenkins.png", level: "Enterprise", experience: "Pipelines", color: "from-blue-600 to-indigo-600" },
                { name: "Chaos Monkey", icon: "https://img.icons8.com/fluency/48/bug.png", level: "Resilience", experience: "Testing", color: "from-red-600 to-pink-600" }
              ].map((tech, index) => (
                <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 hover:border-white hover:bg-white transition-all duration-300 hover:shadow-lg p-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="flex items-center mb-3">
                      <div className="h-12 w-12 flex items-center justify-center mr-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="max-h-8 max-w-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 text-sm leading-tight">{tech.name}</div>
                        <div className="text-xs text-slate-500 font-medium">{tech.level}</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 bg-slate-50 px-3 py-1 rounded-full text-center group-hover:bg-white transition-colors">
                      {tech.experience}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Technologies Showcase */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-lg border border-slate-200 p-10 mt-12">
            <div className="text-center mb-10">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Additional Enterprise Tools & Platforms</h4>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Extended ecosystem of specialized tools and platforms for comprehensive enterprise infrastructure management
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Gemini Pro", icon: "https://img.icons8.com/color/48/google-logo.png" },
                { name: "Mistral Large", icon: "https://img.icons8.com/fluency/48/m-cute.png" },
                { name: "Cohere Command", icon: "https://img.icons8.com/fluency/48/c.png" },
                { name: "Stable Diffusion", icon: "https://img.icons8.com/fluency/48/image.png" },
                { name: "DALL-E 3", icon: "https://img.icons8.com/fluency/48/image-editing.png" },
                { name: "Hugging Face", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-hugging-face-a-company-developing-open-source-machine-learning-logo-color-tal-revivo.png" },
                { name: "MLflow", icon: "https://img.icons8.com/fluency/48/workflow.png" },
                { name: "Weights & Biases", icon: "https://img.icons8.com/fluency/48/analytics.png" },
                { name: "Kubeflow", icon: "https://img.icons8.com/color/48/kubernetes.png" },
                { name: "Ray", icon: "https://img.icons8.com/fluency/48/distributed-computing.png" },
                { name: "Weaviate", icon: "https://img.icons8.com/fluency/48/vector.png" },
                { name: "Ollama", icon: "https://img.icons8.com/fluency/48/laptop.png" },
                { name: "Qdrant", icon: "https://img.icons8.com/fluency/48/search-database.png" },
                { name: "LangSmith", icon: "https://img.icons8.com/fluency/48/mind-map.png" },
                { name: "Vercel", icon: "https://img.icons8.com/fluency/48/web-design.png" },
                { name: "Cloudflare", icon: "https://img.icons8.com/color/48/cloudflare.png" },
                { name: "Linode", icon: "https://img.icons8.com/color/48/linode.png" },
                { name: "Oracle Cloud", icon: "https://img.icons8.com/color/48/oracle-logo.png" },
                { name: "Helm", icon: "https://img.icons8.com/fluency/48/helm.png" },
                { name: "Pulumi", icon: "https://img.icons8.com/fluency/48/cloud-storage.png" },
                { name: "External Secrets", icon: "https://img.icons8.com/fluency/48/key.png" },
                { name: "OpenAI API", icon: "https://img.icons8.com/color/48/openai-chatgpt.png" }
              ].map((tech, index) => (
                <div key={index} className="group flex flex-col items-center p-4 bg-white/70 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-white/60 hover:border-slate-200">
                  <div className="h-12 w-12 flex items-center justify-center mb-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="max-h-8 max-w-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = 'true';
                          target.src = 'https://img.icons8.com/fluency/48/gear.png';
                        }
                      }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 text-center leading-tight">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* ROI & Business Impact */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 rounded-2xl shadow-lg text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Proven Business Impact</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">Real results from production implementations across fintech, gaming, and financial services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-slate-300 mb-1">Faster Deployments</div>
              <div className="text-xs text-slate-400">Automated CI/CD pipelines</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-sm text-slate-300 mb-1">Cost Reduction</div>
              <div className="text-xs text-slate-400">AI inference optimization</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-sm text-slate-300 mb-1">Uptime SLA</div>
              <div className="text-xs text-slate-400">Enterprise infrastructure</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
              <div className="text-sm text-slate-300 mb-1">Downtime Deploys</div>
              <div className="text-xs text-slate-400">Zero-downtime releases</div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 2v20m9-9H3"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Financial Services</h3>
                <div className="text-xs text-green-600 font-medium mb-2">PaySafe • Nexo • Gaming Innovation</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">PCI-DSS compliant infrastructure handling millions of transactions with enterprise-grade security and real-time processing capabilities.</p>
            <div className="text-xs text-slate-500">
              <span className="font-medium">Key Technologies:</span> AWS, Kubernetes, Vault, Compliance automation
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">AI Production Systems</h3>
                <div className="text-xs text-purple-600 font-medium mb-2">Scale • Performance • Reliability</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">Production AI infrastructure serving millions of API requests with optimized inference, cost-effective scaling, and robust monitoring systems.</p>
            <div className="text-xs text-slate-500">
              <span className="font-medium">Key Technologies:</span> LangChain, GPT-4, TensorFlow, Kubernetes
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">DevOps Transformation</h3>
                <div className="text-xs text-blue-600 font-medium mb-2">GitOps • Automation • Efficiency</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">Complete DevOps modernization reducing deployment time by 70%, eliminating manual processes, and ensuring consistent, reliable releases.</p>
            <div className="text-xs text-slate-500">
              <span className="font-medium">Key Technologies:</span> GitOps, Terraform, ArgoCD, FluxCD
            </div>
          </div>
        </div>
        
        {/* Strategic Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 via-white to-primary/5 p-12 rounded-2xl border border-primary/10 max-w-4xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to Transform Your Infrastructure?</h3>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Let's discuss how my expertise in AI, DevOps, and cloud architecture can accelerate your next project and deliver measurable business results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a 
                href="#ai-expertise" 
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                View Experience Timeline
              </a>
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-medium">Available for:</span> Consulting • Full-time opportunities • Project-based work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
