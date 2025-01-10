import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import UserMenu from "@/components/UserMenu/UserMenu";
import { Poppins } from "next/font/google";

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
      <body className={`min-h-screen bg-[url('/background.svg')]  bg-center bg-cover bg-no-repeat ${poppins.className}`}>
      <header>
        <Navigation />
        <UserMenu />
      </header>
        {children}
      </body>
    </html>
  );
}
