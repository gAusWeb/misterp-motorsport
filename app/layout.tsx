import type { Metadata } from "next";
import Document, { Head } from "next/document";
import { Bebas_Neue, Inter, Parisienne } from "next/font/google";
import "./globals.css";
import "@/scss/main.scss";
import Header from "./components/Header";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-paris",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${inter.variable} font-sans ${bebasNeue.variable} ${parisienne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
