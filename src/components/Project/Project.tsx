import React, { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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
	const [openDialog, setOpenDialog] = useState(false);

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
			<div className="min-w-[100px] ml-[25px] text-right">
				<span className={`project-status ${statusClass}`}>{status}</span>
			</div>

			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogTrigger
					className="size-[25px] grid place-items-center ml-[6px] hover:border-solid hover:border-white hover:border-[1px] rounded-lg transition-all"
					aria-label="open"
				>
					<Image
						src="/icons/arrow-left.svg"
						alt="Arrow icon"
						width={5}
						height={10}
					/>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{name}</DialogTitle>
						<DialogDescription>Assign the loop masters</DialogDescription>
						<div className="loop-wrapper">
							<p className="loop-title">
								<Image
									src="/icons/briefing.svg"
									alt=""
									width={15}
									height={13}
								/>
								Briefing loop
							</p>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Choose loop master" />
								</SelectTrigger>
								<SelectContent className="bg-[#251F30] border-none px-0 py-2">
									<SelectItem className="dropdown-item" value="name-1">
										LM Name 1
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-2">
										LM Name 2
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-3">
										LM Name 3
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="loop-wrapper">
							<p className="loop-title !bg-[#8A38F5]">
								<Image src="/icons/search.svg" alt="" width={14} height={14} />
								Briefing loop
							</p>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Choose loop master" />
								</SelectTrigger>
								<SelectContent className="bg-[#251F30] border-none px-0 py-2">
									<SelectItem className="dropdown-item" value="name-1">
										LM Name 1
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-2">
										LM Name 2
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-3">
										LM Name 3
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="loop-wrapper">
							<p className="loop-title !bg-[#7234F8]">
								<Image
									src="/icons/strategy.svg"
									alt=""
									width={14}
									height={14}
								/>
								Briefing loop
							</p>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Choose loop master" />
								</SelectTrigger>
								<SelectContent className="bg-[#251F30] border-none px-0 py-2">
									<SelectItem className="dropdown-item" value="name-1">
										LM Name 1
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-2">
										LM Name 2
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-3">
										LM Name 3
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="loop-wrapper">
							<p className="loop-title !bg-[#6225e7]">
								<Image
									src="/icons/download.svg"
									alt=""
									width={14}
									height={14}
								/>
								Briefing loop
							</p>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Choose loop master" />
								</SelectTrigger>
								<SelectContent className="bg-[#251F30] border-none px-0 py-2">
									<SelectItem className="dropdown-item" value="name-1">
										LM Name 1
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-2">
										LM Name 2
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-3">
										LM Name 3
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="loop-wrapper">
							<p className="loop-title !bg-[#389AF5]">
								<Image
									src="/icons/presentation.svg"
									alt=""
									width={15}
									height={15}
								/>
								Briefing loop
							</p>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Choose loop master" />
								</SelectTrigger>
								<SelectContent className="bg-[#251F30] border-none px-0 py-2">
									<SelectItem className="dropdown-item" value="name-1">
										LM Name 1
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-2">
										LM Name 2
									</SelectItem>
									<SelectItem className="dropdown-item" value="name-3">
										LM Name 3
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<button
							className="bg-[#8A38F5] text-white text-[15px] px-4 py-2 rounded-lg !mt-0"
							onClick={() => setOpenDialog(false)}
						>
							Confirm
						</button>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Project;
