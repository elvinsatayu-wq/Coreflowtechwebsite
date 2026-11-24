/**
 * ข้อมูลหลักของบริษัท — แก้ไขที่ไฟล์นี้ไฟล์เดียว แล้วข้อมูลจะเปลี่ยนทั้งเว็บไซต์
 */
export const site = {
  name: "CoreFlow Tech",
  legalName: "CoreFlow Tech",
  domain: "coreflowtech.net",
  url: "https://coreflowtech.net",
  tagline: "Smart Software for a Better Business",
  description:
    "CoreFlow Tech ออกแบบและพัฒนาซอฟต์แวร์จัดการธุรกิจออนไลน์สำหรับองค์กร ระบบออกเอกสารทางธุรกิจ ระบบ Real Estate CRM ใช้งานบนคลาวด์ ปลอดภัย รองรับภาษีไทย VAT/WHT",

  contact: {
    email: "coreflowtechnology@gmail.com",
    phone: "081-915-6997",
    phoneHref: "tel:+66819156997",
    // TODO: ใส่ที่อยู่บริษัทจริง
    address: "กรุงเทพมหานคร ประเทศไทย",
    hours: "จันทร์ – ศุกร์ 09:00 – 18:00 น.",
  },

  social: {
    line: "https://lin.ee/T5USxuK",
    facebook: "https://www.facebook.com/coreflowtech",
  },

  /**
   * ฟอร์มติดต่อ (เว็บเป็น Static จึงต้องส่งข้อมูลไปบริการภายนอก)
   * - endpoint: URL ของบริการรับฟอร์ม เช่น Formspree ("https://formspree.io/f/xxxxxxx"),
   *   Getform, Web3Forms ฯลฯ — ระบบจะ POST แบบ JSON ไปยัง URL นี้
   * - ถ้าเว้นว่าง: ฟอร์มจะเปิดโปรแกรมอีเมลของผู้ใช้ (mailto) พร้อมข้อความที่กรอกไว้
   * - externalUrl: ลิงก์ไปฟอร์มภายนอก เช่น Google Forms (ถ้ามี จะแสดงปุ่มเพิ่ม)
   */
  contactForm: {
    endpoint: "",
    externalUrl: "",
  },

  /**
   * ตราสัญลักษณ์ DBD Registered
   * - badgeImage: วางไฟล์ไว้ใน /public/brand/ แล้วใส่ path เช่น "/brand/dbd-registered.png"
   * - verifyUrl: ลิงก์ตรวจสอบจาก DBD (ถ้ามี)
   */
  dbd: {
    badgeImage: "",
    verifyUrl: "",
  },

  copyrightYear: 2026,
} as const;

export const navLinks = [
  { label: "หน้าหลัก", href: "/#home" },
  { label: "เกี่ยวกับเรา", href: "/#about" },
  { label: "บริการของเรา", href: "/#services" },
  { label: "ติดต่อเรา", href: "/#contact" },
] as const;
