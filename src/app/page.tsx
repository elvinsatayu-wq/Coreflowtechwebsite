import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Cloud,
  FileText,
  Gift,
  Headphones,
  Megaphone,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Users,
  Zap,
  Building2,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";
import ContactSection from "@/components/ContactSection";
import { LineIcon } from "@/components/BrandIcons";
import { services } from "@/data/services";
import { site } from "@/data/site";

const solutions = [
  { icon: FileText, th: "ระบบบัญชี", en: "Accounting" },
  { icon: ShoppingCart, th: "ระบบจัดซื้อ", en: "Procurement" },
  { icon: Users, th: "Sale CRM", en: "CRM" },
  { icon: Gift, th: "ระบบสะสมคะแนนลูกค้า", en: "Loyalty Program" },
  { icon: Megaphone, th: "ระบบบริหารงานการตลาด", en: "Marketing Management" },
];

const values = [
  { icon: BadgeCheck, title: "Reliable", th: "เชื่อถือได้", text: "ระบบเสถียร พัฒนาตามมาตรฐาน ทดสอบก่อนส่งมอบทุกครั้ง" },
  { icon: Zap, title: "Fast Implementation", th: "เริ่มใช้งานได้รวดเร็ว", text: "โปรแกรมสำเร็จรูปพร้อมใช้ ตั้งค่าและเริ่มงานได้ทันที" },
  { icon: Headphones, title: "Professional Support", th: "ดูแลตลอดการใช้งาน", text: "ทีมงานคนไทยพร้อมช่วยเหลือ ตอบไว เข้าใจธุรกิจไทย" },
];

const features = [
  {
    icon: Cloud,
    title: "ใช้งานบนคลาวด์",
    en: "Cloud-based",
    text: "เข้าใช้งานได้ทุกที่ ทุกเวลา ผ่านเว็บเบราว์เซอร์ ทั้งคอมพิวเตอร์ แท็บเล็ต และมือถือ ไม่ต้องติดตั้งโปรแกรม ไม่ต้องลงทุนเซิร์ฟเวอร์",
    points: ["ไม่ต้องติดตั้ง อัปเดตอัตโนมัติ", "ทำงานร่วมกันได้หลายผู้ใช้"],
  },
  {
    icon: ShieldCheck,
    title: "ความปลอดภัย",
    en: "Security",
    text: "ข้อมูลเข้ารหัสระหว่างส่งด้วย HTTPS สำรองข้อมูลอัตโนมัติ และกำหนดสิทธิ์การเข้าถึงตามบทบาทของผู้ใช้แต่ละคน",
    points: ["สำรองข้อมูลอัตโนมัติ", "กำหนดสิทธิ์ผู้ใช้ตามบทบาท"],
  },
  {
    icon: Receipt,
    title: "รองรับภาษีไทย VAT/WHT",
    en: "Thai Tax Ready",
    text: "คำนวณภาษีมูลค่าเพิ่ม 7% และภาษีหัก ณ ที่จ่ายอัตโนมัติ ออกใบกำกับภาษีถูกต้องตามรูปแบบกรมสรรพากร",
    points: ["คำนวณ VAT 7% อัตโนมัติ", "รองรับหัก ณ ที่จ่าย 1% / 3% / 5%"],
  },
];

