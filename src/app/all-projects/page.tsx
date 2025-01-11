"use client";

import { useState, useEffect } from "react";
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
export default function AllProjects({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
  const [query, setQuery] = useState<string>("");
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");

  // Fetch data from ProjectsData (you could replace this with an API call)
  useEffect(() => {
    const fetchData = async () => {
      const searchQuery = (await searchParams).query || "";
      setQuery(searchQuery);
      setProjects(ProjectsData.projects);
    };

    fetchData();
  }, [searchParams]);

  // Filter projects based on selected status
  const filteredProjects = statusFilter
    ? projects.filter((project: ProjectType) => project.status.toLowerCase() === statusFilter.toLowerCase())
    : projects;

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setStatusFilter(filter);
  };

	return (
		<main className="main-container">
			<div className="flex justify-between mb-[26px]">
				<h1 className="h1">All projects</h1>
				<div className="flex flex-nowrap gap-3">
					<SearchForm query={query} />
          <Filter onFilterChange={handleFilterChange} />
				</div>
			</div>
			<div className="bg-[#30273F] pt-[42px] px-[14px] pb-[46px] rounded-xl">
        <div className="overflow-y-auto h-[501px]">
          {filteredProjects.map((project: ProjectType) => {
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
			</div>
		</main>
	);
}
