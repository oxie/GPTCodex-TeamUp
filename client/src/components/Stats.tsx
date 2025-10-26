import { motion } from "framer-motion";
import { Shield, Zap, LineChart, Award, Star } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      value: "10x",
      label: "Deployment Velocity",
      description: "Industry Leading Automation",
      icon: <Zap className="h-8 w-8 text-primary/80" />
    },
    {
      value: "99.99%",
      label: "Infrastructure Reliability",
      description: "Enterprise SLA Guarantee",
      icon: <Shield className="h-8 w-8 text-primary/80" />
    },
    {
      value: "85%",
      label: "Cost Reduction",
      description: "Average Cloud Spend Optimization",
      icon: <LineChart className="h-8 w-8 text-primary/80" />
    },
    {
      value: "Zero",
      label: "Configuration Drift",
      description: "Automated GitOps Reconciliation",
      icon: <Award className="h-8 w-8 text-primary/80" />
    },
    {
      value: "5-Star",
      label: "Client Satisfaction",
      description: "Enterprise Client Feedback",
      icon: <Star className="h-8 w-8 text-primary/80" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Enterprise-Grade Performance</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Our platform delivers measurable business outcomes through innovative DevOps and AI solutions
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              variants={item}
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                {stat.icon}
              </div>
              <p className="text-4xl font-extrabold text-primary mb-2">{stat.value}</p>
              <p className="text-lg font-medium text-slate-800">{stat.label}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500 flex items-center justify-center">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Delivering measurable ROI for Fortune 500 companies and enterprise clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
