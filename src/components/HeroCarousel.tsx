"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners, BANNER_INTERVAL } from "@/data/banners";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = banners.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), BANNER_INTERVAL);
    return () => clearInterval(t);
  }, [count, paused]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-brand-50 shadow-[0_30px_80px_-30px_rgb(10_26_63/0.45)] ring-1 ring-navy-900/10 sm:rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="แบนเนอร์ CoreFlow Tech"
    >
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((b, i) => {
          const img = (
            <Image
              src={b.src}
              alt={b.alt}
              width={2056}
              height={765}
              priority={i === 0}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[2056/765] h-auto w-full object-cover"
            />
          );
          return (
            <div
              key={b.src}
              className="w-full shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} จาก ${count}`}
              aria-hidden={i !== index}
            >
              {b.href ? (
                <a href={b.href} tabIndex={i === index ? 0 : -1}>
                  {img}
                </a>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-3 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy-900 opacity-0 shadow-md backdrop-blur transition group-hover:opacity-100 hover:bg-white focus-visible:opacity-100 sm:flex"
            aria-label="แบนเนอร์ก่อนหน้า"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-3 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy-900 opacity-0 shadow-md backdrop-blur transition group-hover:opacity-100 hover:bg-white focus-visible:opacity-100 sm:flex"
            aria-label="แบนเนอร์ถัดไป"
          >
            <ChevronRight className="size-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-navy-900/30 px-2.5 py-1.5 backdrop-blur">
            {banners.map((b, i) => (
              <button
                key={b.src}
                type="button"
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                aria-label={`ไปที่แบนเนอร์ ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
