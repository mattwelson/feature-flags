import { getProjects, getStats } from "@/actions/projects";
import { CreateFlagSheet, FlagList } from "@/components/flags";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const projects = await getProjects();
  const stats = await getStats();
  // todo: add create forms for both project and flags
  // todo: style home page
  // todo: add breadcrumbs on each page
  return (
    <main className="text-lg">
      <div className="flex gap-8 justify-stretch mb-8">
        {stats.map(({ title, value }) => (
          <Card key={title} className="flex-1">
            <CardHeader>
              <CardDescription>{title}</CardDescription>
              <CardTitle>{value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <h1 className="font-bold">Projects</h1>
      <div>
        {projects.map((p) => (
          <div key={p.id}>
            <h2>{p.name}</h2>
            <FlagList project={p} flags={p.flags} />
            <CreateFlagSheet project={p} />
          </div>
        ))}
      </div>
    </main>
  );
}
