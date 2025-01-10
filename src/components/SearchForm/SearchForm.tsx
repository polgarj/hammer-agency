"use client";

import React from "react";
import Form from "next/form";
import Image from "next/image";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query: string }) => {
	return (
		<Form className="search-form" id="searchForm" action="#" scroll={false}>
			<input
				name="query"
				defaultValue={query}
				placeholder="Search for Project"
			/>
			<div className="flex  items-center absolute right-1 h-full">
				{query && <SearchFormReset />}
				<button type="submit" aria-label="search" className="grid place-items-center w-[36px] h-[36px] rounded-lg">
					<Image src="/icons/search.svg" alt="" width={16} height={16} />
				</button>
			</div>
		</Form>
	);
};

export default SearchForm;
