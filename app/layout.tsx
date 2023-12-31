import type { Metadata } from "next";
import Document, { Head } from "next/document";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/bebas-neue"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/parisienne"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* <div className="container mx-auto"> */}

        {/* </div> */}
        {children}
      </body>
    </html>
  );
}
