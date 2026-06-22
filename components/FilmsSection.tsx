"use client";

import Image from "next/image";

const films = [
  {
    title: "THE INVESTIGATION OF LUCY LETBY",
    type: "FEATURE FILM",
    year: "2026",
    image: "/films/1.png",
    desc: "A powerful feature documentary examining the conviction of Lucy Letby, a neonatal nurse found guilty of murdering seven babies and attempting to kill six others. ",
  },
  {
    title: "REBEL NUN",
    type: "SHORT FILM",
    year: "2025",
    image: "/films/2.png",
    desc: "Produced by triple Academy Award®-winning Passion Pictures and Universal Pictures, Rebel Nun is a deeply moving feature documentary telling the extraordinary story of Sister Helen Prejean, a Catholic nun and America’s most famous activist for the abolition of the death penalty.",
  },
  {
    title: "THE MASKED SCAMMER / LE MASQUE",
    type: "DOCUMENTARY",
    year: "2024",
    image: "/films/3.png",
    desc: "Produced by triple Academy Award®-winning Passion Pictures and Netflix, the Masked Scammer tells the extraordinary story of Gilbert Chikli, a master con man who scammed French elites out of millions of euros by donning a silicone mask and impersonating the French foreign minister during a fabricated terrorist crisis.",
  },
  {
    title: "GRANDDAD, DEMENTIA AND ME",
    type: "SHORT FILM",
    year: "2023",
    image: "/films/4.png",
    desc: "Filmed over three years, Granddad, Dementia & Me is an emotional and intimate authored documentary following my granddad, Tom Sivyer, as he battles with vascular dementia.",
  },

  {
    title: "Hand To God",
    type: "FEATURE FILM",
    year: "2026",
    image: "/films/5.png",
    desc: "A powerful feature documentary examining the conviction of Lucy Letby, a neonatal nurse found guilty of murdering seven babies and attempting to kill six others. ",
  },
  {
    title: "Guideprice Flat To Rent",
    type: "FEATURE FILM",
    year: "2026",
    image: "/films/6.png",
    desc: "Produced by triple Academy Award®-winning Passion Pictures and Universal Pictures, Rebel Nun is a deeply moving feature documentary telling the extraordinary story of Sister Helen Prejean, a Catholic nun and America’s most famous activist for the abolition of the death penalty.",
  },
  {
    title: "Inhala, Exhala",
    type: "FEATURE FILM",
    year: "2026",
    image: "/films/7.png",
    desc: "Produced by triple Academy Award®-winning Passion Pictures and Netflix, the Masked Scammer tells the extraordinary story of Gilbert Chikli, a master con man who scammed French elites out of millions of euros by donning a silicone mask and impersonating the French foreign minister during a fabricated terrorist crisis.",
  },
  {
    title: "THE HAIRCUT",
    type: "FEATURE FILM",
    year: "2026",
    image: "/films/8.png",
    desc: "Filmed over three years, Granddad, Dementia & Me is an emotional and intimate authored documentary following my granddad, Tom Sivyer, as he battles with vascular dementia.",
  },
];

export default function FilmsSection() {
  return (
    <section
      id="films"
      className="w-full  bg-[var(--background)] text-[var(--foreground)] px-6 pt-8 pb-24"
    >
      <div className="max-w-[90rem] mx-auto">
        {/* HEADING */}
        <div className="mb-20 flex items-center gap-6">
          {/* LEFT LINE */}
          <div className="flex-1 h-px bg-[var(--foreground))]" />

          {/* TEXT */}
          <h2 className="mx-10 text-sm md:text-base tracking-[0.25em] font-semibold uppercase text-[var(--foreground))] whitespace-nowrap">
            Films | Documentary
          </h2>

          {/* RIGHT LINE */}
          <div className="flex-1 h-px bg-[var(--foreground))]" />
        </div>
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6">
          {films.map((film, i) => (
            <div key={i} className="group cursor-pointer">
              {/* IMAGE */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={film.image}
                  alt={film.title}
                  fill
                  className="object-cover transition  duration-500 group-hover:scale-105 "
                />
              </div>

              {/* TEXT */}
              <div className="mt-4 space-y-2">
                <h3 className="text-sm tracking-[0.4em] uppercase text-[var(--foreground)]">
                  {film.title}
                </h3>

                <p className="text-xs text-[var(--foreground)]/60 tracking-wide">
                  {film.type} | {film.year}
                </p>
                <p className="text-xs text-[var(--foreground)]/80 tracking-wide">
                  {film.desc.length > 220
                    ? film.desc.slice(0, 220) + "..."
                    : film.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
