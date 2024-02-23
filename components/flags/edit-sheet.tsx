"use client";
import { Flag, Project } from "@/lib/db/schema";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { CreateFlagForm } from "./create-form";
import { Button } from "../ui/button";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { EditFlagForm } from "./edit-form";

// Sheet component (including trigger) for the create flag form
export function EditFlagSheet({
  project,
  flag,
}: {
  project: Project;
  flag: Flag;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <FaPencilAlt />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Flag</SheetTitle>
          <SheetDescription>
            Edit the <code>{flag.name}</code> flag to {project.name}
          </SheetDescription>
        </SheetHeader>
        <EditFlagForm
          project={project}
          close={() => setOpen(false)}
          flag={flag}
        />
      </SheetContent>
    </Sheet>
  );
}
