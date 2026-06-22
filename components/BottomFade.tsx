"use client";

import { useEffect, useState } from "react";

export default function BottomFade() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      setHide(scrollBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-0 w-full h-40 z-50 transition-opacity duration-500 ${
        hide ? "opacity-0" : "opacity-100"
      } bg-gradient-to-t from-black via-black/70 to-transparent`}
    />
  );
}
