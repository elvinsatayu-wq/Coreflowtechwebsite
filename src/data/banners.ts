/**
 * แบนเนอร์หน้าแรก (เลื่อนอัตโนมัติ)
 *
 * วิธีเพิ่มแบนเนอร์:
 * 1. วางไฟล์รูปไว้ที่ /public/banners/  (แนะนำสัดส่วนเดียวกับแบนเนอร์แรก 2056 x 765 px)
 * 2. เพิ่มรายการในอาร์เรย์ด้านล่าง  — href ใส่หรือไม่ใส่ก็ได้ (ใส่แล้วคลิกแบนเนอร์จะไปยังลิงก์นั้น)
 */
export type Banner = {
  src: string;
  alt: string;
  href?: string;
};

export const banners: Banner[] = [
  {
    src: "/banners/smart-business-banner.webp",
    alt: "CoreFlow Tech — ออกแบบและขายโปรแกรมสำเร็จรูปสำหรับองค์กร: ระบบบัญชี ระบบจัดซื้อ Sale CRM ระบบสะสมคะแนนลูกค้า ระบบบริหารงานการตลาด",
  },
  // {
  //   src: "/banners/new-banner.webp",
  //   alt: "คำอธิบายแบนเนอร์",
  //   href: "/services/business-documents/",
  // },
];

/** ระยะเวลาแสดงแต่ละแบนเนอร์ (มิลลิวินาที) */
export const BANNER_INTERVAL = 5000;
