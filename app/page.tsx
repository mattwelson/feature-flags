import { getProjects } from "@/actions/projects";

export default async function Home() {
  const projects = await getProjects();
  console.log({ projects });
  // todo: add create forms for both project and flags
  // todo: add api route for getting projects and flags
  return (
    <main>
      <h1 className="text-4xl font-bold">Projects</h1>
      <div>
        {projects.map(({ id, name, flags }) => (
          <div key={id}>
            <h2>{name}</h2>
            <div>
              {flags.map(({ id, name, title, description, enabled }) => (
                <div key={id}>
                  <h3>{title}</h3>
                  <h4>{name}</h4>
                  <div>{enabled ? "True" : "False"}</div>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
