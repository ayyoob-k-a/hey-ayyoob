import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ayyoob K — Senior Flutter Developer",
  description:
    "Personal portfolio of Ayyoob K, a Senior Flutter Developer who builds fast, scalable mobile apps and clean digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
