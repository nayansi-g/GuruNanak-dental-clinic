import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import AccordionListClient from "@/components/client/AccordionListClient";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Dental FAQ for Appointments, Treatment, and Oral Health",
  description:
    "Read common dental questions about checkups, cosmetic treatment, emergency dentistry, kids dental visits, root canal care, and appointment planning at CHOPRA Dental Clinic in New Delhi.",
  path: "/faq",
  keywords: [
    "dental faq in New Delhi",
    "emergency dentist questions",
    "dental appointment questions",
    "family dentist faq",
  ],
});

const faqColumns = [
  [
    {
      question: "How often should I schedule a dental checkup?",
      answer:
        "Most patients should book a checkup every six months, but some may need visits more often if they have gum issues, a history of cavities, or ongoing treatment.",
    },
    {
      question: "Do you treat patients with dental anxiety?",
      answer:
        "Yes. We use a calm, informative, and slower-paced approach whenever needed so nervous patients feel more supported during diagnosis and treatment.",
    },
    {
      question: "Can children and parents book together?",
      answer:
        "Yes. Family scheduling is one of the reasons many New Delhi patients choose our clinic, especially for routine preventive visits and follow-ups.",
    },
  ],
  [
    {
      question: "When should I call for emergency dental care?",
      answer:
        "If you have severe pain, swelling, bleeding, trauma, or a broken tooth, it is best to contact the clinic quickly so we can help guide you toward urgent care.",
    },
    {
      question: "Can cosmetic dentistry improve both confidence and function?",
      answer:
        "In many cases, yes. Cosmetic treatment can also support bite balance, symmetry, enamel appearance, and overall comfort depending on the issue.",
    },
    {
      question: "Do you provide second opinions before treatment?",
      answer:
        "Yes. Patients often visit us for a clearer explanation of treatment choices, timing, urgency, and the likely results of different options.",
    },
  ],
];

export default function FAQPage() {
  const allFaqs = faqColumns.flat();

  return (
    <div>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <StructuredData data={faqSchema(allFaqs)} />

      <BannerHero heading="FAQ" pagename="FAQ" />

      <section className="section-shell px-4 sm:px-6 md:px-8">
        <div className="site-shell">
          <div className="section-heading">
            <p className="section-kicker">Dental help center</p>
            <h2 className="section-title">Useful answers for patients comparing dentists in New Delhi.</h2>
            <p className="section-copy mx-auto max-w-3xl">
              This FAQ page now focuses on appointment intent, family care, comfort, emergencies, and treatment clarity
              so it serves both real visitors and search visibility.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqColumns.map((column, index) => (
              <div key={index} className="card-surface p-6">
                <AccordionListClient items={column} defaultOpen={0} variant="soft" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
