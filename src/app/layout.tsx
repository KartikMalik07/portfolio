import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartik Malik - Full Stack Developer",
  description: "Full Stack Developer • ML Enthusiast • DevOps Explorer",
  keywords: ["Kartik Malik", "Full Stack Developer", "React", "Next.js", "Machine Learning", "DevOps"],
  authors: [{ name: "Kartik Malik" }],
  openGraph: {
    title: "Kartik Malik - Full Stack Developer",
    description: "Full Stack Developer • ML Enthusiast • DevOps Explorer",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
