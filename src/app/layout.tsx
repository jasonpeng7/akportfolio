import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "600", "700"], // thin, light, semibold, bold
  variable: "--font-poppins",
});

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
      <body className={poppins.className}>
        <Navbar />
        <Sidenav />
        <main className="pt-20 md:ml-64 transition-all duration-300 ease-in-out">
          <div className="p-2 sm:p-4 lg:p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
