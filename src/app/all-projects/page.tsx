import Filter from "@/components/Filter/Filter";
import Project from "@/components/Project/Project";
import SearchForm from "@/components/SearchForm/SearchForm";
import ProjectsData from "@/db/projects.json";

type ProjectType = {
	name: string;
	completion: number;
	id: string;
	download?: string;
	info: string;
	status: string;
};
export default async function AllProjects({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query || "";
	const projects = ProjectsData.projects;

	return (
		<main className="main-container">
			<div className="flex justify-between mb-[26px]">
				<h1 className="h1">All projects</h1>
				<div className="flex flex-nowrap gap-3">
					<SearchForm query={query} />
					<Filter />
				</div>
			</div>
			<div className="bg-[#30273F] pt-[42px] px-[14px] pb-[46px] rounded-xl">
        {projects.map((project: ProjectType) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              completion={project.completion}
              projectId={project.id}
              download={project.download || ""}
              info={project.info}
              status={project.status}
            />
          );
        })}
			</div>
		</main>
	);
}
