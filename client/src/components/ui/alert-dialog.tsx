import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = AlertDialogPrimitive.Overlay;
const AlertDialogContent = AlertDialogPrimitive.Content;
const AlertDialogTitle = AlertDialogPrimitive.Title;
const AlertDialogDescription = AlertDialogPrimitive.Description;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

const AlertDialogOverlayStyled = AlertDialogOverlay;
const AlertDialogContentStyled = AlertDialogContent;

const Overlay = ({ className, ...props }: AlertDialogPrimitive.AlertDialogOverlayProps) => (
  <AlertDialogOverlayStyled
    className={cn("fixed inset-0 z-50 bg-black/40 backdrop-blur-sm", className)}
    {...props}
  />
);
Overlay.displayName = "AlertDialogOverlay";

const Content = ({ className, ...props }: AlertDialogPrimitive.AlertDialogContentProps) => (
  <AlertDialogPortal>
    <Overlay />
    <AlertDialogContentStyled
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-lg focus:outline-none",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
);
Content.displayName = "AlertDialogContent";

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
Header.displayName = "AlertDialogHeader";

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />
);
Footer.displayName = "AlertDialogFooter";

export {
  AlertDialog,
  AlertDialogTrigger,
  Content as AlertDialogContent,
  Overlay as AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Header as AlertDialogHeader,
  Footer as AlertDialogFooter,
};
