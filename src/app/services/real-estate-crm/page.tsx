import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  ChevronRight,
  Coins,
  Home,
  KanbanSquare,
  MapPin,
  Smartphone,
  UserPlus,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { LineIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";

/*
 * NOTE: เนื้อหาหน้านี้เป็นฉบับร่าง — รอปรับตามภาพ "CoreFlow Real Estate CRM Promo.png"
 */

export const metadata: Metadata = {
  title: "ระบบ Real Estate CRM",
  description:
    "ระบบ CRM สำหรับธุรกิจอสังหาริมทรัพย์ จัดการรายการทรัพย์ ลูกค้า ลีด นัดหมายเยี่ยมชม และติดตามการขายครบในระบบเดียว",
};

const features = [
  { icon: Home, title: "จัดการรายการทรัพย์", text: "บ้าน คอนโด ที่ดิน อาคารพาณิชย์ พร้อมรูปภาพ ราคา ทำเล และสถานะ ว่าง / จอง / ขายแล้ว" },
  { icon: UserPlus, title: "รวบรวมลีดทุกช่องทาง", text: "บันทึกลูกค้าที่สนใจจาก Facebook, LINE, เว็บไซต์ และหน้าโครงการ ไว้ในที่เดียว" },
  { icon: KanbanSquare, title: "Sales Pipeline", text: "ติดตามสถานะดีลตั้งแต่ลีดใหม่ นัดชม ต่อรอง จนถึงโอนกรรมสิทธิ์ แบบมองเห็นภาพรวม" },
  { icon: CalendarCheck, title: "นัดหมายเยี่ยมชม", text: "จัดตารางนัดชมทรัพย์ มอบหมายเซลส์ และบันทึกผลหลังเยี่ยมชม" },
  { icon: Bell, title: "แจ้งเตือนการติดตาม", text: "ไม่พลาดการโทรกลับ ระบบเตือนเมื่อถึงเวลาติดตามลูกค้าแต่ละราย" },
  { icon: Coins, title: "คำนวณค่าคอมมิชชัน", text: "สรุปยอดขายและค่าคอมมิชชันของทีมขายแต่ละคนอัตโนมัติ" },
];

const pipeline = [
  { stage: "ลีดใหม่", count: 24, color: "bg-brand-200" },
  { stage: "นัดชม", count: 12, color: "bg-brand-300" },
  { stage: "ต่อรอง", count: 7, color: "bg-brand-400" },
  { stage: "ทำสัญญา", count: 4, color: "bg-brand-500" },
  { stage: "โอนแล้ว", count: 3, color: "bg-navy-700" },
];

function CrmMock() {
  const max = Math.max(...pipeline.map((p) => p.count));
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_40px_100px_-40px_rgb(10_26_63/0.6)] ring-1 ring-navy-900/10 sm:p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-navy-900">ภาพรวมการขาย</h3>
        <span className="rounded-md bg-brand-50 px-2 py-1 text-xs text-brand-700">เดือนนี้</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: "ทรัพย์ทั้งหมด", value: "128", icon: Building2 },
          { label: "ลูกค้า", value: "342", icon: Users },
          { label: "ยอดขาย (ลบ.)", value: "18.6", icon: BarChart3 },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-xl bg-brand-50/70 p-3">
            <Icon className="size-4 text-brand-500" />
            <p className="mt-2 font-display text-xl font-bold text-navy-900">{value}</p>
            <p className="text-xs text-navy-700/60">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm font-medium text-navy-800">Sales Pipeline</p>
      <div className="mt-3 space-y-2.5">
        {pipeline.map((p) => (
          <div key={p.stage} className="flex items-center gap-3 text-sm">
            <span className="w-16 shrink-0 text-navy-700/70">{p.stage}</span>
            <span className="h-2.5 flex-1 rounded-full bg-navy-900/5">
              <span className={`block h-full rounded-full ${p.color}`} style={{ width: `${(p.count / max) * 100}%` }} />
            </span>
            <span className="w-6 text-right font-semibold text-navy-900">{p.count}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 rounded-xl border border-navy-900/8 p-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-brand-500 text-white">
          <MapPin className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-navy-900">นัดชมคอนโด — คุณสมชาย</p>
          <p className="text-xs text-navy-700/60">พรุ่งนี้ 14:00 น.</p>
        </div>
        <Bell className="size-4 text-brand-500" />
      </div>
    </div>
  );
}

export default function RealEstateCrmPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-20 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-sm text-navy-700/60" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-600">
              หน้าหลัก
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/#services" className="hover:text-brand-600">
              บริการของเรา
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-navy-900">ระบบ Real Estate CRM</span>
          </nav>

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-up">
              <span className="inline-flex rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                Real Estate CRM
              </span>
              <h1 className="mt-5 text-4xl leading-[1.2] font-bold text-navy-900 sm:text-5xl lg:text-[3.4rem]">
                ระบบบริหารลูกค้า
                <br />
                <span className="text-gradient">สำหรับธุรกิจอสังหาฯ</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-700/80">
                รวมข้อมูลทรัพย์ ลูกค้า และทีมขายไว้ในระบบเดียว ติดตามทุกดีลได้แบบเรียลไทม์
                ไม่พลาดโอกาสปิดการขาย
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.social.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
                >
                  <LineIcon className="size-5" />
                  นัดสาธิตระบบ
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
              <CrmMock />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title="ทุกเครื่องมือที่ทีมขายอสังหาฯ ต้องการ"
            description="ตั้งแต่ลีดแรกจนถึงวันโอนกรรมสิทธิ์"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-navy-900/8 p-7 transition hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-navy-700 text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-navy-700/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Smartphone, title: "ใช้ได้บนมือถือ", text: "เซลส์อัปเดตข้อมูลได้ทันทีหน้างาน" },
            { icon: Users, title: "ทำงานเป็นทีม", text: "แบ่งลูกค้าให้เซลส์ กำหนดสิทธิ์ได้" },
            { icon: BarChart3, title: "รายงานผู้บริหาร", text: "ดูยอดขายและผลงานทีมแบบเรียลไทม์" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-tech">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-brand-100/70">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="เปลี่ยนลีดเป็นยอดขาย ด้วย CoreFlow Real Estate CRM"
        subtitle="นัดสาธิตระบบฟรี พร้อมคำแนะนำการวางระบบให้เหมาะกับทีมของคุณ"
      />
    </>
  );
}
