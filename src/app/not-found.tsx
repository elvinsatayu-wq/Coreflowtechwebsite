import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-7xl font-bold text-brand-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900">ไม่พบหน้าที่คุณต้องการ</h1>
      <Link href="/" className="mt-8 rounded-full bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-brand-600">
        กลับหน้าหลัก
      </Link>
    </section>
  );
}
