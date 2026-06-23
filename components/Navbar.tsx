"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Films", href: "#films" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<(HTMLElement | null)[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    // initial state
    gsap.set(menuRef.current, { y: "-100%" });

    // timeline
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
      })
      .fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3",
      );
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (menuOpen) tl.current.play();
    else tl.current.reverse();
  }, [menuOpen]);

  const logo = "/ajfilms-white-logo.png";

  const handleFilmsClick = () => {
    setMenuOpen(false);

    if (pathname === "/") {
      const el = document.getElementById("films");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/?scroll=films");
    }
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center z-9999">
          <Image
            src={logo}
            alt="AJ Films"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-14 text-sm">
          {navItems.map((item) => {
            const isActive = item.href !== "#films" && pathname === item.href;

            if (item.name === "Films") {
              return (
                <button
                  key={item.name}
                  onClick={handleFilmsClick}
                  className="text-base font-semibold"
                >
                  Films
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-semibold ${
                  isActive ? "text-red-500" : "hover:text-red-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden relative w-6 h-5 z-999"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute w-full h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 top-2" : "top-0"
            }`}
          />
          <span
            className={`absolute w-full h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "top-2"
            }`}
          />
          <span
            className={`absolute w-full h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 top-2" : "top-4"
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className="fixed inset-0 opacity-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-2xl font-semibold"
      >
        {navItems.map((item, i) => {
          if (item.name === "Films") {
            return (
              <button
                key={item.name}
                ref={(el) => {
                  linksRef.current[i] = el;
                }}
                onClick={handleFilmsClick}
              >
                Films
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
