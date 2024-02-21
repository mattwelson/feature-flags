import { getProject } from "@/actions/projects";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const project = await getProject(params.id);
  return Response.json(project);
}
