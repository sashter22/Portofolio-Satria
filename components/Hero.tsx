export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-10 gap-10">
      <div
        className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-700 overflow-hidden shrink-0"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src="/img/foto-satria.jpeg"
          alt="Satria Bayu Agustian"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
        />
      </div>

      {/* Teks Headline */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1
          className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          My Portfolio
        </h1>

        <p
          className="text-white mt-4 text-sm md:text-lg font-light tracking-widest uppercase"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Front End Developer | Business Process Analyst
        </p>

        <div data-aos="fade-up" data-aos-delay="800">
          <a
            href="#project"
            className="inline-block mt-8 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-md hover:scale-105 transition cursor-pointer"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
