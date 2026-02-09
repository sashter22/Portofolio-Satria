"use client";

import React from "react";

// Data Sosmed (Definisikan di sini biar nggak error merah lagi)
const contactData = [
  {
    platform: "WHATSAPP",
    link: "https://wa.me/6281388817411",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WA"
        className="w-[32px] h-[32px]"
      />
    ),
  },
  {
    platform: "EMAIL",
    link: "mailto:satriabayuagustian@gmail.com",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
        alt="Email"
        className="w-[32px] h-[32px]"
      />
    ),
  },
  {
    platform: "INSTAGRAM",
    link: "https://www.instagram.com/saatriaa_22?igsh=M2ttMWhnbHN4MHp6",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
        alt="IG"
        className="w-[32px] h-[32px]"
      />
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center gap-12 py-24 bg-[#0a0a0a] text-white scroll-mt-20 overflow-hidden"
    >
      {/* --- EFEK GRADASI UNGU PENUTUP (Layer Terpisah biar Enteng) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Dot Pattern - Konsisten dengan section lain */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Header Section */}
      <div
        className="text-center flex flex-col items-center relative z-10"
        data-aos="fade-down"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4 uppercase tracking-tighter">
          Let's Connect!
        </h2>
        {/* Garis Abu-abu Minimalis */}
        <div className="h-[2px] w-20 bg-gray-600/50 mb-4 rounded-full"></div>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-row justify-center items-center gap-8 md:gap-20 relative z-10">
        {contactData.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            className="flex flex-col items-center gap-4 transition-all duration-300 transform hover:-translate-y-2 group"
          >
            {/* Box Ikon dengan Glow Ungu saat Hover */}
            <div className="relative p-4 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 shadow-sm group-hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              {contact.icon}
            </div>

            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase group-hover:text-purple-400 transition-colors">
              {contact.platform}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
