export default function Project() {
  const frontEndProjects = [
    {
      title: "Happy Wedding Organizer",
      date: "Feb 2026",
      tag: "FRONTEND DEVELOPER | FREELANCE",
      desc: "Membangun landing page responsif menggunakan Next.js, Tailwind CSS, dan TypeScript yang dioptimasi dengan Google Search Console untuk memperluas jangkauan digital jasa Wedding Organizer.",
      img: "/img/wedding1.png",
      tools: ["Next.js", "Tailwind", "TypeScript", "GSC"],
    },
    {
      title: "Wedding Digital Catalog",
      date: "Feb 2026",
      tag: "FRONTEND DEVELOPER | FREELANCE",
      desc: "Mengembangkan katalog digital interaktif untuk rincian paket catering serta dekorasi, sekaligus mengelola deployment otomatis melalui Vercel guna memastikan performa website yang cepat dan stabil.",
      img: "/img/wedding2.png",
      tools: ["Next.js", "Vercel", "Interactive UI"],
    },
    {
      title: "UMKM Buryam Janda",
      date: "Jan 2026",
      tag: "FRONTEND DEVELOPER | FREELANCE",
      desc: "Mengembangkan landing page responsif menggunakan Next.js dan Tailwind CSS guna memperkuat branding digital serta meningkatkan visibilitas usaha di mesin pencari.",
      img: "/img/buryam1.png",
      tools: ["Next.js", "Tailwind", "SEO"],
    },
    {
      title: "Digital Branding & Visibility",
      date: "Jan 2026",
      tag: "FRONTEND DEVELOPER | FREELANCE",
      desc: "Merancang struktur konten seperti profil usaha, menu produk, dan informasi kontak agar mudah diakses pelanggan guna meningkatkan kepercayaan konsumen.",
      img: "/img/buryam2.png",
      tools: ["Responsive Design", "UI/UX"],
    },
    {
      title: "UMKM Warkop Asyik",
      date: "Nov 2025",
      tag: "FRONTEND DEVELOPER | FREELANCE",
      desc: "Merancang landing page responsif menggunakan Next.js dan Tailwind CSS untuk meningkatkan visibilitas di mesin pencari serta mempermudah akses informasi pelanggan.",
      img: "/img/warkop1.png",
      tools: ["Next.js", "Tailwind", "Fast Load"],
    },
    {
      title: "Modern Interface Optimization",
      date: "Nov 2025",
      tag: "FRONTEND DEVELOPER | FREELANCE",
      desc: "Mengimplementasikan antarmuka modern yang dioptimasi untuk performa tinggi dan pengalaman pengguna yang optimal melalui deployment otomatis di Vercel.",
      img: "/img/warkop2.png",
      tools: ["Performance", "Vercel", "Modern UI"],
    },
    {
      title: "Sentiment Analysis: Clash of Clans Players",
      date: "Agu 2025",
      tag: "DATA SCIENCE | THESIS PROJECT",
      desc: "Melakukan penelitian mendalam terhadap ribuan ulasan pemain CoC menggunakan algoritma SVM untuk mengekstraksi opini publik. Berhasil mengklasifikasikan data dengan tingkat kepuasan positif sebesar 77.30%.",
      img: "/img/skripsi.png",
      tools: [
        "Pyhton",
        "SVM Algotihm",
        "Data Science",
        "Natural Language Processing",
      ],
    },
    {
      title: "KPU Kabupaten Bogor (Kantor Desa Gunungsari)",
      date: "Nov 2024",
      tag: "REGIONAL ELECTION DATA ENTRY | INTERNSHIP",
      desc: "Bertanggung jawab penuh dalam menginput dan memverifikasi 14.000 data hasil suara dengan tingkat akurasi tinggi guna menjamin keakuratan laporan akhir Pilkada tingkat desa.",
      img: "/img/gunsar1.jpeg",
      tools: ["Data Verification", "Digital Systems", "Accuracy Control"],
    },
    {
      title: "Real-time Field Monitoring",
      date: "Nov 2024",
      tag: "GOVERNMENT SECTION STAFF ASSISTANT| INTERNSHIP",
      desc: "Melakukan monitoring langsung ke 26 TPS dan mengunggah laporan situasi secara real-time ke sistem digital Pilkada untuk memastikan kelancaran operasional pemungutan suara.",
      img: "/img/gunsar2.jpeg",
      tools: ["Real-time Reporting", "Field Operations", "Crisis Management"],
    },

    {
      title: "NIB & IKD Digital Integration",
      date: "Sep - Des 2024",
      tag: "GOVERNMENT SECTION STAFF ASSISTANT| INTERNSHIP",
      desc: "Mengelola administrasi penerbitan 90 dokumen NIB dan memfasilitasi aktivasi 35 akun IKD untuk mendukung percepatan digitalisasi layanan publik di wilayah Kecamatan Citeureup.",
      img: "/img/ikdnib.jpeg",
      tools: ["Administration", "Digital Identity", "OSS System"],
    },
    {
      title: "Monitoring & Evaluasi APBDes",
      date: "Sep - Des 2024",
      tag: "GOVERNMENT SECTION STAFF ASSISTANT| INTERNSHIP",
      desc: "Melaksanakan peninjauan langsung dan evaluasi terhadap laporan APBDes untuk memastikan transparansi serta akuntabilitas penggunaan anggaran di tingkat desa.",
      img: "/img/monev.jpeg",
      tools: ["Data Verification", "Field Monitoring", "Evaluation"],
    },
    {
      title: "Data Recapitulation System",
      date: "Sep - Des 2024",
      tag: "GOVERNMENT SECTION STAFF ASSISTANT| INTERNSHIP",
      desc: "Melakukan rekapitulasi data sektoral secara sistematis untuk mendukung pelaporan instansi yang akurat dan tepat waktu.",
      img: "/img/rekap.jpeg",
      tools: ["Data Entry", "Microsoft Word", "Reporting"],
    },
    {
      title: "Standard Operating Procedure (SOP) Design",
      date: "Sep - Des 2024",
      tag: "GOVERNMENT SECTION STAFF ASSISTANT| INTERNSHIP",
      desc: "Menyusun diagram alur SOP pelayanan publik untuk menyederhanakan birokrasi, memberikan panduan teknis yang jelas bagi petugas dan masyarakat.",
      img: "/img/sop.png",
      tools: ["Process Mapping", "SOP Development", "Workflow Design"],
    },
    {
      title: "POSYANDU PELITA HARAPAN",
      date: "Okt - Des 2023",
      tag: "UI/UX DESIGN | PROJECT",
      desc: "Merancang antarmuka pengguna (UI) dan alur pengalaman pengguna (UX) untuk sistem manajemen data posyandu, mencakup pembuatan wireframe hingga prototype interaktif guna mempermudah kader dalam pendataan balita.",
      img: "/img/posyandu.png",
      tools: ["Figma", "Wireframing", "UI Design", "Prototyping"],
    },
  ];
  return (
    <section id="project" className="py-20 px-6 md:px-10 bg-[#121212]">
      {/* HEADER SECTION */}
      <div
        className="max-4xl mx-auto flex flex-col items-center w-full mb-16"
        data-aos="fade-down" // Header muncul dari atas
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-400 bg-clip-text text-transparent mb-2 text-center uppercase tracking-tighter">
          My Projects
        </h2>
        <div className="h-1 w-24 bg-gray-500"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-32">
        {frontEndProjects.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-12 items-center`}
          >
            {/* Sisi Gambar: Muncul dari sisi sesuai posisinya */}
            <div
              className="w-full md:w-1/2 group"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Zig-zag effect
              data-aos-duration="1000"
            >
              <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-gray-800 transition-all duration-500 group-hover:border-orange-500/50">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-40"></div>
              </div>
            </div>

            {/* Sisi Teks: Muncul dari arah berlawanan gambar */}
            <div
              className="w-full md:w-1/2 space-y-4"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Berlawanan dengan gambar
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase">
                  {item.tag}
                </span>
                <span className="text-gray-500 text-xs font-medium">
                  {item.date}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                {item.desc}
              </p>

              {/* Tools yang Digunakan: Muncul kecil satu-satu */}
              <div className="flex flex-wrap gap-2 pt-4">
                {item.tools.map((tool, tIndex) => (
                  <span
                    key={tIndex}
                    data-aos="zoom-in"
                    data-aos-delay={400 + tIndex * 100} // Efek muncul satu-satu buat tag
                    className="px-3 py-1 text-[10px] border border-gray-700 rounded-full text-gray-300 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
