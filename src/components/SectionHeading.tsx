export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`text-sm font-semibold tracking-[0.18em] uppercase ${dark ? "text-cyan-tech" : "text-brand-500"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl leading-tight font-bold sm:text-4xl ${dark ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-brand-100/80" : "text-navy-700/80"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
