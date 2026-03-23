import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/client/MobileNav";
import { clinic, primaryNav } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-black/5 bg-[rgba(245,246,241,0.82)] backdrop-blur-xl">
      <div className="site-shell flex min-h-[88px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${clinic.name} homepage`}
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#cfe3dd] bg-white shadow-[0_12px_28px_rgba(22,49,59,0.08)]">
            <Image
              src="/dental-img_logo.png"
              alt={`${clinic.name} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <p className="font-[family:var(--font-cormorant)] text-xl font-bold leading-[1.2] text-[#16313b]">
              Guru Ram Dass  
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5f7480]">
             Charitable Dental Clinic
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-semibold text-[#294652] transition hover:text-[#10978f]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="rounded-full border border-[#d6e4df] bg-white/80 px-4 py-2 text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#10978f]">
              Call Today
            </p>
            <a href={clinic.telephoneHref} className="text-sm font-semibold text-[#16313b]">
              {clinic.phone}
            </a>
          </div>

          <Link href="/book_an_appointment" className="btn-primary">
            Book Visit
          </Link>
        </div>

        <MobileNav items={primaryNav} ctaHref="/book_an_appointment" />
      </div>
    </header>
  );
}
