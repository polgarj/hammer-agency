import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import UserMenu from "@/components/UserMenu/UserMenu";
import { Poppins } from "next/font/google";
import { Suspense } from "react";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: "AI - Hammer Agency",
	description: "Placeholder for description",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`min-h-screen bg-[url('/background.svg')]  bg-center bg-cover bg-no-repeat ${poppins.className}`}
			>
				<header>
					<Navigation />
					<UserMenu />
				</header>
				<div className="pt-[89px]">
					<Suspense
						fallback={
							<main className="main-container">
								<h1 className="h1">Loading...</h1>
							</main>
						}
					>
						{children}
					</Suspense>
				</div>
			</body>
		</html>
	);
}
