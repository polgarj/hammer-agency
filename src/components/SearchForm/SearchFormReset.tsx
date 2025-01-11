"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const SearchFormReset = ({ onReset }: { onReset: () => void }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const reset = () => {
		// Clear the query parameter in the URL
		const params = new URLSearchParams(searchParams.toString());
		params.delete("query");

		router.replace(`?${params.toString()}`);
		onReset(); // Notify parent to reset the input value
	};

	return (
		<button
			className="text-white text-[20px] grid place-items-center w-[40px] h-[36px] rounded-lg"
			type="button"
			onClick={reset}
		>
			<Image src="/icons/close.svg" alt="Close" width={13} height={13} />
		</button>
	);
};

export default SearchFormReset;
