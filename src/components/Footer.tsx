import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";
import Logo from "./Logo";
import { FacebookIcon, LineIcon } from "./BrandIcons";

function DbdBadge() {
  const { badgeImage, verifyUrl } = site.dbd;

  const content = badgeImage ? (
    <Image src={badgeImage} alt="DBD Registered" width={160} height={64} className="h-16 w-auto" />
  ) : (
    // Placeholder — replace by setting site.dbd.badgeImage in src/data/site.ts
    <div className="flex h-16 w-40 items-center justify-center gap-2 rounded-lg border border-dashed border-white/25 text-xs text-white/50">
      <ShieldCheck className="size-5" />
      <span className="leading-tight">
        DBD Registered
        <br />
        (พื้นที่ติดตรา)
      </span>
    </div>
  );

  return verifyUrl ? (
    <a href={verifyUrl} target="_blank" rel="noopener noreferrer" aria-label="ตรวจสอบการจดทะเบียน DBD">
      {content}
    </a>
  ) : (
    content
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-brand-100/70">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="lg:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            ออกแบบและพัฒนาซอฟต์แวร์สำเร็จรูปสำหรับองค์กร ช่วยให้ธุรกิจของคุณทำงานง่ายขึ้น มีประสิทธิภาพมากขึ้น
            ด้วยเทคโนโลยีที่เชื่อถือได้
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.line}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#06C755]"
            >
              <LineIcon />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#1877F2]"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">เมนู</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">บริการ</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <a href={`mailto:${site.contact.email}`} className="break-all hover:text-white">
              {site.contact.email}
            </a>
            <br />
            <a href={site.contact.phoneHref} className="hover:text-white">
              {site.contact.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 px-4 py-6 text-sm sm:px-6 md:flex-row lg:px-12">
          <p className="text-center md:text-left">
            © {site.copyrightYear} {site.legalName}. สงวนลิขสิทธิ์ · {site.domain}
          </p>
          <DbdBadge />
        </div>
      </div>
    </footer>
  );
}
