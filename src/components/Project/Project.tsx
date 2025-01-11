import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
	name: string;
	completion: number;
	projectId: string;
	download?: string;
	info: string;
	status: string;
};

const Project = ({
	name,
	completion,
	projectId,
	download,
	info,
	status,
}: ProjectProps) => {
	const statusClass = status.toLowerCase().replace(/\s+/g, "-");

	return (
		<div className={`project ${statusClass}`}>
			<div className="project-name">{name || "Unnamed Project"}</div>
			<div className="project-completion">{completion || 0}%</div>
			<div className="project-id">Project ID: {projectId}</div>

			{download && (
				<Link className="project-download flex items-center" href={download}>
					Download
					<Image
						className="ml-2"
						src="/icons/download.svg"
						alt="Download icon"
						width={16}
						height={14}
					/>
				</Link>
			)}
			{info && (
				<div className="project-info flex items-center">
					More info
					<TooltipProvider delayDuration={200}>
						<Tooltip>
							<TooltipTrigger className="bg-[#30273F] grid place-items-center rounded-full">
								<Image
									src="/icons/info.svg"
									alt="Info icon"
									width={27}
									height={27}
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>{info}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			)}
			<div className={`project-status ${statusClass}`}>{status}</div>

			<button
				className="size-6 grid place-items-center ml-[6px]"
				aria-label="open"
			>
				<Image
					src="/icons/arrow-left.svg"
					alt="Arrow icon"
					width={5}
					height={10}
				/>
			</button>
		</div>
	);
};

export default Project;
