"use client"; // PENTING: Tambahkan ini agar useState bisa berjalan di Next.js App Router

import React, { useState } from "react";

export default function Home() {
  // State untuk mengontrol buka/tutup menu pada tampilan mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Komponen Ikon SVG Internal
  const Icons = {
    Menu: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    ),
    X: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    ),
    Book: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    )
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white">
              <Icons.Book />
            </div>
            <span className="text-xl font-bold text-black dark:text-white">NovelHub</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="/explore" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400">Jelajahi</a>
            <a href="/popular" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400">Populer</a>
            <a href="/latest" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400">Terbaru</a>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 transition-colors">
              Masuk
            </button>
          </div>

          <button 
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 md:hidden dark:border-zinc-800 dark:text-zinc-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 w-full border-b border-zinc-200 bg-white p-6 shadow-xl md:hidden dark:border-zinc-800 dark:bg-zinc-950 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              <a href="/explore" className="text-lg font-bold">Jelajahi</a>
              <a href="/popular" className="text-lg font-bold">Populer</a>
              <a href="/latest" className="text-lg font-bold">Terbaru</a>
              <hr className="border-zinc-100 dark:border-zinc-800" />
              <button className="w-full rounded-xl bg-indigo-600 py-3 font-bold text-white">
                Masuk
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center sm:text-left sm:flex-row sm:gap-12">
        <div className="relative mb-12 flex h-[400px] w-full max-w-[300px] items-center justify-center rounded-2xl bg-zinc-200 shadow-2xl dark:bg-zinc-900 sm:mb-0 sm:order-last overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-zinc-400">
            <svg className="mb-4 h-16 w-16 opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <p className="text-sm italic">Sampul Novel Pilihan</p>
          </div>
          <div className="z-10 h-full w-full rounded-2xl border-4 border-white object-cover shadow-inner dark:border-zinc-800" />
        </div>

        <div className="flex flex-1 flex-col items-center gap-8 sm:items-start">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
              Platform Light Novel Indonesia
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-black dark:text-white sm:text-6xl">
              Tulis & Bagikan <span className="text-indigo-600">Dunia Imaginasi</span> Anda.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Wadah terbaik bagi penulis Light Novel untuk menerbitkan karya, membina pangkalan pembaca, dan meneroka ribuan kisah epik setiap hari.
            </p>
          </div>

          <div className="flex gap-8 border-y border-zinc-200 py-4 dark:border-zinc-800">
            <div>
              <p className="text-2xl font-bold text-black dark:text-white">1k+</p>
              <p className="text-sm text-zinc-500">Tajuk Novel</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black dark:text-white">50k+</p>
              <p className="text-sm text-zinc-500">Pembaca Aktif</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto">
            <a className="flex h-14 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 text-base font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95" href="/upload">
              Mula Menulis
            </a>
            <a className="flex h-14 items-center justify-center rounded-xl border border-zinc-300 px-8 text-base font-bold text-zinc-900 transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900" href="/menu">
              Baca Novel
            </a>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-zinc-200 p-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-600">
        © {new Date().getFullYear()} NovelHub. Dibuat dengan semangat literasi.
      </footer>
    </div>
  );
}