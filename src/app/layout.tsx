import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panto - Furniture Landing Page",
  description: "Make your interior more minimalistic & modern with Panto furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
