import type { Metadata } from "next";
import { ttFirsNeue, ttHoves } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "xSchool - new gen marketing",
  description:
    "A high-level marketing leadership course for those preparing to think and perform like CxOs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ttHoves.variable} ${ttFirsNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
