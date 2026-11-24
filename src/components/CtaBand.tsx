import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { LineIcon } from "./BrandIcons";

export default function CtaBand({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-navy-700 px-6 py-12 text-center shadow-2xl shadow-brand-500/25 sm:px-12">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          {subtitle && <p className="mx-auto mt-3 max-w-xl text-brand-100">{subtitle}</p>}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={site.social.line}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 shadow-lg transition hover:bg-brand-50"
            >
              <LineIcon className="size-5 text-[#06C755]" />
              แชทกับเราทาง LINE
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              ขอใบเสนอราคา
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
