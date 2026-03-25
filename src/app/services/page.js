import BannerHero from "@/components/BannerHero";
import AppointmentCta from "@/components/AppoinmentCTA";
import StructuredData from "@/components/StructuredData";
import AccordionListClient from "@/components/client/AccordionListClient";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Dental Services in New Delhi for Family, Cosmetic and Emergency Care",
  description:
    "Explore dental services at CHOPRA Dental Clinic in New Delhi including checkups, cleaning, cosmetic dentistry, root canal treatment, kids dental care, restorative work, and emergency support.",
  path: "/services",
  keywords: [
    "dental services in New Delhi",
    "cosmetic dentistry in New Delhi",
    "root canal treatment in New Delhi",
    "kids dentist in New Delhi",
    "emergency dentist in New Delhi",
  ],
});

const services = [
  {
    title: "Preventive Checkups and Teeth Cleaning",
    description: "Routine dental checkups, hygiene visits, scaling, polishing, and practical guidance for healthier teeth and gums.",
    details:
      "Preventive care is the easiest way to avoid painful dental issues later. During your visit we check for cavities, gum inflammation, plaque buildup, enamel wear, and changes that may need attention soon.",
    includes: [
      "Oral health examination and cleaning guidance",
      "Digital screening recommendations where needed",
      "Advice tailored to daily habits and smile goals",
    ],
  },
  {
    title: "Cosmetic Dentistry and Smile Design",
    description: "Personalized cosmetic treatment planning for brighter, more balanced, and natural-looking smiles.",
    details:
      "Cosmetic dentistry at CHOPRA is built around proportion, facial harmony, and realistic outcomes. We help patients understand which changes will make the biggest difference without over-treatment.",
    includes: [
      "Smile consultation and visual planning",
      "Whitening, alignment, and design options",
      "Treatment sequencing based on your priorities",
    ],
  },
  {
    title: "Root Canal and Restorative Dentistry",
    description: "Care for infected, broken, or damaged teeth that aims to relieve pain and preserve function.",
    details:
      "When a tooth is compromised, we focus on saving what can be preserved and restoring strength as efficiently as possible. We explain the condition clearly and walk you through the best next step.",
    includes: [
      "Pain-focused evaluation and diagnosis",
      "Tooth-saving treatment planning",
      "Restorative follow-up and aftercare guidance",
    ],
  },
  {
    title: "Kids and Family Dentistry",
    description: "A gentle approach to children's dental care and family visits that helps create long-term confidence.",
    details:
      "We support first visits, routine family appointments, cavity prevention, and habit guidance in a calm setting that helps children and parents feel comfortable from the start.",
    includes: [
      "Child-friendly dental visits",
      "Family scheduling support",
      "Prevention tips for every age",
    ],
  },
  {
    title: "Emergency Dental Appointments",
    description: "Fast support for sudden tooth pain, swelling, cracked teeth, and other urgent dental problems.",
    details:
      "Dental emergencies can escalate quickly. Our team works to respond promptly, reduce confusion, and guide you toward the right type of urgent care as soon as possible.",
    includes: [
      "Urgent support for pain and swelling",
      "Guidance before you arrive at the clinic",
      "Treatment planning after immediate relief",
    ],
  },
  {
    title: "Consultations and Second Opinions",
    description: "Clear conversations for patients who want to better understand treatment options before committing.",
    details:
      "Some patients know something feels off but are not ready for treatment yet. Others want a second opinion before moving ahead. We provide straightforward advice without pressure.",
    includes: [
      "Treatment review and explanation",
      "Budget-aware prioritization",
      "Next-step recommendations in simple language",
    ],
  },
];

const serviceFaqs = [
  {
    question: "Which dental services do you offer at CHOPRA Dental Clinic in New Delhi?",
    answer:
      "We offer preventive checkups, teeth cleaning, cosmetic smile planning, root canal treatment, restorative dentistry, kids dental care, family appointments, emergency dentistry, and second-opinion consultations.",
  },
  {
    question: "Can I visit for both routine care and cosmetic treatment planning?",
    answer:
      "Yes. Many patients begin with a routine exam and then discuss whitening, smile design, alignment, or other cosmetic options once we understand their oral health condition.",
  },
  {
    question: "Do you see patients for urgent dental pain?",
    answer:
      "Yes. If you have severe tooth pain, swelling, sensitivity, or a broken tooth, contact us quickly so we can guide you toward the right next step and arrange an appointment when possible.",
  },
];

const serviceHighlights = [
  "Patient-specific treatment recommendations",
  "Digital diagnosis and modern planning tools",
  "Comfort-focused care for adults and children",
  "Emergency guidance when dental issues cannot wait",
];

export default function ServicesPage() {
  const accordionItems = services.map((service) => ({
    title: service.title,
    content: (
      <div>
        <p>{service.details}</p>
        <div className="mt-4 space-y-3">
          {service.includes.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#18b7ae]" />
              <span className="text-[15px] leading-7 text-[#294652]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="overflow-x-hidden">
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <StructuredData data={serviceSchema(services)} />
      <StructuredData data={faqSchema(serviceFaqs)} />

      <BannerHero heading="Our Services" pagename="Services" />

      <section className="section-shell px-4 sm:px-6 md:px-8">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="section-kicker">Complete dental care under one roof</p>
            <h2 className="section-title text-left">
              From routine care to urgent treatment, we make it easier to know where to start.
            </h2>
            <p className="section-copy max-w-[650px]">
              Patients often arrive needing clarity as much as treatment. Our services page now uses warmer,
              search-friendly language to explain what each type of care is for, who it helps, and how our team guides
              the process.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div key={item} className="rounded-[1.3rem] border border-[#d6e4df] bg-white/80 px-5 py-4">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#18b7ae]" />
                    <p className="text-[15px] leading-7 text-[#294652]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-4 top-8 h-[84%] w-[78%] rounded-[2rem] bg-[#d6ebe5]" />
            <div className="card-surface relative overflow-hidden rounded-[2rem] p-4">
              <div className="overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/services.png"
                  alt="Modern dental services including family, cosmetic, restorative, and emergency care"
                  width={560}
                  height={680}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="section-shell px-4 pt-0 sm:px-6 md:px-8">
        <div className="site-shell">
          <div className="section-heading">
            <p className="section-kicker">Treatment list</p>
            <h2 className="section-title">Explore each dental service in more detail.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="card-surface p-6">
                <h3 className="text-[28px] font-semibold leading-tight text-[#16313b]">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5f7480]">{service.description}</p>
                <div className="mt-5">
                  <AccordionListClient
                    items={[
                      {
                        title: "View treatment details",
                        content: accordionItems.find((item) => item.title === service.title)?.content,
                      },
                    ]}
                    defaultOpen={null}
                    variant="soft"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pt-0 sm:px-6 md:px-8">
        <div className="site-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#16313b] px-7 py-8 text-white sm:px-9">
            <p className="section-kicker text-[#8fe8e2]">Service FAQ</p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-[clamp(2.2rem,5vw,4.6rem)] font-bold leading-[0.95]">
              Answers that make treatment feel easier to understand.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-white/74">
              Strong service pages should reassure the patient and clarify intent. These FAQs support both.
            </p>
          </div>

          <div className="card-surface p-6 sm:p-7">
            <AccordionListClient items={serviceFaqs} defaultOpen={0} variant="soft" />
          </div>
        </div>
      </section>

      <AppointmentCta />
    </div>
  );
}
