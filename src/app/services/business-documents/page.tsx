import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Database,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  FileWarning,
  Package,
  Percent,
  Plus,
  Printer,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { LineIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "ระบบจัดการเอกสารทางธุรกิจ",
  description:
    "ระบบออกเอกสารทางธุรกิจ ใบเสนอราคา ใบวางบิล ใบแจ้งหนี้ ใบเสร็จรับเงิน ใบกำกับภาษี ไม่ต้องพิมพ์เอง ไม่ต้องกลัวข้อมูลหาย รองรับ VAT/WHT",
};

const docTypes = [
  { icon: Percent, name: "ใบเสนอราคา", en: "Quotation", prefix: "QT" },
  { icon: FileSpreadsheet, name: "ใบวางบิล", en: "Billing Note", prefix: "BL" },
  { icon: FileWarning, name: "ใบแจ้งหนี้", en: "Invoice", prefix: "INV" },
  { icon: FileCheck2, name: "ใบเสร็จรับเงิน", en: "Receipt", prefix: "RV" },
  { icon: FileText, name: "ใบกำกับภาษี", en: "Tax Invoice", prefix: "TAX" },
];

const benefits = [
  {
    icon: Clock,
    title: "สร้างเอกสารได้รวดเร็ว เพียงไม่กี่คลิก",
    text: "เลือกลูกค้า เลือกสินค้า ระบบคำนวณยอด ภาษี และส่วนลดให้ทันที แปลงใบเสนอราคาเป็นใบแจ้งหนี้และใบเสร็จได้ในคลิกเดียว",
  },
  {
    icon: Database,
    title: "บันทึกสินค้าและรายชื่อลูกค้าในที่เดียว",
    text: "ฐานข้อมูลลูกค้า ที่อยู่ เลขประจำตัวผู้เสียภาษี และรายการสินค้า/บริการ พร้อมราคา เรียกใช้ซ้ำได้ทุกครั้งไม่ต้องพิมพ์ใหม่",
  },
  {
    icon: ShieldCheck,
    title: "ปลอดภัย มั่นใจ ข้อมูลไม่สูญหาย",
    text: "เก็บข้อมูลบนคลาวด์ สำรองข้อมูลอัตโนมัติ ไม่ต้องกังวลไฟล์ Excel หาย หรือคอมพิวเตอร์เสีย เข้าดูย้อนหลังได้ตลอดเวลา",
  },
];

const moreFeatures = [
  { icon: Percent, title: "คำนวณ VAT / WHT อัตโนมัติ", text: "VAT 7% และหัก ณ ที่จ่าย ถูกต้องตามกรมสรรพากร" },
  { icon: Printer, title: "พิมพ์ / ดาวน์โหลด PDF", text: "เอกสารพร้อมโลโก้และลายเซ็นของบริษัทคุณ" },
  { icon: BarChart3, title: "รายงานสรุปยอด", text: "ดูยอดขาย ยอดค้างชำระ และเอกสารแต่ละสถานะ" },
  { icon: Users, title: "หลายผู้ใช้ กำหนดสิทธิ์ได้", text: "ทำงานร่วมกันทั้งทีม แยกสิทธิ์ตามหน้าที่" },
  { icon: Cloud, title: "ใช้งานได้ทุกที่", text: "ผ่านเว็บเบราว์เซอร์ ทั้งคอมพิวเตอร์และมือถือ" },
  { icon: Settings, title: "เลขที่เอกสารอัตโนมัติ", text: "รันเลขตามรูปแบบที่กำหนด ไม่ซ้ำ ไม่ข้าม" },
];

const mockRows = [
  { date: "16/10/2025", type: "ใบเสนอราคา", no: "QT-20251016-001" },
  { date: "15/10/2025", type: "ใบวางบิล", no: "BL-20251015-001" },
  { date: "14/10/2025", type: "ใบแจ้งหนี้", no: "INV-20251014-001" },
  { date: "13/10/2025", type: "ใบเสร็จรับเงิน", no: "RV-20251013-001" },
  { date: "10/10/2025", type: "ใบกำกับภาษี", no: "TAX-20251010-001" },
];

