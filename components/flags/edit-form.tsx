"use client";
import { Flag, Project, newFlagSchema } from "@/lib/db/schema";
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
import { updateFlag } from "@/actions/flags";
import { FlagForm } from "./form";

export function EditFlagForm({
  project,
  close,
  flag,
}: {
  project: Project;
  close?: () => void;
  flag: Flag;
}) {
  const form = useForm<z.infer<typeof newFlagSchema>>({
    resolver: zodResolver(newFlagSchema),
    defaultValues: flag,
  });

  async function onSubmit(values: z.infer<typeof newFlagSchema>) {
    await updateFlag(values);
    toast("Feature flag updated", {
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
        <FlagForm form={form} />
        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}
