"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Flag } from "@/lib/db/schema";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { archiveFlag } from "@/actions/flags";

export function DeleteFlagDialog({ flag }: { flag: Flag }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function deleteFlag() {
    setLoading(true);
    await archiveFlag(flag);
    toast("Flag Deleted");
    setOpen(false);
    setLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <FaTrashAlt />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Deleting {flag.title} - <code>{flag.name}</code>
          </DialogTitle>
          <DialogDescription>
            This will remove the flag from the results of the API search. The
            flag will be archived.
          </DialogDescription>
        </DialogHeader>
        <Button variant="destructive" onClick={deleteFlag} disabled={loading}>
          Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
}
