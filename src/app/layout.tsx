import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";

export const metadata: Metadata = {
  title: "Atharva Kharwadkar",
  description: "Personal portfolio for Atharva Kharwadkar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <Sidenav />
        <main className="pt-16 md:ml-64 transition-all duration-300 ease-in-out">
          <div className="p-2 sm:p-4 lg:p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
