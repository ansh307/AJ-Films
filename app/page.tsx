import BottomFade from "@/components/BottomFade";
import CreativeShowcase from "@/components/CreativeShowcase";
import FilmsSection from "@/components/FilmsSection";
import Hero from "@/components/Hero";
import ScrollHandler from "@/components/ScrollHandler";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Hero />
      <FilmsSection />
      <CreativeShowcase />
      <BottomFade />
    </main>
  );
}