function AppMock() {
  const nav = [
    { icon: FileText, label: "เอกสารธุรกิจ", active: true },
    { icon: Users, label: "ลูกค้า" },
    { icon: Package, label: "สินค้า" },
    { icon: BarChart3, label: "รายงาน" },
    { icon: Settings, label: "ตั้งค่า" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_40px_100px_-40px_rgb(10_26_63/0.6)] ring-1 ring-navy-900/10">
      <div className="flex items-center gap-1.5 border-b border-navy-900/8 bg-brand-50/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-green-400" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-navy-700/60 ring-1 ring-navy-900/8">
          app.{site.domain}/documents
        </span>
      </div>
      <div className="flex">
        <aside className="hidden w-44 shrink-0 bg-navy-900 py-4 sm:block">
          <div className="flex items-center gap-2 px-4 pb-4">
            <Image src="/brand/logo-mark.png" alt="" width={471} height={386} className="h-6 w-auto" />
            <span className="font-display text-sm font-semibold text-white">CoreFlow</span>
          </div>
          {nav.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 px-4 py-2.5 text-sm ${active ? "bg-brand-500 text-white" : "text-brand-100/70"}`}
            >
              <Icon className="size-4" />
              {label}
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-navy-900">เอกสารธุรกิจ</h3>
            <span className="inline-flex items-center gap-1 rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white">
              สร้างเอกสารใหม่ <Plus className="size-3.5" />
            </span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[26rem] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-navy-900/8 text-navy-700/60">
                  <th className="py-2 pr-3 font-medium">วันที่</th>
                  <th className="py-2 pr-3 font-medium">ประเภทเอกสาร</th>
                  <th className="py-2 pr-3 font-medium">เลขที่เอกสาร</th>
                  <th className="py-2 font-medium">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {mockRows.map((r) => (
                  <tr key={r.no} className="border-b border-navy-900/5 text-navy-800">
                    <td className="py-2.5 pr-3 whitespace-nowrap">{r.date}</td>
                    <td className="py-2.5 pr-3 whitespace-nowrap">{r.type}</td>
                    <td className="py-2.5 pr-3 font-mono text-[0.7rem] whitespace-nowrap sm:text-xs">{r.no}</td>
                    <td className="py-2.5">
                      <span className="inline-flex items-center gap-1 whitespace-nowrap text-green-600">
                        <CheckCircle2 className="size-3.5" /> ส่งแล้ว
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessDocumentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1440px] px-4 pt-8 pb-20 sm:px-6 lg:px-12">
          <nav className="flex items-center gap-1 text-sm text-navy-700/60" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-600">
              หน้าหลัก
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/#services" className="hover:text-brand-600">
              บริการของเรา
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-navy-900">ระบบจัดการเอกสารทางธุรกิจ</span>
          </nav>

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-up">
              <span className="inline-flex rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                Business Document System
              </span>
              <h1 className="mt-5 text-4xl leading-[1.2] font-bold text-navy-900 sm:text-5xl lg:text-[3.4rem]">
                ระบบออกเอกสาร
                <br />
                ทางธุรกิจ
              </h1>
              <p className="mt-5 inline-block -skew-x-6 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-400 px-5 py-2 text-2xl font-bold text-white shadow-lg shadow-brand-500/30 sm:text-3xl">
                <span className="inline-block skew-x-6">ไม่ต้องพิมพ์เอง</span>
              </p>
              <p className="mt-4 text-2xl font-bold text-navy-800 sm:text-3xl">
                ไม่ต้องกลัว<span className="text-brand-500">ข้อมูลหาย</span>
              </p>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-700/80">
                ออกใบเสนอราคา ใบวางบิล ใบแจ้งหนี้ ใบเสร็จรับเงิน และใบกำกับภาษี ได้อย่างมืออาชีพ
                จัดการเอกสารทั้งหมดของธุรกิจไว้ในระบบเดียว
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.social.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
                >
                  <LineIcon className="size-5" />
                  ขอทดลองใช้งาน
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white px-7 py-3.5 font-semibold text-navy-900 transition hover:border-brand-500 hover:text-brand-600"
                >
                  สอบถามราคา
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="animate-fade-up [animation-delay:150ms]">
              <AppMock />
            </div>
          </div>
        </div>
      </section>

      {/* Document types */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <SectionHeading
            eyebrow="Documents"
            title="ครบทุกเอกสารที่ธุรกิจต้องใช้"
            description="ข้อมูลไหลต่อเนื่องจากเอกสารหนึ่งไปอีกเอกสารหนึ่ง ไม่ต้องคีย์ซ้ำ"
          />
          <ol className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5 lg:gap-8">
            {docTypes.map(({ icon: Icon, name, en, prefix }, i) => (
              <li
                key={name}
                className="relative flex flex-col items-center rounded-2xl border border-navy-900/8 bg-white px-4 py-7 text-center shadow-[0_12px_40px_-24px_rgb(10_26_63/0.35)] last:col-span-2 sm:last:col-span-1"
              >
                <span className="absolute top-3 left-4 text-xs font-semibold text-navy-700/40">0{i + 1}</span>
                <span className="flex size-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{name}</h3>
                <p className="text-sm text-navy-700/60">{en}</p>
                <span className="mt-3 rounded-md bg-brand-50 px-2 py-0.5 font-mono text-xs text-brand-700">{prefix}-xxxx</span>
                {i < docTypes.length - 1 && (
                  <ChevronRight
                    className="absolute top-1/2 -right-3.5 z-10 hidden size-6 -translate-y-1/2 rounded-full bg-white text-brand-400 ring-1 ring-brand-100 lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <SectionHeading
              dark
              align="left"
              eyebrow="Benefits"
              title="ทำไมต้องระบบเอกสารของ CoreFlow"
            />
            <div className="mt-10 space-y-4">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white">
                    <Icon className="size-7" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-1.5 leading-relaxed text-brand-100/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[2rem] bg-brand-500/30 blur-3xl" aria-hidden="true" />
            <Image
              src="/images/business-documents-promo.webp"
              alt="ระบบออกเอกสารทางธุรกิจ CoreFlow Tech ไม่ต้องพิมพ์เอง ไม่ต้องกลัวข้อมูลหาย"
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 512px, 100vw"
              className="relative rounded-3xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* More features */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <SectionHeading eyebrow="Features" title="ฟีเจอร์ครบ ใช้งานง่าย" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {moreFeatures.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-navy-900/8 p-6 transition hover:border-brand-300 hover:bg-brand-50/50"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1 text-sm text-navy-700/75">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            จัดการเอกสารธุรกิจได้อย่างมืออาชีพ ด้วย CoreFlow Tech
          </>
        }
        subtitle="พร้อมใช้งานทันที — ติดต่อเราเพื่อขอทดลองใช้งานหรือรับใบเสนอราคา"
      />
    </>
  );
}
