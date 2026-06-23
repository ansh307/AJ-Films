"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

const logos = [
  "/logos/bbc.png",
  "/logos/netflix.png",
  "/logos/universal.png",
  "/logos/tate.png",
  "/logos/paramount.png",
];

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] bg-[var(--background)] px-6 transition-colors duration-300">
      {/* CONTAINER */}
      <div className="max-w-[90rem] mx-auto h-full flex flex-col items-center justify-center text-center">
        {/* TITLE */}
        <h1 className="mt-16 font-serif font-semibold text-[80px] md:text-[140px] lg:text-[180px] xl:text-[240px] tracking-wide leading-none text-[var(--foreground)]">
          AJ FILMS
        </h1>

        {/* SUBTEXT */}
        <p className="mt-18 text-xs md:text-sm tracking-[0.3em] text-[var(--foreground)]/60 max-w-4xl">
          BRAND FILMS, CONTENT, SOCIAL MEDIA, STORYTELLING, UGC, COMMERCIALS,
          CREATIVE DIRECTION, MUSIC VIDEO
        </p>

        {/* CLIENT LOGOS */}
        <div className="mt-12 w-full relative overflow-hidden">
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-44 z-10 bg-gradient-to-r from-[var(--background)] to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-44 z-10 bg-gradient-to-l from-[var(--background)] to-transparent" />

          {/* SCROLL */}
          <div className="flex w-max items-center gap-20 sm:gap-36 animate-scroll">
            {[...logos, ...logos].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="client logo"
                width={140}
                height={70}
                className="opacity-100 hover:opacity-100 transition scale-75 sm:scale-100 duration-300 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
