import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookle FE",
  description: "A Next.js 15 + TypeScript project with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
