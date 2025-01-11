"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filter from "@/components/Filter/Filter";
import Project from "@/components/Project/Project";
import SearchForm from "@/components/SearchForm/SearchForm";
import ProjectsData from "@/db/projects.json";
import { ScrollArea } from "@/components/ui/scroll-area"

type ProjectType = {
	name: string;
	completion: number;
	id: string;
	download?: string;
	info: string;
	status: string;
};

export default function AllProjects() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [query, setQuery] = useState<string>(searchParams.get("query") || "");
	const [statusFilter, setStatusFilter] = useState<string>(
		searchParams.get("status") || ""
	);
	const [projects, setProjects] = useState<ProjectType[]>([]);

	// Load the project data
	useEffect(() => {
		setProjects(ProjectsData.projects);
	}, []);

	// Filter projects based on both search query and status
	const filteredProjects = projects.filter((project: ProjectType) => {
		const matchesStatus =
			!statusFilter ||
			project.status.toLowerCase() === statusFilter.toLowerCase();
		const matchesQuery =
			!query ||
			project.name.toLowerCase().includes(query.toLowerCase()) ||
			project.id.toLowerCase().includes(query.toLowerCase());
		return matchesStatus && matchesQuery;
	});

	// Handle filter change
	const handleFilterChange = (filter: string) => {
		setStatusFilter(filter);

		// Update the URL query parameters
		const params = new URLSearchParams(searchParams.toString());
		if (filter) {
			params.set("status", filter);
		} else {
			params.delete("status");
		}
		router.push(`?${params.toString()}`);
	};

	// Handle search submission
	const handleSearchChange = (searchQuery: string) => {
		setQuery(searchQuery);

		// Update the URL query parameters
		const params = new URLSearchParams(searchParams.toString());
		if (searchQuery) {
			params.set("query", searchQuery);
		} else {
			params.delete("query");
		}
		router.push(`?${params.toString()}`);
	};

	return (
		<main className="main-container">
			<div className="flex justify-between mb-[26px]">
				<h1 className="h1">All projects</h1>
				<div className="flex flex-nowrap gap-3">
					<SearchForm query={query} onSearchChange={handleSearchChange} />
					<Filter onFilterChange={handleFilterChange} />
				</div>
			</div>
			<div className="bg-[#30273F] pt-[42px] px-[14px] pb-[46px] rounded-xl">
				<ScrollArea className="h-[501px] pr-4 ">
					{filteredProjects.map((project: ProjectType) => (
						<Project
							key={project.id}
							name={project.name}
							completion={project.completion}
							projectId={project.id}
							download={project.download || ""}
							info={project.info}
							status={project.status}
						/>
					))}
				</ScrollArea>
			</div>
		</main>
	);
}
