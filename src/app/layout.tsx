import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import UserMenu from "@/components/UserMenu/UserMenu";

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
      <body className="min-h-screen bg-[url('/background.svg')]  bg-center bg-cover bg-no-repeat">
      <header>
        <Navigation />
        <UserMenu />
      </header>
        {children}
      </body>
    </html>
  );
}
