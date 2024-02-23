"use client";
import { Flag } from "@/lib/db/schema";
import { Switch } from "../ui/switch";
import { toast } from "sonner";
import { updateFlag } from "@/actions/flags";

// TODO: Note this is a little sloppy as it is not eager,
// the form takes a while to process and is then slow to
// change the page, should be eager
export function EnabledSwitch({ flag }: { flag: Flag }) {
  async function toggleState() {
    const newFlagState = { ...flag, enabled: !flag.enabled };
    await updateFlag(newFlagState);
    toast(`${flag.name} changed to ${newFlagState.enabled}`);
  }

  return <Switch checked={flag.enabled} onCheckedChange={toggleState} />;
}
