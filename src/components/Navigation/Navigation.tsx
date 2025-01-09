'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const Navigation = () => {
  const pathname = usePathname();

	return (
		<nav className="fixed top-0 left-0 w-[82px] h-screen bg-[#2F1255B2]">
			<ul>
				<li className="w-full flex flex-col items-center mb-7">
					<Link className="mt-1 mb-2 :after" href="#" aria-current={pathname === '/' ? 'page' : undefined}>
						<img src="/logo.png" alt="AI" />
					</Link>
					<hr className="w-11 bg-[#A08EAE]" />
				</li>
				<li>
					<Link className="navigation-item" href="/my-projects" aria-current={pathname === '/my-projects' ? 'page' : undefined}>
						<img className="w-3.5" src="/icons/my_projects.svg" alt="" />
						My projects
					</Link>
				</li>
				<li>
					<Link className="navigation-item" href="/all-projects" aria-current={pathname === '/all-projects' ? 'page' : undefined}>
						<img className="w-[22px]" src="/icons/all_projects.svg" alt="" />
						All projects
					</Link>
				</li>
				<li>
					<Link className="navigation-item" href="/messages" aria-current={pathname === '/messages' ? 'page' : undefined}>
						<img className="w-4" src="/icons/messages.svg" alt="" />
						Messages
					</Link>
				</li>
				<li>
					<Link className="navigation-item" href="/all-contacts" aria-current={pathname === '/all-contacts' ? 'page' : undefined}>
						<img className="w-4" src="/icons/all_contacts.svg" alt="" />
						All contacts
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
