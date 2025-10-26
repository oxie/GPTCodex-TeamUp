import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const EnterprisePartners = () => {
  const enterprisePartners = [
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      tier: "3+ Years Experience",
      description: "Expertise in Google Kubernetes Engine (GKE) and Cloud Run service deployment automation"
    },
    {
      name: "Microsoft Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      tier: "2+ Years Experience",
      description: "Experience with Azure Kubernetes Service (AKS) and Azure DevOps pipeline optimization"
    },
    {
      name: "Amazon Web Services",
      logo: "https://img.icons8.com/color/240/amazon-web-services.png",
      tier: "6+ Years Experience",
      description: "Advanced expertise in EKS deployments, Lambda, and AWS cloud-native architecture"
    }
  ];

  const integrations = [
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "CI/CD"
    },
    {
      name: "GitLab",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      category: "CI/CD"
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      category: "Orchestration"
    },
    {
      name: "Terraform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      category: "IaC"
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "Containerization"
    },
    {
      name: "Prometheus",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
      category: "Observability"
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
    <section id="partners" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1">
            Cloud Technology Expertise
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Cloud Platforms & Integrations
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            I have extensive experience with these major cloud providers and industry-standard DevOps tools
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-slate-800 mb-6">Cloud Platform Experience</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {enterprisePartners.map((partner, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow border border-slate-100"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-20 w-20 mb-4"
                />
                <h4 className="text-lg font-bold text-slate-800">{partner.name}</h4>
                <Badge className="my-2 bg-primary/10 text-primary border-primary/20">
                  {partner.tier}
                </Badge>
                <p className="text-sm text-slate-600 mt-2">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-6">Technology Integrations</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {integrations.map((integration, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow border border-slate-100"
              >
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="h-12 w-12 mb-3"
                />
                <h4 className="text-sm font-medium text-slate-800">{integration.name}</h4>
                <span className="text-xs text-slate-500 mt-1">{integration.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Interested in discussing how my cloud and DevOps expertise can help your project?
          </p>
          <a 
            href="#contact" 
            className="inline-block mt-4 px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePartners;
