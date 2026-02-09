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
    <section
      id="about"
      className="relative py-24 px-6 md:px-10 bg-transparent text-white overflow-hidden"
    >
      {/* --- ELEMEN DEKORATIF --- */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{ backgroundColor: "#7E22CE", zIndex: 0 }}
      ></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start relative z-10">
        {/* SISI KIRI: KONTEN TEKS */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start">
          <div
            className="flex flex-col items-center md:items-start w-full"
            data-aos="fade-right"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4 text-center md:text-left uppercase tracking-tighter">
              About Me
            </h2>
            {/* REVISI: Garis Abu-abu Elegan (Sama kayak Project) */}
            <div className="h-[2px] w-20 bg-gray-600/50 mb-8 rounded-full"></div>
          </div>

          {/* FOTO MOBILE */}
          <div
            className="block md:hidden w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border border-gray-800 mb-10 shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/img/satriashter.jpeg"
              alt="Satria Mobile"
              width={260}
              height={347}
              className="object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>

          <p
            className="text-gray-400 leading-relaxed text-justify mb-12 text-sm md:text-base w-full font-light"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* --- TECH STACK --- */}
            <div
              className="flex flex-col items-center md:items-start w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="font-bold mb-8 text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Tech Stack & Web Dev
              </h4>
              <div className="grid grid-cols-4 md:flex md:flex-wrap gap-y-10 gap-x-4 md:gap-x-6 justify-items-center md:justify-start">
                {techStack.map((item, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 flex items-center justify-center group"
                    data-aos="zoom-in"
                    data-aos-delay={500 + index * 50}
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
                      className={`object-contain group-hover:scale-125 transition-all duration-300 
                        ${item.alt === "Github" || item.alt === "NextJS" ? "invert brightness-200" : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* --- DATA TOOLS --- */}
            <div
              className="flex flex-col items-center md:items-start w-full"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4 className="font-bold mb-8 text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Data, Analyst & Tools
              </h4>
              <div className="grid grid-cols-4 md:flex md:flex-wrap gap-y-10 gap-x-4 md:gap-x-6 justify-items-center md:justify-start">
                {dataTools.map((item, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 flex items-center justify-center group"
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
                      className="object-contain group-hover:scale-125 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SISI KANAN: FOTO DESKTOP */}
        <div
          className="hidden md:block md:w-2/5 md:sticky md:top-24 mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(126,34,206,0.05)] group">
            <Image
              src="/img/satriashter.jpeg"
              alt="Satria Professional"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition duration-1000 scale-105 group-hover:scale-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
