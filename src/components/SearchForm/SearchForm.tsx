"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({
	query,
	onSearchChange,
}: {
	query: string;
	onSearchChange: (searchQuery: string) => void;
}) => {
	const [inputValue, setInputValue] = useState(query);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearchChange(inputValue.trim()); // Update the search query only on submit
	};

	const handleReset = () => {
		setInputValue(""); // Reset the input value
		onSearchChange(""); // Clear the search query in the parent
	};

	return (
		<form
			className="search-form"
			id="searchForm"
			action="#"
			onSubmit={handleSubmit}
		>
			<input
				name="query"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Search for Project"
				className={`${query && "has-query"}`}
			/>
			<div className="flex items-center absolute right-0 h-full">
				{inputValue && <SearchFormReset onReset={handleReset} />}
				<button
					type="submit"
					aria-label="search"
					className="grid place-items-center w-[40px] h-[36px] rounded-lg"
				>
					<Image src="/icons/search.svg" alt="" width={16} height={16} />
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
