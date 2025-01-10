"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SearchFormReset = () => {
	const router = useRouter();
	const reset = () => {

    router.replace(window.location.pathname);
    		const form = document.querySelector("#searchForm") as HTMLFormElement;

		if (form) form.reset();
	};

	return (
		<button className="text-white text-[20px] grid place-items-center w-[36px] h-[36px] rounded-lg" type="reset" onClick={reset}>
			×
		</button>
	);
};

export default SearchFormReset;
