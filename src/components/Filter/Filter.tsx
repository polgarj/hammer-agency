import Image from "next/image";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterProps {
	onFilterChange: (filter: string) => void;
}

const Filter = ({ onFilterChange }: FilterProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="w-10 h-10 grid place-items-center hover:border-solid hover:border-white hover:border-[1px] rounded-lg transition-all">
				<Image src="/icons/filter.svg" alt="" width={17} height={10} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-[#251F30] border-none px-0 py-2">
				<DropdownMenuItem
					className="dropdown-item"
					onClick={() => onFilterChange("")}
				>
					All
				</DropdownMenuItem>
				<DropdownMenuItem
					className="dropdown-item"
					onClick={() => onFilterChange("New project")}
				>
					New
				</DropdownMenuItem>
				<DropdownMenuItem
					className="dropdown-item"
					onClick={() => onFilterChange("In progress")}
				>
					In progress
				</DropdownMenuItem>
				<DropdownMenuItem
					className="dropdown-item"
					onClick={() => onFilterChange("Finished")}
				>
					Finished
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Filter;
