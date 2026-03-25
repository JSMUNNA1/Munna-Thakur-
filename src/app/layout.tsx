import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munna Thakur Software | Portfolio",
  description: "Professional software development portfolio of Munna Thakur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
