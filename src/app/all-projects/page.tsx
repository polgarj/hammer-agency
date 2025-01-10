import SearchForm from "@/components/SearchForm/SearchForm";

export default async function AllProjects({searchParams}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

	return (
		<main className="main-container">
			<div className="flex justify-between">
				<h1 className="h1">All projects</h1>
				<SearchForm query={query} />
			</div>
		</main>
	);
}
