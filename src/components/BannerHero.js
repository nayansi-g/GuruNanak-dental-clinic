import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/site";

export default function BannerHero({ heading, pagename }) {
  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden px-4 pb-10 pt-20 sm:px-6 md:min-h-[400px] md:px-8">
      <Image
        src="/banner-img.png"
        alt={`${clinic.name} ${heading} page banner`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,47,56,0.88),rgba(24,183,174,0.42))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_22%)]" />

      <div className="site-shell relative z-10">
        <div className="pill-label border-white/15 bg-white/10 text-white">
          Personalized dentistry in New Delhi
        </div>
        <h1 className="mt-5 max-w-[780px] font-[family:var(--font-cormorant)] text-[clamp(3.2rem,7vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
          {heading}
        </h1>

        <div className="mt-5 flex items-center gap-3 text-sm text-white/86 md:text-base">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="opacity-60">/</span>
          <span>{pagename}</span>
        </div>
      </div>
    </section>
  );
}
