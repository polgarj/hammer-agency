import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const Project = () => {
	return (
		<div className="project">
			<span className="project-name">Project name 00</span>
			<span className="project-completetion">0%</span>
			<span className="project-id">Project ID: 2409XC2K8</span>
			<div className="project-info">
				More info
				<TooltipProvider delayDuration={200}>
					<Tooltip>
						<TooltipTrigger className="bg-[#30273F] grid place-items-center rounded-full">
							<Image src="/icons/info.svg" alt="" width={27} height={27} />
						</TooltipTrigger>
						<TooltipContent>
							<p>Tooltip info</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<span className="project-status">New project</span>
		</div>
	);
};

export default Project;
