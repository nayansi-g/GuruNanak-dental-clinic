import BannerHero from "@/components/BannerHero";
import DoctorsSection from "@/components/Doctor";
import AppointmentCta from "@/components/AppoinmentCTA";
import StructuredData from "@/components/StructuredData";
import AccordionListClient from "@/components/client/AccordionListClient";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Guru Ram Dass Charitable Dental Clinic in New Delhi",
  description:
    "Learn about Guru Ram Dass Charitable Dental Clinic in New Delhi, our patient-first approach, experienced dentists, modern diagnostics, and personalized family and cosmetic dental care.",
  path: "/about",
  keywords: [
    "about dental clinic in New Delhi",
    "experienced dentist team in New Delhi",
    "family dental clinic New Delhi",
    "patient-first dentist in New Delhi",
  ],
});

const aboutFaqs = [
  {
    question: "What makes Guru Ram Dass Charitable Dental Clinic different from other dental clinics in New Delhi?",
    answer:
      "We combine modern dentistry with a more personal approach. Patients get clear explanations, comfort-focused treatment, realistic planning, and a team that takes time to understand their concerns.",
  },
  {
    question: "Do you create customized treatment plans?",
    answer:
      "Yes. Every treatment plan is shaped around your oral health condition, budget, smile goals, and timeline so you know what matters most and what can wait.",
  },
  {
    question: "Is your clinic suitable for children and anxious patients?",
    answer:
      "Absolutely. We welcome children, teens, adults, and nervous patients with a calm, supportive style of care that reduces pressure and confusion.",
  },
];

const values = [
  "Clear communication before treatment starts",
  "Respect for your time, comfort, and budget",
  "Digital planning for more accurate diagnosis",
  "Long-term care that feels realistic to maintain",
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <StructuredData data={faqSchema(aboutFaqs)} />

      <BannerHero heading="About Us" pagename="About" />

      <section className="section-shell px-4 sm:px-6 md:px-8">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-5 top-10 h-[84%] w-[82%] rounded-[2rem] bg-[#d6ebe5]" />
            <div className="card-surface relative overflow-hidden rounded-[2rem] p-4">
              <div className="overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/about-img.png"
                  alt="Dentist explaining treatment options to a patient at Guru Ram Dass Charitable Dental Clinic"
                  width={560}
                  height={640}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <p className="section-kicker">A more personal dental experience</p>
            <h2 className="section-title text-left">
              We built this clinic for patients who want calm guidance, not rushed decisions.
            </h2>
            <p className="section-copy max-w-[640px]">
              Guru Ram Dass Charitable Dental Clinic serves New Delhi families with a better kind of dental experience: one that balances
              expert treatment with empathy, honesty, and practical recommendations. We believe trust is built when
              patients understand what is happening and why.
            </p>
            <p className="mt-4 max-w-[640px] text-[16px] leading-8 text-[#5f7480]">
              Our work spans family dentistry, cosmetic smile improvements, root canal treatment, kids dental care,
              and emergency support. Across all of it, we stay focused on comfort, clarity, and long-term oral health.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((item) => (
                <div key={item} className="rounded-[1.3rem] border border-[#d6e4df] bg-white/80 px-5 py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#18b7ae]" />
                    <p className="text-[15px] leading-7 text-[#294652]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pt-0 sm:px-6 md:px-8">
        <div className="site-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr] justify-center">
          <div className="rounded-[2rem] bg-[#16313b] px-7 py-8 text-white sm:px-9">
            <p className="section-kicker text-[#8fe8e2]">Our philosophy</p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-[clamp(3rem,5vw,4.6rem)] font-bold leading-[0.95]">
              Prevention, trust, and personalized planning always come first.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-white/74">
              We want patients to feel informed enough to make good decisions, not pressured into treatments they do
              not understand. That approach improves comfort, outcomes, and long-term relationships.
            </p>
          </div>

          <div className="card-surface p-6 sm:p-7">
            <p className="section-kicker">Common questions</p>
            <h2 className="mt-4 text-[32px] font-semibold leading-tight text-[#16313b]">
              More about how we care for families in New Delhi
            </h2>
            <div className="mt-8">
              <AccordionListClient items={aboutFaqs} defaultOpen={0} variant="soft" />
            </div>
          </div>
        </div>
      </section>

      <DoctorsSection />
      <AppointmentCta />
    </div>
  );
}
