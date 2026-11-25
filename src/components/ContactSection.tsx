import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import { FacebookIcon, LineIcon } from "./BrandIcons";

export default function ContactSection() {
  const items = [
    { icon: Mail, label: "อีเมล", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: Phone, label: "โทรศัพท์", value: site.contact.phone, href: site.contact.phoneHref },
    { icon: MapPin, label: "ที่อยู่", value: site.contact.address },
    { icon: Clock, label: "เวลาทำการ", value: site.contact.hours },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-40 size-[32rem] rounded-full bg-brand-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <SectionHeading
          dark
          eyebrow="Contact Us"
          title="ติดต่อเรา"
          description="ปรึกษาฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมแนะนำระบบที่เหมาะกับธุรกิจของคุณ"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Contact info */}
          <div className="space-y-4 lg:col-span-2">
            {items.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-brand-100/60">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold break-all text-white hover:text-brand-300">
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={site.social.line}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#06C755] px-4 py-3.5 font-semibold text-white transition hover:brightness-110"
              >
                <LineIcon />
                LINE
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-4 py-3.5 font-semibold text-white transition hover:brightness-110"
              >
                <FacebookIcon />
                Facebook
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:col-span-3">
            <h3 className="text-xl font-bold text-navy-900">ส่งข้อความถึงเรา</h3>
            <p className="mt-1 mb-6 text-sm text-navy-700/70">กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 1 วันทำการ</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
