import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import { CheckCircle2 } from "lucide-react";
import { breadcrumbSchema, buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Book a Dental Appointment in New Delhi",
  description:
    "Book a dental appointment at Guru Ram Dass Charitable Dental Clinic in New Delhi for checkups, teeth cleaning, cosmetic dentistry, kids dental care, second opinions, and urgent treatment.",
  path: "/book_an_appointment",
  keywords: [
    "book dentist appointment in New Delhi",
    "online dental booking New Delhi",
    "emergency dental appointment New Delhi",
  ],
});

const benefits = [
  "Routine and urgent dental appointments",
  "Family, cosmetic, and restorative care planning",
  "Simple communication before your visit",
];

export default function BookAnAppointmentPage() {
  return (
    <div className="overflow-x-hidden">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book an Appointment", path: "/book_an_appointment" },
        ])}
      />

      <BannerHero heading="Book Your Appointment" pagename="Book Appointment" />

      <section className="section-shell px-4 sm:px-6 md:px-8">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] bg-[#16313b] px-7 py-8 text-white sm:px-9">
            <p className="section-kicker text-[#8fe8e2]">Easy appointment booking</p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-[clamp(3rem,5vw,3rem)] font-bold leading-[0.92]">
              Tell us what your smile needs and we&apos;ll help from there.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-white/74">
              This page now speaks more directly to patients searching for a dentist in New Delhi, whether they need a
              checkup, cosmetic consultation, kids visit, or fast help with sudden dental pain.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8fe8e2]" />
                  <span className="text-[15px] leading-7 text-white/82">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-[family:var(--font-cormorant)] font-bold leading-[0.96] text-[#16313b]">
              Request your visit
            </h2>
            <p className="mt-3 text-[15px] leading-8 text-[#5f7480]">
              Share your details below and our team will help you schedule the right appointment.
            </p>

            <form className="mt-8 space-y-4">
              <input type="text" placeholder="Preferred doctor or service" className="w-full rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b] placeholder:text-[#8ba0a8]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your name" className="rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b] placeholder:text-[#8ba0a8]" />
                <input type="text" placeholder="Your age" className="rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b] placeholder:text-[#8ba0a8]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="tel" placeholder="Phone number" className="rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b] placeholder:text-[#8ba0a8]" />
                <input type="email" placeholder="Email address" className="rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b] placeholder:text-[#8ba0a8]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Preferred appointment date" className="rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b] placeholder:text-[#8ba0a8]" />
                <select className="rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b]">
                  <option>Preferred time</option>
                  <option>10:00 AM</option>
                  <option>12:00 PM</option>
                  <option>2:00 PM</option>
                  <option>4:30 PM</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your concern, treatment goal, or whether this is urgent"
                rows={7}
                className="w-full rounded-[1rem] border border-[#d6e4df] bg-white px-4 py-3.5 text-[#16313b] placeholder:text-[#8ba0a8]"
              />
              <button type="submit" className="btn-primary">
                Make an Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
