import BottomFade from "@/components/BottomFade";
import CreativeShowcase from "@/components/CreativeShowcase";
import FilmsSection from "@/components/FilmsSection";
import Hero from "@/components/Hero";
import ScrollHandler from "@/components/ScrollHandler";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <ScrollHandler /> {/* 👈 tiny client component */}
      <Hero />
      <FilmsSection />
      <CreativeShowcase />
      <BottomFade />
    </main>
  );
}
