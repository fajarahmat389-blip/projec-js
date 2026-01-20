import React from "react";

export default function Home() {
  // Komponen SVG Ikon agar kode bersih
  const Icons = {
    BookOpen: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    Upload: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
    ),
    Search: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    ),
    Flame: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
    ),
    Star: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    Clock: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Icons.BookOpen />
            </div>
            <span className="text-xl font-bold tracking-tight">NovelHub</span>
          </div>
          
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Jelajahi</a>
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Populer</a>
            <a href="#" className="text-sm font-medium hover:text-indigo-600 transition-colors">Terbaru</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
              <Icons.Search />
            </button>
            <button className="hidden rounded-xl bg-indigo-600 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-indigo-700 md:block">
              Masuk
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-12 py-16 md:flex-row md:py-24">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Icons.Star /> Platform Light Novel No. 1 di Indonesia
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
              Publikasikan <span className="text-indigo-600">Kisah Epik</span> Anda Sekarang.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Wadah kreatif bagi penulis dan pembaca Light Novel. Mulailah perjalanan Anda sebagai penulis profesional atau jelajahi ribuan dunia imajinatif.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 text-lg font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 active:scale-95">
                <Icons.Upload /> Mulai Menulis
              </button>
              <button className="flex h-14 items-center justify-center rounded-2xl border border-zinc-200 px-8 text-lg font-bold transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 active:scale-95">
                Jelajahi Cerita
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-md md:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl">
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                  <div className="scale-[5]">
                    <Icons.BookOpen />
                  </div>
                  <p className="mt-20 font-bold uppercase tracking-[0.2em]">Cerita Unggulan</p>
               </div>
               <div className="absolute bottom-0 w-full p-8 text-white backdrop-blur-md bg-black/20">
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Trending Minggu Ini</p>
                  <h3 className="text-2xl font-bold">The Chronicles of Etheria</h3>
                  <p className="text-xs opacity-70">Fantasi • 120 Bab</p>
               </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Icons.Flame />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Pembaca Aktif</p>
                  <p className="text-xl font-bold">45.2rb+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated List Section */}
        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-indigo-600"><Icons.Clock /></span> Baru Saja Diperbarui
            </h2>
            <a href="#" className="text-sm font-bold text-indigo-600 hover:underline">Lihat Semua</a>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative mb-3 aspect-[2/3] overflow-hidden rounded-xl bg-zinc-100 transition-all group-hover:-translate-y-2 group-hover:shadow-xl dark:bg-zinc-900 border border-transparent hover:border-indigo-500/30">
                   <div className="flex h-full w-full items-center justify-center text-zinc-300 dark:text-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                     <Icons.BookOpen />
                   </div>
                   <div className="absolute top-2 left-2 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                     RANK #{item}
                   </div>
                </div>
                <h4 className="line-clamp-1 font-bold group-hover:text-indigo-600 transition-colors">Reinkarnasi Sang Penulis {item}</h4>
                <p className="text-xs text-zinc-500">Aksi, Petualangan</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white">
                <Icons.BookOpen />
              </div>
              <span className="text-lg font-bold">NovelHub</span>
            </div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} NovelHub Indonesia. Semua Hak Dilindungi.
            </p>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-indigo-600 transition-colors">Kebijakan</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Bantuan</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}