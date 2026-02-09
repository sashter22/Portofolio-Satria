"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT ME", href: "#about" },
    { name: "PROJECT", href: "#project" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent italic">
          Satria Bayu Agustian
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-500 text-[#121212] font-bold text-xs tracking-widest active:scale-95 transition-all duration-200"
          >
            CONTACT
          </Link>
        </div>

        {/* MOBILE TOGGLE (Warna Abu-abu & 3 Baris Rata) */}
        <button
          className="md:hidden text-gray-400 active:scale-90 transition-transform z-[70] p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR (Geser Kiri, Lebar 40%) */}
      <div
        className={`fixed top-0 left-0 h-screen w-[45%] md:w-[30%] bg-[#121212] border-r border-gray-800 z-[65] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col pl-8 gap-8 mt-28 w-full">
          {[...navLinks, { name: "CONTACT", href: "#contact" }].map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-bold tracking-[0.3em] text-gray-400 hover:text-orange-400 active:translate-x-2 transition-all duration-200 uppercase cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
