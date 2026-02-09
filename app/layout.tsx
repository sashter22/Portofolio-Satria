"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return (
    <html lang="en" className="scroll-smooth">
      {/* REVISI: Tambah overflow-x-hidden di body */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] overflow-x-hidden`}
      >
        {/* REVISI: Tambah overflow-x-hidden juga di pembungkus konten */}
        <div
          key={pathname}
          data-aos="fade"
          data-aos-duration="800"
          className="overflow-x-hidden"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
