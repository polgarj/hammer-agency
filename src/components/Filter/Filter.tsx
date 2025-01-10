import Image from "next/image";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Filter = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="w-10 h-10 grid place-items-center">
				<Image src="/icons/filter.svg" alt="" width={17} height={10} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-[#251F30] border-none px-0 py-2">
				<DropdownMenuItem className="dropdown-item">All</DropdownMenuItem>
				<DropdownMenuItem className="dropdown-item">New</DropdownMenuItem>
				<DropdownMenuItem className="dropdown-item">In progress</DropdownMenuItem>
				<DropdownMenuItem className="dropdown-item">Finished</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Filter;
