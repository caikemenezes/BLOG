import type { Metadata } from "next";
import { Playfair_Display, Inter, Anton } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arca de Maria — Fé, verdade e história para fortalecer sua alma",
  description:
    "A maior biblioteca digital de formação católica em português: história da Igreja, doutrina, Bíblia, Nossa Senhora e vida dos santos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
