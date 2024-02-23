"use client";
import { Project, newFlagSchema } from "@/lib/db/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createFlag } from "@/actions/flags";
import { FlagForm } from "./form";

export function CreateFlagForm({
  project,
  close,
}: {
  project: Project;
  close?: () => void;
}) {
  const form = useForm<z.infer<typeof newFlagSchema>>({
    resolver: zodResolver(newFlagSchema),
    defaultValues: {
      projectId: project.id,
      name: "",
      title: "",
      description: "",
      enabled: false,
    },
  });

  async function onSubmit(values: z.infer<typeof newFlagSchema>) {
    await createFlag(values);
    toast("Feature flag created", {
      description: (
        <pre className="bg-slate-700 text-white font-mono rounded bordered px-2 w-full">
          {values.name} = {values.enabled ? "true" : "false"}
        </pre>
      ),
    });
    close ? close() : null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-4 space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="flag.name" {...field} />
              </FormControl>
              <FormDescription>
                The name to be used by the code consuming the feature flags.{" "}
                <span className="text-red-700">Cannot be changed later.</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FlagForm form={form} />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
}
