import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, InsertMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Building, Calendar, Shield, Check, ChevronRight, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";

const extendedMessageSchema = insertMessageSchema.extend({
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  projectTimeline: z.string().optional(),
});

type ExtendedMessage = z.infer<typeof extendedMessageSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ExtendedMessage>({
    resolver: zodResolver(extendedMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      company: "",
      serviceInterest: "",
      projectTimeline: ""
    }
  });

  const sendMessage = useMutation({
    mutationFn: async (data: ExtendedMessage) => {
      const { company, serviceInterest, projectTimeline, ...baseData } = data;
      
      // Add the extended information to the message content
      const enhancedMessage = `
${baseData.message}

---
Company: ${company || "Not specified"}
Service Interest: ${serviceInterest || "Not specified"}
Project Timeline: ${projectTimeline || "Not specified"}
      `.trim();
      
      return apiRequest("POST", "/api/messages", {
        ...baseData,
        message: enhancedMessage
      });
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out! I'll respond to your message as soon as possible.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Message Failed to Send",
        description: "There was a problem sending your message. Please try again or email me directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ExtendedMessage) => {
    setIsSubmitting(true);
    sendMessage.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Current Position",
      details: "GenOps Engineer & AI Infrastructure Specialist",
      action: {
        text: "View Resume",
        url: "/assets/ValentinPetrov-CV-last-2024-3.pdf"
      }
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "valentin.petrov.work@gmail.com",
      action: {
        text: "Send Email",
        url: "mailto:valentin.petrov.work@gmail.com"
      }
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+359 888113322",
      action: {
        text: "Call Now",
        url: "tel:+359888113322"
      }
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: "Sofia, Bulgaria (Available for remote work)",
      action: {
        text: "View on Map",
        url: "https://maps.google.com"
      }
    }
  ];

  const myExpertiseAreas = [
    { text: "AI Infrastructure Engineering", icon: <Check className="h-4 w-4" /> },
    { text: "LLM Deployment & Optimization", icon: <Check className="h-4 w-4" /> },
    { text: "Cloud Architecture (AWS, GCP, Azure)", icon: <Check className="h-4 w-4" /> },
    { text: "CI/CD & GitOps Implementation", icon: <Check className="h-4 w-4" /> },
    { text: "Kubernetes Orchestration", icon: <Check className="h-4 w-4" /> },
    { text: "AI System Security & Compliance", icon: <Check className="h-4 w-4" /> }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1">
            Let's Connect
          </Badge>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-slate-600">
            Interested in working together or discussing AI infrastructure solutions?
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white shadow-sm rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 rounded-full bg-primary/10">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 text-center">{item.details}</p>
              <div className="mt-4">
                <a 
                  href={item.action.url} 
                  target={item.action.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-700 font-medium text-sm inline-flex items-center"
                >
                  {item.action.text}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2 bg-slate-900 text-white p-8 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center lg:justify-start">
              <Brain className="h-6 w-6 mr-2 text-primary" />
              <h3 className="text-xl font-bold">My Expertise</h3>
            </div>
            
            <p className="mt-4 text-slate-300">
              I specialize in building robust infrastructure for AI systems, focusing on scalability, reliability, and security for machine learning workloads.
            </p>
            
            <div className="mt-6 space-y-4">
              {myExpertiseAreas.map((area, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/20 text-primary">
                      {area.icon}
                    </div>
                  </div>
                  <p className="ml-3 text-sm text-slate-300">{area.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary/80 mr-2" />
                  <span className="text-sm text-slate-300">Open to new opportunities</span>
                </div>
                <Badge className="bg-primary/20 text-primary-foreground hover:bg-primary/30 border-none">
                  Available Now
                </Badge>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 bg-white p-8 shadow-md rounded-xl border border-slate-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interest Area</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ai-infra">AI Infrastructure</SelectItem>
                            <SelectItem value="llm">LLM Engineering</SelectItem>
                            <SelectItem value="cloud">Cloud Architecture</SelectItem>
                            <SelectItem value="gitops">GitOps & DevOps</SelectItem>
                            <SelectItem value="kubernetes">Kubernetes</SelectItem>
                            <SelectItem value="job">Job Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectTimeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeframe</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="When to connect" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="asap">As soon as possible</SelectItem>
                            <SelectItem value="week">This week</SelectItem>
                            <SelectItem value="month">This month</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can I help you? Let me know about your project or opportunity..." 
                          rows={5} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full font-medium" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                  <p className="mt-3 text-xs text-center text-slate-500">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
