"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="w-full bg-[var(--background)] text-[var(--foreground)] px-6 py-28">
      <div className="max-w-[70rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          {/* HEADING */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-10">
            ABOUT US
          </h1>

          {/* TEXT */}
          <div className="space-y-6 font-semibold text-[var(--foreground)]/90 leading-relaxed text-sm md:text-base">
            <p>
              It started with a camera and a restless mind. Now, it’s a studio
              making cinema in bedrooms, balconies, and borrowed time.
            </p>

            <p>
              I’m the founder of{" "}
              <span className="font-semibold text-[var(--foreground)]">
                AJ Films
              </span>{" "}
              and still one of its creators. This journey began over five years
              ago with a simple dream: to build a hybrid studio where cinematic
              storytelling meets creator-driven content.
            </p>

            <p>
              At AJ, we bring together{" "}
              <span className="font-semibold text-[var(--foreground)]">
                brands and creators
              </span>{" "}
              under one roof helping both achieve their vision through cinematic
              quality visuals. Our goal is to make filmmaking{" "}
              <span className="font-semibold text-[var(--foreground)]">
                accessible
              </span>{" "}
              to all, empowering creators while ensuring brands feel confident
              in the quality and creativity behind every project.
            </p>

            <p>
              We’re here to{" "}
              <span className="font-semibold text-[var(--foreground)]">
                revolutionize the social media space.
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-span-2 relative w-full h-[500px] md:h-[750px]">
          <Image
            src="/about.jpg" // 👉 replace with your image
            alt="About AJ Films"
            fill
            className="object-cover"
          />

          {/* OPTIONAL: subtle dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
}
