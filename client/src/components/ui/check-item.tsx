import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckItemProps {
  text: string;
  className?: string;
}

export function CheckItem({ text, className }: CheckItemProps) {
  return (
    <div className={cn("flex items-start gap-2 text-sm text-slate-600", className)}>
      <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="h-3 w-3" />
      </span>
      <span>{text}</span>
    </div>
  );
}

export default CheckItem;
