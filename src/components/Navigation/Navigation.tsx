"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
	const pathname = usePathname();
	const [expanded, setExpanded] = useState(false);

	return (
		<nav
			className="fixed top-0 left-0 w-[82px] h-screen bg-[#2F1255B2]"
			id="mainNav"
		>
			<ul>
				<li className="w-full flex flex-col items-center mb-7">
					<Link
						className="mt-1 mb-2 :after"
						href="#"
						aria-current={pathname === "/" ? "page" : undefined}
					>
						<Image src="/logo.png" alt="AI" width={64} height={64} />
					</Link>
					<hr className="w-11 bg-[#A08EAE]" />
				</li>
				<li>
					<Link
						className="navigation-item"
						href="/my-projects"
						aria-current={pathname === "/my-projects" ? "page" : undefined}
					>
						<Image src="/icons/my_projects.svg" alt="" width={14} height={14} />
						My projects
					</Link>
				</li>
				<li>
					<Link
						className="navigation-item"
						href="/all-projects"
						aria-current={pathname === "/all-projects" ? "page" : undefined}
					>
						<Image
							src="/icons/all_projects.svg"
							alt=""
							width={22}
							height={14}
						/>
						All projects
					</Link>
				</li>
				<li>
					<Link
						className="navigation-item"
						href="/messages"
						aria-current={pathname === "/messages" ? "page" : undefined}
					>
						<Image src="/icons/messages.svg" alt="" width={16} height={12} />
						Messages
					</Link>
				</li>
				<li>
					<Link
						className="navigation-item"
						href="/all-contacts"
						aria-current={pathname === "/all-contacts" ? "page" : undefined}
					>
						<Image
							src="/icons/all_contacts.svg"
							alt=""
							width={16}
							height={19}
						/>
						All contacts
					</Link>
				</li>
			</ul>
			<button
				className={`w-6 h-6 absolute top-6 right-[-12px] rounded-full bg-[#402074] grid place-items-center hover:brightness-125 transition-all ${
					expanded ? "rotate-180" : ""
				}`}
				onClick={() => setExpanded(!expanded)}
			>
				<Image
					src="/icons/arrows_right.svg"
					alt="Toggle navigation"
					width={11}
					height={10}
				/>
			</button>
		</nav>
	);
};

export default Navigation;
