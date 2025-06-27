import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Scientific Curiosity Labs - Inspiring Innovation in India",
  description: "Creating interactive science labs across Indian cities starting from Lucknow. Promoting scientific curiosity, quantum computing, thorium reactors, and research-oriented mindset among youth.",
  keywords: "science labs, quantum computing, thorium reactors, scientific curiosity, Indian youth, research, innovation, technology",
  authors: [{ name: "Scientific Curiosity Labs" }],
  creator: "Scientific Curiosity Labs",
  openGraph: {
    title: "Scientific Curiosity Labs",
    description: "Inspiring scientific curiosity and research-oriented mindset among Indian youth",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Curiosity Labs",
    description: "Inspiring scientific curiosity and research-oriented mindset among Indian youth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