export default function Home() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" aria-hidden="true" />
        <div className="absolute -top-32 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1440px] px-4 pt-14 pb-14 sm:px-6 sm:pt-20 lg:px-12">
          <div className="mx-auto max-w-4xl animate-fade-up text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
              <span className="size-2 rounded-full bg-cyan-tech" />
              {site.tagline}
            </span>
            <h1 className="mt-6 text-4xl leading-[1.2] font-bold text-navy-900 sm:text-5xl lg:text-6xl">
              ซอฟต์แวร์จัดการธุรกิจออนไลน์
              <br />
              <span className="text-gradient">ครบ จบ ในที่เดียว</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-700/80">
              ออกแบบและขายโปรแกรมสำเร็จรูปสำหรับองค์กร ช่วยให้ธุรกิจของคุณทำงานได้ง่ายขึ้น มีประสิทธิภาพมากขึ้น
              ด้วยเทคโนโลยีที่เชื่อถือได้
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 font-semibold text-white shadow-xl shadow-navy-900/20 transition hover:bg-navy-800"
              >
                ดูบริการของเรา
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={site.social.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white px-7 py-3.5 font-semibold text-navy-900 transition hover:border-brand-500 hover:text-brand-600"
              >
                <LineIcon className="size-5 text-[#06C755]" />
                ปรึกษาฟรีทาง LINE
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full animate-fade-up pb-16 [animation-delay:150ms]">
          <HeroCarousel />
        </div>
      </section>

      {/* ───────── About ───────── */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={
                <>
                  เกี่ยวกับ <span className="text-brand-500">CoreFlow Tech</span>
                </>
              }
              description="เราคือทีมพัฒนาซอฟต์แวร์ที่ตั้งใจสร้างเครื่องมือธุรกิจที่ใช้ง่าย ราคาเข้าถึงได้ และเข้าใจบริบทของธุรกิจไทย ตั้งแต่ร้านค้าออนไลน์ SME ไปจนถึงองค์กร"
            />
            <div className="mt-10 space-y-5">
              {values.map(({ icon: Icon, title, th, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-900">
                      {th} <span className="text-sm font-normal text-navy-700/50">· {title}</span>
                    </h3>
                    <p className="mt-1 text-navy-700/75">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl bg-navy-900 p-8 sm:p-10">
            <div className="bg-grid-dark absolute inset-0 rounded-3xl" aria-hidden="true" />
            <div className="absolute -right-10 -bottom-10 size-64 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-sm font-semibold tracking-[0.18em] text-cyan-tech uppercase">Our Solutions</p>
              <h3 className="mt-2 text-2xl font-bold text-white">โซลูชันสำหรับทุกงานในองค์กร</h3>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {solutions.map(({ icon: Icon, th, en }) => (
                  <li key={en} className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-medium text-white">{th}</span>
                      <span className="text-xs text-brand-200/70">{en}</span>
                    </span>
                  </li>
                ))}
                <li className="flex items-center gap-3 rounded-xl border border-dashed border-white/20 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-tech">
                    <Building2 className="size-5" />
                  </span>
                  <span>
                    <span className="block font-medium text-white">พัฒนาตามความต้องการ</span>
                    <span className="text-xs text-brand-200/70">Custom Software</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Services & Packages ───────── */}
      <section id="services" className="bg-brand-50/60 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <SectionHeading
            eyebrow="Services & Packages"
            title="บริการและแพ็คเกจ"
            description="ระบบสำเร็จรูปพร้อมใช้งาน เลือกให้เหมาะกับธุรกิจของคุณ"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-30px_rgb(10_26_63/0.35)] ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgb(30_107_255/0.45)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50">
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-navy-800 to-brand-600">
                      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
                      <Building2 className="relative size-24 text-white/80" strokeWidth={1.2} />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium text-brand-500">
                      แพ็คเกจ {i + 1} · {s.nameEn}
                    </p>
                    {s.badge && (
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-100">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold text-navy-900">{s.name}</h3>
                  <p className="mt-3 text-navy-700/80">{s.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-navy-800">
                        <Check className="mt-0.5 size-5 shrink-0 text-brand-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                    <Link
                      href={`/services/${s.slug}/`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white transition hover:bg-brand-600"
                    >
                      ดูรายละเอียด
                      <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href="/#contact"
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-navy-900/15 px-5 py-3 font-semibold text-navy-800 transition hover:border-brand-500 hover:text-brand-600"
                    >
                      สอบถามราคา
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Key Features ───────── */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <SectionHeading
            eyebrow="Why CoreFlow"
            title="จุดเด่นของเรา"
            description="ทุกระบบของ CoreFlow Tech ถูกออกแบบมาบนพื้นฐาน 3 ข้อนี้"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
            {features.map(({ icon: Icon, title, en, text, points }, i) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-3xl border border-navy-900/8 bg-white p-8 transition hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <span className="absolute top-6 right-7 font-display text-6xl font-bold text-brand-50">0{i + 1}</span>
                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-navy-700 text-white shadow-lg shadow-brand-500/30">
                  <Icon className="size-7" />
                </span>
                <h3 className="relative mt-6 text-xl font-bold text-navy-900">{title}</h3>
                <p className="text-sm font-medium text-brand-500">{en}</p>
                <p className="mt-3 leading-relaxed text-navy-700/80">{text}</p>
                <ul className="mt-5 space-y-2 border-t border-navy-900/8 pt-5">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-navy-800">
                      <Check className="size-4 text-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
