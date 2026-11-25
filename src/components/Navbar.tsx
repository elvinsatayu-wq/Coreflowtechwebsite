"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/data/site";
import { LineIcon } from "./BrandIcons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-navy-900/10 bg-white/90 shadow-[0_4px_24px_-12px_rgb(10_26_63/0.25)] backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-lg px-4 py-2 text-[0.95rem] font-medium text-navy-800 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={site.social.line}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 md:inline-flex"
        >
          <LineIcon className="size-4" />
          ปรึกษาฟรี
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-navy-900 hover:bg-brand-50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-navy-900/10 bg-white md:hidden">
          <ul className="mx-auto max-w-[1440px] space-y-1 px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-navy-800 hover:bg-brand-50 hover:text-brand-600"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={site.social.line}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-semibold text-white"
              >
                <LineIcon className="size-4" />
                ปรึกษาฟรีผ่าน LINE
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
