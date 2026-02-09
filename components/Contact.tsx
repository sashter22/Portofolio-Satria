"use client";

import React from "react";

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
      className="flex flex-col items-center gap-10 py-24 bg-[#121212] text-white scroll-mt-20"
    >
      <div
        className="text-center flex flex-col items-center"
        data-aos="fade-down"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-400 bg-clip-text text-transparent mb-2">
          Let's Connect!
        </h2>
        <div className="h-1 w-24 bg-gray-500 mb-4"></div>
      </div>

      <div className="flex flex-row justify-center items-center gap-8 md:gap-16">
        {contactData.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            className="flex flex-col items-center gap-3 transition-all duration-300 transform hover:scale-110 group"
          >
            <div className="p-2 transition-transform duration-300 group-hover:rotate-12">
              {contact.icon}
            </div>

            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-gray-500 uppercase group-hover:text-orange-400 transition-colors">
              {contact.platform}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
