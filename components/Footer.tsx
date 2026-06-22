"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import { BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full order-white/10 bg-[var(--background)] text-[var(--foreground)] px-6 py-10">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <p className="text-sm text-[var(--foreground)]/60">
          © {year} AJ FILMS. All rights reserved.
        </p>

        {/* CENTER (optional branding) */}
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--foreground)]/60">
          Creative Studio
        </p>

        <div className="flex items-center gap-6 text-[var(--foreground)]/60">
          <Link
            href="#"
            target="_blank"
            className="hover:text-[var(--foreground)] transition"
          >
            <BsInstagram size={18} />
          </Link>

          <Link
            href="#"
            target="_blank"
            className="hover:text-[var(--foreground)] transition"
          >
            <BsYoutube size={18} />
          </Link>

          <Link href="#" className="hover:text-[var(--foreground)] transition">
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
