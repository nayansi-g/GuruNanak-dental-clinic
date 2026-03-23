import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Smile makeover patient from New Delhi",
    image: "/testimonals1.png",
    text: "I wanted a clinic that would explain cosmetic dentistry properly instead of pushing treatment. Guru Ram Dass Charitable made me feel heard, showed me realistic options, and gave me a smile that still feels natural.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Family dentistry patient",
    image: "/testimonal2.png",
    text: "We now book for the whole family here. The team is patient with kids, clear with adults, and genuinely helpful when something urgent comes up. It feels personal every single time.",
  },
  {
    id: 3,
    name: "Ananya Sharma",
    role: "Smile makeover patient from New Delhi",
    image: "/testimonals1.png",
    text: "I wanted a clinic that would explain cosmetic dentistry properly instead of pushing treatment. Guru Ram Dass Charitable made me feel heard, showed me realistic options, and gave me a smile that still feels natural.",
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "Family dentistry patient",
    image: "/testimonal2.png",
    text: "We now book for the whole family here. The team is patient with kids, clear with adults, and genuinely helpful when something urgent comes up. It feels personal every single time.",
  },
];

const quickFacts = [
  "Comfort-focused appointments for nervous patients",
  "Personalized treatment plans and aftercare guidance",
  "Trusted dental clinic for families across New Delhi",
];

function TestimonialCard({ item }) {
  return (
    <div className="card-surface relative h-full p-7">
      <Quote className="absolute right-6 top-6 h-11 w-11 text-[#d7ebe6]" />
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full border border-[#d6e4df]">
          <Image
            src={item.image}
            alt={`${item.name} reviewing care at Guru Ram Dass Charitable Dental Clinic`}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#16313b]">{item.name}</h3>
          <p className="text-sm text-[#10978f]">{item.role}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1 text-[#f2b94b]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-8 text-[#5f7480]">{item.text}</p>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="section-shell px-4 sm:px-6 md:px-8">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="rounded-[2rem] bg-[#16313b] px-7 py-8 text-white sm:px-9">
          <p className="section-kicker text-[#8fe8e2]">Patient stories</p>
          <h2 className="mt-4 font-[family:var(--font-cormorant)] text-2xl font-bold leading-[1.3]">
            Reviews that sound like the experience we want every patient to have.
          </h2>
          <p className="mt-3 max-w-[460px] text-[16px] leading-6 text-white/72">
            Personalized and SEO-friendly content works best when it still feels believable. These messages focus on
            trust, transparency, comfort, and local relevance because that is what patients actually search for.
          </p>

          <div className="mt-4 space-y-4">
            {quickFacts.map((item) => (
              <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium leading-7 text-white/82">
                {item}
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn-primary mt-8 gap-2">
            Speak With Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
