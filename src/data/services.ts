/**
 * รายการบริการ/แพ็คเกจ ที่แสดงในหน้าแรก
 * แต่ละบริการมีหน้า Landing Page ของตัวเองที่ /services/<slug>/
 */
export type Service = {
  slug: string;
  name: string;
  nameEn: string;
  summary: string;
  highlights: string[];
  image?: string;
  badge?: string;
};

export const services: Service[] = [
  {
    slug: "business-documents",
    name: "ระบบจัดการเอกสารทางธุรกิจ",
    nameEn: "Business Document System",
    summary:
      "ออกใบเสนอราคา ใบวางบิล ใบแจ้งหนี้ ใบเสร็จรับเงิน และใบกำกับภาษี ได้ในไม่กี่คลิก ไม่ต้องพิมพ์เอง ไม่ต้องกลัวข้อมูลหาย",
    highlights: [
      "สร้างเอกสารครบ 5 ประเภทจากข้อมูลชุดเดียว",
      "บันทึกสินค้าและรายชื่อลูกค้าไว้ในที่เดียว",
      "คำนวณ VAT 7% และหัก ณ ที่จ่ายอัตโนมัติ",
    ],
    image: "/images/business-documents-card.webp",
    badge: "พร้อมใช้งานทันที",
  },
  {
    slug: "real-estate-crm",
    name: "ระบบ Real Estate CRM",
    nameEn: "Real Estate CRM",
    summary:
      "ระบบบริหารลูกค้าและทรัพย์สินสำหรับธุรกิจอสังหาริมทรัพย์ ติดตามลีด นัดหมาย และปิดการขายได้อย่างเป็นระบบ",
    highlights: [
      "จัดการรายการทรัพย์และข้อมูลลูกค้าในที่เดียว",
      "ติดตามสถานะการขายตั้งแต่ลีดจนปิดดีล",
      "นัดหมายเยี่ยมชมโครงการและแจ้งเตือนการติดตาม",
    ],
    image: "/images/real-estate-crm-card.webp",
    badge: "ใหม่",
  },
];
