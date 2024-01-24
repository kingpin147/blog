import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { MyProfilePic } from "./components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kingpin Devops BLog Website",
  description: "Professtional website services and related blogs created by Muhammad Nouman Attique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
        <MyProfilePic/>
        {children}</body>
    </html>
  );
}
