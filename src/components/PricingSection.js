import { CheckCircle2, ShieldPlus, HeartPulse, Sparkles } from "lucide-react";

const plans = [
  {
    id: 1,
    title: "Essential Preventive Visit",
    price: "Consultation",
    icon: ShieldPlus,
    features: [
      "Detailed checkup and oral health assessment",
      "Digital screening recommendations when needed",
      "Cleaning and hygiene planning guidance",
      "Home-care tips tailored to your smile",
    ],
  },
  {
    id: 2,
    title: "Smile Planning Session",
    price: "Personalized",
    icon: HeartPulse,
    features: [
      "Cosmetic smile discussion and visual goals review",
      "Treatment roadmap with timelines and priorities",
      "Budget-aware planning for staged care",
      "Guidance on whitening, veneers, or reshaping options",
    ],
  },
  {
    id: 3,
    title: "Family Care Coordination",
    price: "Flexible",
    icon: Sparkles,
    features: [
      "Support for adults, children, and follow-up scheduling",
      "Convenient visit planning for shared appointments",
      "Reminders for recurring preventive care",
      "Urgent dental guidance if something unexpected happens",
    ],
  },
];

function PricingCard({ plan }) {
  const Icon = plan.icon;

  return (
    <div className="card-surface flex h-full flex-col p-7">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf8f6]">
        <Icon className="h-7 w-7 text-[#18b7ae]" />
      </div>

      <h3 className="mt-5 text-[24px] font-semibold leading-tight text-[#16313b]">
        {plan.title}
      </h3>

      <p className="mt-3 font-[family:var(--font-cormorant)] text-5xl font-bold leading-none text-[#16313b]">
        {plan.price}
      </p>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#18b7ae]" />
            <span className="text-[15px] leading-7 text-[#5f7480]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="section-shell px-4 sm:px-6 md:px-8">
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-kicker">A more personalized way to plan care</p>
          <h2 className="section-title">Guidance that helps patients understand what comes next.</h2>
          <p className="section-copy mx-auto max-w-5xl">
            Instead of generic pricing blocks, this section now highlights the types of appointment journeys patients
            commonly want when searching for a dentist in New Delhi: preventive care, cosmetic planning, and coordinated
            family visits.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 justify-center">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
