import { Mail, Phone, Clock3, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { clinic } from "@/lib/site";

export default function NotificationBar() {
  return (
    <div className="hidden border-b border-black/5 bg-[#133640] text-white lg:block">
      <div className="site-shell flex min-h-[52px] flex-wrap items-center justify-between gap-4 py-2.5 text-sm">
        <div className="flex flex-wrap items-center gap-5">
          <a href={`mailto:${clinic.email}`} className="inline-flex items-center gap-2 text-white/86 transition hover:text-white">
            <Mail className="h-4 w-4 text-[#7ee3dc]" />
            <span>{clinic.email}</span>
          </a>
          <a href={clinic.telephoneHref} className="inline-flex items-center gap-2 text-white/86 transition hover:text-white">
            <Phone className="h-4 w-4 text-[#7ee3dc]" />
            <span>{clinic.phone}</span>
          </a>
          <div className="inline-flex items-center gap-2 text-white/70">
            <Clock3 className="h-4 w-4 text-[#7ee3dc]" />
            <span>Mon-Sat 9am-8pm, Sun 10am-2pm</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
            <a
              key={index}
              href={clinic.socialLinks[index]}
              aria-label="Clinic social profile"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
