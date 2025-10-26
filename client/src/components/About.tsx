import { Button } from "@/components/ui/button";
import { cvData } from "@/lib/cv-data";
import { resumeUrl } from "@/lib/resume";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden relative shadow-lg">
              {/* Placeholder for professional headshot */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" 
                alt="Professional headshot" 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white">{cvData.name}</h2>
                  <p className="text-white/90">{cvData.title}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-7">
            <div className="text-left">
              <h2 className="text-base font-semibold text-primary tracking-wide uppercase">About Me</h2>
              <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">GenOps Engineer with AI Infrastructure Expertise</p>
              <div className="mt-6 text-slate-600 space-y-6">
                <p>Dedicated GenOps and AI Infrastructure Engineer with extensive experience building and optimizing cloud-native systems for artificial intelligence applications. Specializing in deploying and scaling LLMs, vision models, and other AI systems while maintaining best practices for security and cost optimization.</p>
                <p>I bring together the worlds of DevOps and AI Engineering to create robust, production-ready infrastructures that power next-generation AI applications. My expertise spans multi-cloud environments, GitOps workflows, containerization, and infrastructure as code, with a focus on creating efficient, reliable platforms for AI workloads.</p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {cvData.skills.slice(0, 6).map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex">
                <a href="#contact">
                  <Button className="mr-4">
                    Contact Me
                  </Button>
                </a>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    View Full CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
