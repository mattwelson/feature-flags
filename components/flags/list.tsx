import { getFlags } from "@/actions/flags";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Switch } from "@/components/ui/switch";

// TODO: Switch to the more complex data table https://ui.shadcn.com/docs/components/data-table
// TODO: wire up the enabled switch to up the database
// TODO: Create edit and such
export function FlagList({
  flags,
}: {
  flags: Awaited<ReturnType<typeof getFlags>>;
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
            <TableCell>Edit</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
