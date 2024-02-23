import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Switch } from "@/components/ui/switch";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Flag, Project } from "@/lib/db/schema";
import { EditFlagSheet } from ".";

// TODO: Switch to the more complex data table https://ui.shadcn.com/docs/components/data-table
// TODO: wire up the enabled switch to up the database
// TODO: Create edit and such
export function FlagList({
  flags,
  project,
}: {
  flags: Flag[];
  project: Project;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Enabled</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flags.map((f) => (
          <TableRow key={f.id}>
            <TableCell>{f.name}</TableCell>
            <TableCell className="font-bold">{f.title}</TableCell>
            <TableCell>{f.description}</TableCell>
            <TableCell>
              <Switch checked={f.enabled} />
            </TableCell>
            <TableCell>
              <div className="flex gap-2 text-lg">
                <EditFlagSheet project={project} flag={f} />
                <FaTrashAlt />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
