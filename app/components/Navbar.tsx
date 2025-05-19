'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // iconlar
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold italic">
          Tatlı <span className="text-white">Bahçe</span>
        </div>

        {/* Hamburger icon (mobil) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            {!isOpen && <Menu size={28} />}
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-yellow-400">ANASAYFA</Link>
          <Link href="/about" className="hover:text-yellow-400">HAKKIMIZDA</Link>
          <Link href="/contact" className="hover:text-yellow-400">İLETİŞİM</Link>
          <Link href="/menu" className="text-yellow-500 font-semibold">MENÜ</Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-neutral-900 z-50 flex flex-col items-center justify-center gap-6 text-xl text-white">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-6">
            <X size={28} />
          </button>

          <div className="text-3xl font-bold italic absolute top-6 left-6">
            Tatlı <span className="text-white">Bahçe</span>
          </div>

          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">ANASAYFA</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">HAKKIMIZDA</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">İLETİŞİM</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="text-yellow-500 font-semibold">MENÜ</Link>

          <div className="flex gap-4 mt-8">
            <a href="#"><i className="fab fa-facebook text-xl" /></a>
            <a href="#"><i className="fab fa-instagram text-xl" /></a>
            <a href="#"><i className="fab fa-x-twitter text-xl" /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
