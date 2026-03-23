"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileNav({ items, ctaHref }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d6e4df] bg-white text-[#16313b] transition hover:border-[#18b7ae] hover:text-[#10978f]"
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-t border-[#d6e4df] bg-[#f5f6f1]/95 shadow-[0_28px_40px_rgba(22,49,59,0.08)] backdrop-blur-xl">
          <nav className="site-shell flex flex-col py-5">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-[#e2ece8] py-4 text-[15px] font-semibold text-[#294652]"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href={ctaHref}
              className="btn-primary mt-5"
              onClick={() => setMobileOpen(false)}
            >
              Book Visit
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
