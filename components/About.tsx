import Image from "next/image";

export default function About() {
  const techStack = [
    { src: "/img/vscode.png", alt: "VS Code" },
    { src: "/img/javascript.png", alt: "Javascript" },
    { src: "/img/css.png", alt: "CSS" },
    { src: "/img/html.png", alt: "HTML" },
    { src: "/img/github.png", alt: "Github" },
    { src: "/img/nextjs.png", alt: "NextJS" },
    { src: "/img/figma.png", alt: "Figma" },
    { src: "/img/python.png", alt: "Python" },
  ];

  const dataTools = [
    { src: "/img/excel.png", alt: "Excel" },
    { src: "/img/word.png", alt: "Word" },
    { src: "/img/ppt.png", alt: "PPT" },
    { src: "/img/capcut.png", alt: "Capcut" },
    { src: "/img/canva.png", alt: "Canva" },
    { src: "/img/drawio.png", alt: "Draw.io" },
    { src: "/img/odoo.png", alt: "Odoo" },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* SISI KIRI: KONTEN TEKS & FOTO MOBILE */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start">
          {/* 1. Judul: Muncul pertama */}
          <div
            className="flex flex-col items-center md:items-start w-full"
            data-aos="fade-right"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-400 bg-clip-text text-transparent mb-2 text-center md:text-left">
              Introduction
            </h2>
            <div className="h-1 w-24 bg-gray-500 mb-8"></div>
          </div>

          {/* 2. FOTO JAS (khusus tampilan mobile) */}
          <div
            className="block md:hidden w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-800 mb-10 shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/img/satriashter.jpeg"
              alt="Satria Mobile"
              width={260}
              height={347}
              className="object-cover grayscale"
            />
          </div>

          {/* 3. Deskripsi: Muncul setelah judul */}
          <p
            className="text-gray-300 leading-relaxed text-justify mb-12 text-sm md:text-base w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Lulusan S1 Sistem Informasi dengan pengalaman dalam administrasi
            publik serta pengembangan sistem web. Terbiasa mengelola data skala
            besar dengan akurasi tinggi serta menyusun laporan teknis dan
            standar operasional secara sistematis. Memiliki analisis kuat dalam
            mengidentifikasi kebutuhan sistem untuk mendukung efisiensi kerja
            dan kelancaran operasional perusahaan.
          </p>

          {/* 4. GRID ICON SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* TECH STACK */}
            <div
              className="flex flex-col items-center md:items-start w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="font-bold mb-8 text-gray-400 uppercase tracking-widest text-[10px] md:text-xs text-center md:text-left">
                Tech Stack & Web Dev
              </h4>
              <div className="grid grid-cols-4 md:flex md:flex-wrap gap-y-10 gap-x-4 md:gap-x-6 justify-items-center md:justify-start w-full">
                {techStack.map((item, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 flex items-center justify-center"
                    data-aos="zoom-in"
                    data-aos-delay={500 + index * 50} // Efek staggered
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        height: ["Javascript", "HTML", "Python"].includes(
                          item.alt,
                        )
                          ? "28px"
                          : "32px",
                        width: "auto",
                      }}
                      className={`object-contain hover:scale-110 transition-transform duration-300 
                        ${item.alt === "Github" || item.alt === "NextJS" ? "invert brightness-200" : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* DATA TOOLS */}
            <div
              className="flex flex-col items-center md:items-start w-full"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4 className="font-bold mb-8 text-gray-400 uppercase tracking-widest text-[10px] md:text-xs text-center md:text-left">
                Data, Analyst & Tools
              </h4>
              <div className="grid grid-cols-4 md:flex md:flex-wrap gap-y-10 gap-x-4 md:gap-x-6 justify-items-center md:justify-start w-full">
                {dataTools.map((item, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 flex items-center justify-center"
                    data-aos="zoom-in"
                    data-aos-delay={700 + index * 50}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        height: ["Excel", "Word", "Odoo"].includes(item.alt)
                          ? "28px"
                          : "32px",
                        width: "auto",
                      }}
                      className="object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SISI KANAN: FOTO JAS mode desktop */}
        <div
          className="hidden md:block md:w-2/5 md:sticky md:top-24 mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl group">
            <Image
              src="/img/satriashter.jpeg"
              alt="Satria Professional"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
