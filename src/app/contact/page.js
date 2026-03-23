import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import { Mail, Clock, MapPin, Phone } from "lucide-react";
import { breadcrumbSchema, buildMetadata, clinic } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Decare Dental Clinic in Kanpur",
  description:
    "Contact Decare Dental Clinic in Kanpur for appointments, treatment questions, emergency dental guidance, clinic hours, and location details.",
  path: "/contact",
  keywords: [
    "contact dentist in Kanpur",
    "dental clinic phone number Kanpur",
    "book dental appointment in Kanpur",
  ],
});

const contactCards = [
  {
    title: "Clinic Address",
    text: `${clinic.address.streetAddress}, ${clinic.address.addressLocality}, ${clinic.address.addressRegion} ${clinic.address.postalCode}`,
    icon: MapPin,
  },
  {
    title: "Working Hours",
    text: "Monday to Saturday 9:00 AM to 8:00 PM | Sunday 10:00 AM to 2:00 PM",
    icon: Clock,
  },
  {
    title: "Email Our Team",
    text: `${clinic.email} | ${clinic.supportEmail}`,
    icon: Mail,
  },
  {
    title: "Call For Appointments",
    text: `${clinic.phone} | Emergency dental guidance available`,
    icon: Phone,
  },
];

export default function ContactPage() {
  return (
    <div>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <BannerHero heading="Contact Us" pagename="Contact" />

      <section className="section-shell px-4 py-10 sm:px-6 sm:py-12 md:px-8">
        <div className="site-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
          <div className="card-surface p-4 sm:p-6 md:p-8">
            <p className="section-kicker">Request an appointment</p>
            <h2 className="mt-3 text-[clamp(2rem,8vw,3.2rem)] font-[family:var(--font-cormorant)] font-bold leading-[0.96] text-[#16313b]">
              Tell us what you need and we&apos;ll help you find the right visit.
            </h2>
            <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-[#5f7480] sm:text-[15px] sm:leading-8">
              This form copy is now more personal and service-oriented, which improves both user trust and SEO around
              appointment intent, dental consultations, and emergency support in Kanpur.
            </p>

            <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your full name" className="min-h-12 rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3 text-[15px] text-[#16313b] placeholder:text-[#8ba0a8] sm:py-3.5" />
                <input type="email" placeholder="Email address" className="min-h-12 rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3 text-[15px] text-[#16313b] placeholder:text-[#8ba0a8] sm:py-3.5" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="tel" placeholder="Phone number" className="min-h-12 rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3 text-[15px] text-[#16313b] placeholder:text-[#8ba0a8] sm:py-3.5" />
                <input type="text" placeholder="Service you are interested in" className="min-h-12 rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3 text-[15px] text-[#16313b] placeholder:text-[#8ba0a8] sm:py-3.5" />
              </div>
              <textarea
                placeholder="Tell us about your concern, preferred timing, or whether this is an urgent dental issue"
                rows={5}
                className="min-h-[140px] w-full rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3 text-[15px] text-[#16313b] placeholder:text-[#8ba0a8] sm:min-h-[160px] sm:py-3.5"
              />
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Appointment Request
              </button>
            </form>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="card-surface flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf8f6] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-[#18b7ae]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[#16313b] sm:text-xl">{item.title}</h3>
                    <p className="mt-2 break-words text-[14px] leading-7 text-[#5f7480] sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
