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
import type { PortfolioItem } from "@shared/schema";

const portfolioFormSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description should contain more detail"),
  imageUrl: z.string().url("Provide a valid image URL").or(z.literal("")),
  demoUrl: z.string().url("Provide a valid link").or(z.literal("")),
  githubUrl: z.string().url("Provide a valid link").or(z.literal("")),
  category: z.string().min(2, "Category is required"),
  tags: z.string().optional().default(""),
});

type PortfolioFormValues = z.infer<typeof portfolioFormSchema>;

interface PortfolioFormProps {
  initialData?: PortfolioItem | null;
  onSuccess: () => void;
}

const PortfolioForm = ({ initialData, onSuccess }: PortfolioFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const defaultValues = useMemo<PortfolioFormValues>(
    () => ({
      title: initialData?.title ?? "",
      description: initialData?.description ?? "",
      imageUrl: initialData?.imageUrl ?? "",
      demoUrl: initialData?.demoUrl ?? "",
      githubUrl: initialData?.githubUrl ?? "",
      category: initialData?.category ?? "Dev Tools",
      tags: (initialData?.tags ?? []).join(", "),
    }),
    [initialData],
  );

  const form = useForm<PortfolioFormValues>({
    resolver: zodResolver(portfolioFormSchema),
    defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (values: PortfolioFormValues) => {
      const tags = values.tags
        ?.split(/\n|,/)
        .map((tag) => tag.trim())
        .filter(Boolean) ?? [];

      const payload = {
        title: values.title,
        description: values.description,
        imageUrl: values.imageUrl,
        demoUrl: values.demoUrl,
        githubUrl: values.githubUrl,
        category: values.category,
        tags,
      };

      if (initialData?.id) {
        await apiRequest("PUT", `/api/portfolio/${initialData.id}`, payload);
      } else {
        await apiRequest("POST", "/api/portfolio", payload);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      toast({
        title: initialData?.id ? "Project updated" : "Project created",
        description: "Portfolio entry has been saved.",
      });
      onSuccess();
    },
    onError: (error: Error) => {
      toast({
        title: "Unable to save project",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: PortfolioFormValues) => mutation.mutate(values);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="AI Commit Assistant" {...field} />
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
                <Textarea rows={4} placeholder="Describe the project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://..." {...field} />
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
                  <Input placeholder="Dev Tools" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="demoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Demo URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Textarea rows={3} placeholder="Comma separated tags" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : initialData?.id ? "Update Project" : "Create Project"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PortfolioForm;
