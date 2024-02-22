import { getProjects, getStats } from "@/actions/projects";
import { FlagList } from "@/components/flags";
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
        {projects.map(({ id, name, flags }) => (
          <div key={id}>
            <h2>{name}</h2>
            <FlagList flags={flags} />
          </div>
        ))}
      </div>
    </main>
  );
}
