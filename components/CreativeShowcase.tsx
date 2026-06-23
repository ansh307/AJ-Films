"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "/films/1.png",
  "/films/2.png",
  "/films/3.png",
  "/films/4.png",
  "/films/5.png",
  "/films/6.png",
  "/films/7.png",
  "/films/8.png",
];

export default function CreativeShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    gsap.set(el, { xPercent: -50 }); // 👈 important

    gsap.to(el, {
      xPercent: 0,
      duration: 50,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="w-full bg-[var(--background)] text-[var(--foreground)] py-32 px-6 overflow-hidden">
      <div className="max-w-[90rem] mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight text-[var(--foreground)]/80">
          TURNING IMAGINATION <br /> INTO REALITY
        </h2>

        {/* BUTTON */}
        <div className="mt-10">
          <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full text-sm font-medium">
            Let’s Talk →
          </button>
        </div>

        <div className="mt-20 relative overflow-hidden">
          {/* FADE EDGES */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 sm:w-72 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 sm:w-72 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

          {/* OUTER (no rotation, controls clipping) */}
          <div className="overflow-visible py-10">
            {/* INNER (rotated safely) */}
            <div className="-rotate-2">
              {/* TRACK */}
              <div ref={trackRef} className="flex w-max gap-6">
                {[...images, ...images, ...images].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-[260px] md:w-[320px] lg:w-[380px] aspect-[5/3] shrink-0"
                  >
                    <Image
                      src={src}
                      alt="film"
                      fill
                      className="object-cover "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
