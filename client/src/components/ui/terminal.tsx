import { useMemo } from "react";
import { motion } from "framer-motion";

const promptLines = [
  "#!/usr/bin/env bash",
  "# GenOps bootstrap sequence",
  "export CLOUD=multi",
  "export GPU_CLUSTER=llm-prod",
  "gcloud container clusters get-credentials genops-eu --region=europe-west1",
  "kubectl apply -f infra/pipelines.yaml",
  "helm upgrade --install llm-stack charts/llm --namespace production",
  "watch -n5 kubectl get pods -n production",
];

const statusLines = [
  "[ok] Connected to GitOpsNow :: production",
  "[ok] Synced Helm release llm-stack@1.7.4",
  "[ok] GPUs allocated: 32x A100",
  "[info] Monitoring dashboards refreshed",
  "[next] Deploy inference benchmark job",
];

const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const statusVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12 + 0.6, duration: 0.3 },
  }),
};

const Terminal = () => {
  const prompt = useMemo(() => promptLines, []);
  const status = useMemo(() => statusLines, []);

  return (
    <div className="rounded-lg bg-slate-900/90 p-4 font-mono text-sm text-slate-100 shadow-inner">
      <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
        <span>$ genops session start</span>
        <span>cluster: gpu-eu-west</span>
      </div>
      <div className="space-y-2">
        {prompt.map((line, index) => (
          <motion.div key={line} variants={lineVariants} initial="hidden" animate="visible" custom={index}>
            <span className="text-primary">$</span> {line}
          </motion.div>
        ))}
      </div>
      <div className="mt-6 space-y-1 text-xs">
        {status.map((line, index) => (
          <motion.div key={line} variants={statusVariants} initial="hidden" animate="visible" custom={index}>
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
