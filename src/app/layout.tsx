import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "After Trials — Where evidence meets empathy",
  description: "A new kind of social space — built exclusively for doctors.",
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