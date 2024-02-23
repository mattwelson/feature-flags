import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { newFlagSchema } from "@/lib/db/schema";
import { Switch } from "../ui/switch";

export function FlagForm({
  form,
}: {
  form: UseFormReturn<z.infer<typeof newFlagSchema>>;
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Flag title" {...field} />
            </FormControl>
            <FormDescription>A human readable flag name.</FormDescription>
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
              <Input placeholder="Flag description" {...field} />
            </FormControl>
            <FormDescription>Description of the flag.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="enabled"
        render={({ field }) => (
          <FormItem className="flex justify-between items-center p-2 bg-slate-100 rounded border">
            <div className="space-y-1">
              <FormLabel>
                Enabled
                <FormDescription>
                  If the feature flag is set to on or off.
                </FormDescription>
              </FormLabel>

              <FormMessage />
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}
