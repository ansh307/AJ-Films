"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Films", href: "#films" }, // 👈 important
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 👈 prevents hydration issues

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  // const logo =
  //   currentTheme === "dark"
  //     ? "/ajfilms-white-logo.png"
  //     : "/ajfilms-black-logo.png";

  const logo = "/ajfilms-white-logo.png";

  const handleFilmsClick = () => {
    if (pathname === "/") {
      // already on home → scroll
      const el = document.getElementById("films");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // go home first, then scroll
      router.push("/?scroll=films");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="AJ Films"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-14 text-sm">
          {navItems.map((item) => {
            const isActive = item.href !== "#films" && pathname === item.href;

            if (item.name === "Films") {
              return (
                <button
                  key={item.name}
                  onClick={handleFilmsClick}
                  className="group relative text-base font-semibold transition"
                >
                  Films
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-transparent group-hover:bg-red-500 transition" />
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative text-base font-semibold transition ${
                  isActive ? "text-red-500" : "hover:text-red-500"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[1px] w-full ${
                    isActive
                      ? "bg-red-500"
                      : "bg-transparent group-hover:bg-red-500"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
