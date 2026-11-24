"use client";

import { useState } from "react";
import { CheckCircle2, ExternalLink, Loader2, Send } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-700/40 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { endpoint, externalUrl } = site.contactForm;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // No form service configured → hand the message to the visitor's email app
    if (!endpoint) {
      const subject = `[coreflowtech.net] สอบถาม: ${data.service || "ทั่วไป"} — ${data.name}`;
      const body = [
        `ชื่อ: ${data.name}`,
        `บริษัท: ${data.company || "-"}`,
        `อีเมล: ${data.email}`,
        `โทร: ${data.phone || "-"}`,
        `บริการที่สนใจ: ${data.service || "-"}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `สอบถามจากเว็บไซต์: ${data.name}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-50 px-6 py-16 text-center">
        <CheckCircle2 className="size-14 text-brand-500" />
        <h3 className="mt-4 text-2xl font-bold text-navy-900">ส่งข้อความเรียบร้อยแล้ว</h3>
        <p className="mt-2 text-navy-700/80">ทีมงานจะติดต่อกลับโดยเร็วที่สุด ขอบคุณที่สนใจ CoreFlow Tech</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 hover:underline"
        >
          ส่งข้อความอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">
            ชื่อ–นามสกุล <span className="text-brand-500">*</span>
          </span>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="ชื่อของคุณ" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">บริษัท / ร้านค้า</span>
          <input name="company" autoComplete="organization" className={inputCls} placeholder="ชื่อธุรกิจ" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">
            อีเมล <span className="text-brand-500">*</span>
          </span>
          <input name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">เบอร์โทรศัพท์</span>
          <input name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="08x-xxx-xxxx" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">บริการที่สนใจ</span>
        <select name="service" className={inputCls} defaultValue="">
          <option value="">— เลือกบริการ —</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="พัฒนาระบบตามความต้องการ">พัฒนาระบบตามความต้องการ</option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">
          ข้อความ <span className="text-brand-500">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${inputCls} resize-y`}
          placeholder="เล่าความต้องการของธุรกิจคุณให้เราฟัง"
        />
      </label>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ หรือติดต่อทาง LINE / อีเมล {site.contact.email}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 disabled:opacity-60"
        >
          {status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          ส่งข้อความ
        </button>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/15 px-6 py-3.5 font-semibold text-navy-800 transition hover:border-brand-500 hover:text-brand-600"
          >
            กรอกแบบฟอร์มออนไลน์
            <ExternalLink className="size-4" />
          </a>
        )}
      </div>
      {!endpoint && (
        <p className="text-xs text-navy-700/60">ระบบจะเปิดโปรแกรมอีเมลของคุณพร้อมข้อความที่กรอกไว้</p>
      )}
    </form>
  );
}
