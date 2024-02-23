"use client";
import { Project } from "@/lib/db/schema";
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
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

// Sheet component (including trigger) for the create flag form
export function CreateFlagSheet({ project }: { project: Project }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <FaPlus className="mr-2" /> Create Flag
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Flag</SheetTitle>
          <SheetDescription>Add a new flag to {project.name}</SheetDescription>
        </SheetHeader>
        <CreateFlagForm project={project} close={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
