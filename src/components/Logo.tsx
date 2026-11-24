import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/#home" className="flex items-center gap-2.5" aria-label="CoreFlow Tech หน้าหลัก">
      <Image src="/brand/logo-mark.png" alt="" width={471} height={386} className="h-9 w-auto" priority />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${dark ? "text-white" : "text-navy-900"}`}>
          Core<span className={dark ? "text-brand-300" : "text-brand-500"}>Flow</span>
        </span>
        <span
          className={`mt-0.5 text-[0.65rem] font-semibold tracking-[0.42em] ${dark ? "text-brand-300" : "text-brand-500"}`}
        >
          TECH
        </span>
      </span>
    </Link>
  );
}
