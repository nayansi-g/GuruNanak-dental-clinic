import Image from "next/image";
import AccordionListClient from "@/components/client/AccordionListClient";

const faqs = [
  {
    question: "How often should I visit a dentist for a routine checkup?",
    answer:
      "Most patients benefit from a dental checkup and professional cleaning every six months, although gum issues, ongoing treatment, or higher cavity risk may require more frequent visits.",
  },
  {
    question: "Do you provide cosmetic dentistry and family dentistry together?",
    answer:
      "Yes. CHOPRA Dental Clinic supports family dental care, smile makeovers, restorative treatment, and preventive visits in one location, making it easier to manage care for everyone in your home.",
  },
  {
    question: "Can anxious patients ask for a slower, more explained treatment experience?",
    answer:
      "Absolutely. We are known for calm communication, gentle care, and step-by-step explanations so patients feel informed before treatment begins.",
  },
  {
    question: "What should I do if I have sudden tooth pain or swelling?",
    answer:
      "Call our clinic as soon as possible. Severe pain, swelling, or a broken tooth can become more serious quickly, and our team can help guide you toward the right next step.",
  },
];

export default function FaqSection() {
  return (
    <section className="section-shell px-4 sm:px-6 md:px-8">
      <div className="site-shell grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-[#16313b] px-7 py-10 text-white sm:px-10  lg:py-14">
          <p className="section-kicker text-[#8fe8e2]">Dental FAQ</p>
          <h2 className="mt-4 font-[family:var(--font-cormorant)] text-2xl  font-bold leading-[1.2]">
            Real questions from patients who want clear answers before they book.
          </h2>
          <p className="mt-3 max-w-[520px] text-[16px] leading-6 text-white/72">
            FAQ content helps with both trust and SEO. This version answers the kinds of questions people ask when
            they are searching for the best dentist in New Delhi, emergency dental help, or a comfortable clinic for
            their family.
          </p>

          <div className="mt-8">
            <AccordionListClient items={faqs} defaultOpen={0} />
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <Image
            src="/faq-img.png"
            alt="Patient receiving clear treatment advice during a dental consultation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(22,49,59,0.04),rgba(22,49,59,0.04))]" />
        </div>
      </div>
    </section>
  );
}
