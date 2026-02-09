export default function Footer() {
  return (
    <footer className="py-12 text-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Garis halus penghubung biar nggak kaku */}
      <div className="max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

      <div className="relative z-10 flex flex-col items-center gap-2">
        <p className="text-gray-500 text-[11px] tracking-[0.3em] uppercase font-medium">
          © 2026 Satria Bayu Agustian
        </p>
        <p className="text-gray-600 text-[9px] tracking-[0.2em] uppercase opacity-60">
          • Information Systems •
        </p>
      </div>

      {/*  biar selaras sama Contact */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-purple-600/5 blur-[50px] rounded-full pointer-events-none"></div>
    </footer>
  );
}
