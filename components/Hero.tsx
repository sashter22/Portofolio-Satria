export default function Hero() {
  return (
    //  Ganti bwarna gradasi[#0a0a0a]
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-10 gap-10 overflow-hidden bg-[#0a0a0a]">
      <div
        className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full z-0 opacity-40 blur-[100px] pointer-events-none"
        style={{ backgroundColor: "#9333ea" }}
      ></div>

      <div className="absolute -top-10 -right-10 z-0 hidden md:block opacity-20 pointer-events-none">
        <svg width="450" height="450" viewBox="0 0 400 400" fill="none">
          <path d="M400 0L400 400L0 400L400 0Z" fill="url(#grad_hero)" />
          <defs>
            <linearGradient id="grad_hero" x1="400" y1="0" x2="150" y2="300">
              <stop stopColor="#9333ea" />
              <stop offset="1" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Aura Oranye Belakang Foto */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full z-0 opacity-10 blur-[120px] pointer-events-none"
        style={{ backgroundColor: "#f97316" }}
      ></div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* FOTO */}
        <div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-700 overflow-hidden shrink-0 shadow-2xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src="/img/foto-satria.jpeg"
            alt="Satria Bayu Agustian"
            className="w-full h-full object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition duration-500"
          />
        </div>

        {/* TEKS HEADLINE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            My Portfolio
          </h1>

          <p
            className="text-white mt-4 text-sm md:text-lg font-light tracking-[0.2em]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Front End Developer | Business Process Analyst
          </p>

          <div data-aos="fade-up" data-aos-delay="800">
            <a
              href="#project"
              className="relative inline-block mt-8 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-md hover:scale-105 transition cursor-pointer shadow-lg shadow-orange-500/20"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>

      {/* --- REVISI UTAMA: FADE OUT GRADIENT --- */}
      {/* Ini yang bikin ungunya pelan-pelan ilang pas masuk ke section About/Project */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
