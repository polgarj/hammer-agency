import Filter from "@/components/Filter/Filter";
import Project from "@/components/Project/Project";
import SearchForm from "@/components/SearchForm/SearchForm";

export default async function AllProjects({searchParams}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

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
        <Project />
      </div>
		</main>
	);
}
