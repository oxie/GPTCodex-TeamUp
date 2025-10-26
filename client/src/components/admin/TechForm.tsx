import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import type { Technology } from "@shared/schema";

const techFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  category: z.string().min(2, "Category is required"),
  imageUrl: z.string().url("Provide a valid image URL").or(z.literal("")),
});

type TechFormValues = z.infer<typeof techFormSchema>;

interface TechFormProps {
  initialData?: Technology | null;
  onSuccess: () => void;
}

const TechForm = ({ initialData, onSuccess }: TechFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const defaultValues = useMemo<TechFormValues>(
    () => ({
      name: initialData?.name ?? "",
      category: initialData?.category ?? "Platform",
      imageUrl: initialData?.imageUrl ?? "",
    }),
    [initialData],
  );

  const form = useForm<TechFormValues>({
    resolver: zodResolver(techFormSchema),
    defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (values: TechFormValues) => {
      const payload = {
        name: values.name,
        category: values.category,
        imageUrl: values.imageUrl,
      };

      if (initialData?.id) {
        await apiRequest("PUT", `/api/technologies/${initialData.id}`, payload);
      } else {
        await apiRequest("POST", "/api/technologies", payload);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/technologies"] });
      toast({
        title: initialData?.id ? "Technology updated" : "Technology added",
        description: "Technology entry saved successfully.",
      });
      onSuccess();
    },
    onError: (error: Error) => {
      toast({
        title: "Unable to save technology",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: TechFormValues) => mutation.mutate(values);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Kubernetes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Orchestration" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo URL</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : initialData?.id ? "Update Technology" : "Add Technology"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TechForm;
