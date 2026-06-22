"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scroll");

    if (scrollTo) {
      const el = document.getElementById(scrollTo);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }

      // clean URL
      window.history.replaceState({}, "", "/");
    }
  }, [searchParams]);

  return null;
}
