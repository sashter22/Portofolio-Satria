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
  const pathname = usePathname(); // Ambil data URL saat ini

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  // KUNCI BIAR TRANSISI HALAMAN JALAN:
  // Setiap kali pathname (URL) berubah, kita refresh AOS-nya
  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212]`}
      >
        {/* Bungkus children pake div yang punya animasi fade-in */}
        {/* Key={pathname} ini penting bgt biar React tau ini halaman baru */}
        <div key={pathname} data-aos="fade" data-aos-duration="800">
          {children}
        </div>
      </body>
    </html>
  );
}
