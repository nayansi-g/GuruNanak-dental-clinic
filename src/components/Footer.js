import Link from "next/link";
import { Clock3, MapPin, PhoneCall, Mail, Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";
import { clinic, primaryNav, serviceLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#102f38] text-white">
      <div className="site-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr_1fr]">
          <div>
            <div className="pill-label border-white/10 bg-white/10 text-white">
              Trusted dental care in New Delhi
            </div>
            <h2 className="mt-5 max-w-[320px] font-[family:var(--font-cormorant)] text-3xl font-bold leading-[1.2] text-white">
              Calm visits. Honest advice. Healthier smiles.
            </h2>
            <p className="mt-3 max-w-[400px] text-[15px] leading-6 text-white/72">
              {clinic.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: clinic.socialLinks[0], icon: Facebook, label: "Facebook" },
                { href: clinic.socialLinks[1], icon: Instagram, label: "Instagram" },
                { href: clinic.socialLinks[2], icon: Twitter, label: "Twitter" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/80 transition hover:bg-white/12 hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8fe8e2]">
              Explore
            </h3>
            <div className="mt-5 space-y-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-[15px] text-white/76 transition hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4 text-[#8fe8e2]" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#8fe8e2]">
              Popular Care
            </h3>
            <div className="mt-5 space-y-4">
              {serviceLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-[15px] text-white/76 transition hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4 text-[#8fe8e2]" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#8fe8e2]" />
                <div className="text-sm leading-7 text-white/74">
                  <p>{clinic.address.streetAddress}</p>
                  <p>
                    {clinic.address.addressLocality}, {clinic.address.addressRegion}{" "}
                    {clinic.address.postalCode}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-3">
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 h-5 w-5 text-[#8fe8e2]" />
                <div className="text-sm leading-7 text-white/74">
                  <p>{clinic.phone}</p>
                  <p>Appointments and urgent dental support</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-3">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#8fe8e2]" />
                <div className="text-sm leading-7 text-white/74">
                  <p>{clinic.email}</p>
                  <p>{clinic.supportEmail}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-3">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-[#8fe8e2]" />
                <div className="text-sm leading-7 text-white/74">
                  <p>Monday to Saturday: 9:00 AM to 8:00 PM</p>
                  <p>Sunday: 10:00 AM to 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          Copyright {new Date().getFullYear()} {clinic.name}. Personalized smile care for families in New Delhi.
        </div>
      </div>
    </footer>
  );
}
