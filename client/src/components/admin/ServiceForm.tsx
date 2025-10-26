import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import type { Service } from "@shared/schema";

const serviceFormSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description should be more detailed"),
  icon: z.string().min(2, "Icon name is required"),
  color: z.string().min(2, "Color variant is required"),
  features: z.string().min(3, "Provide at least one feature"),
});

type ServiceFormValues = z.infer<typeof serviceFormSchema>;

interface ServiceFormProps {
  initialData?: Service | null;
  onSuccess: () => void;
}

const ServiceForm = ({ initialData, onSuccess }: ServiceFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const defaultValues = useMemo<ServiceFormValues>(
    () => ({
      title: initialData?.title ?? "",
      description: initialData?.description ?? "",
      icon: initialData?.icon ?? "LayoutGrid",
      color: initialData?.color ?? "primary",
      features: (initialData?.features ?? [""]).join("\n"),
    }),
    [initialData],
  );

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (values: ServiceFormValues) => {
      const features = values.features
        .split(/\n|,/)
        .map((item) => item.trim())
        .filter(Boolean);

      const payload = {
        title: values.title,
        description: values.description,
        icon: values.icon,
        color: values.color,
        features,
      };

      if (initialData?.id) {
        await apiRequest("PUT", `/api/services/${initialData.id}`, payload);
      } else {
        await apiRequest("POST", "/api/services", payload);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      toast({
        title: initialData?.id ? "Service updated" : "Service created",
        description: "Changes have been saved successfully.",
      });
      onSuccess();
    },
    onError: (error: Error) => {
      toast({
        title: "Unable to save service",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: ServiceFormValues) => {
    mutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="AI Infrastructure" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={4} placeholder="Describe the service" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Icon</FormLabel>
                <FormControl>
                  <Input placeholder="LayoutGrid" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color Variant</FormLabel>
                <FormControl>
                  <Input placeholder="primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key Features</FormLabel>
              <FormControl>
                <Textarea rows={4} placeholder="Enter one feature per line" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-3">
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : initialData?.id ? "Update Service" : "Create Service"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ServiceForm;
