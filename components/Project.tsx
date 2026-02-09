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
      title: "ERP System Integration & Inventory Management",
      date: "Juli 2025",
      tag: "BUSINESS PROCESS ANALYST | PROJECT",
      desc: "Mengonfigurasi modul Sales dan Inventory pada ERP Odoo untuk mengelola database produk retail, mengotomatisasi alur kerja pesanan, serta memantau ketersediaan stok (on-hand) secara real-time.",
      img: "/img/odooproject.jpeg",
      tools: ["Odoo ERP", "Inventory Management", "Business Workflow"],
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
    <section
      id="project"
      className="relative py-24 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden"
    >
      {/* --- LAYER GRADASI KHUSUS PROJECT --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Titik Ungu Atas */}
        <div className="absolute top-[5%] -left-[10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        {/* Titik Ungu Tengah Kanan */}
        <div className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] bg-purple-700/15 blur-[130px] rounded-full"></div>
        {/* Titik Ungu Tengah Kiri */}
        <div className="absolute top-[65%] -left-[5%] w-[500px] h-[500px] bg-indigo-600/15 blur-[120px] rounded-full"></div>
        {/* Titik Ungu Bawah Kanan */}
        <div className="absolute top-[90%] -right-[5%] w-[500px] h-[500px] bg-purple-800/20 blur-[110px] rounded-full"></div>
      </div>

      {/* --- DOT PATTERN --- */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* HEADER SECTION */}
      <div
        className="max-w-4xl mx-auto flex flex-col items-center w-full mb-24 relative z-10"
        data-aos="fade-down"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4 text-center uppercase tracking-tighter">
          My Projects
        </h2>
        <div className="h-[2px] w-20 bg-gray-600/50 rounded-full"></div>
      </div>

      {/* LIST PROJECT */}
      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        {frontEndProjects.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-12 items-center`}
          >
            {/* Sisi Gambar */}
            <div
              className="w-full md:w-1/2 group"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-orange-500/50 bg-gray-900/50 backdrop-blur-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Sisi Teks */}
            <div
              className="w-full md:w-1/2 space-y-5"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase bg-orange-500/10 px-2 py-1 rounded">
                  {item.tag}
                </span>
                <span className="text-gray-500 text-xs font-medium">
                  {item.date}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify font-light">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {item.tools.map((tool, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 text-[10px] border border-white/10 bg-white/5 rounded-full text-gray-300 font-medium hover:bg-orange-500/20 hover:border-orange-500/40 transition-all cursor-default"
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
