import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Amit Chopra",
    qualification: "B.D.S. (MIDHA)",
    role: "Senior dental surgeon",
    experience: "20+ years of experience",
    image: "/Amit_Chopra.png",
    bio: "Dr. Amit Chopra is a trusted dental surgeon known for combining clinical precision with a calm, patient-friendly approach. He focuses on creating healthy, confident smiles through personalized treatment plans, clear guidance, and modern dental care suited to every age group.",
    summary:
      "From preventive check-ups to advanced restorative and cosmetic procedures, Dr. Chopra provides complete dental care designed to improve oral health, function, and appearance.",
    services: [
      "Teeth whitening",
      "Check-ups",
      "Cosmetic procedures",
      "Dental implants",
      "Dentures & bridges",
      "Extractions",
      "Fillings and sealants",
      "Laser dentistry",
      "Oral surgery",
      "Root canals",
      "Teeth cleaning",
      "Teeth reshaping",
      "Veneers & crowns",
      "X-ray",
    ],
  }
];

function DoctorCard({ doctor }) {
  return (
    <div className="card-surface overflow-hidden p-4 sm:p-5">
      <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-[1.4rem] bg-[#edf4f1]">
            <Image
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.role} at CHOPRA Dental Clinic`}
              width={420}
              height={520}
              className="h-[360px] w-full object-cover object-top"
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Doctor profile social link"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e4df] bg-white text-[#5f7480] transition hover:border-[#18b7ae] hover:text-[#10978f]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="px-1 pb-2 pt-1 sm:px-2">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#10978f]">
            Meet Our Doctor
          </p>
          <h3 className="mt-3 text-[30px] font-semibold leading-tight text-[#16313b] sm:text-[36px]">
            {doctor.name}
          </h3>
          <p className="mt-2 text-[16px] font-medium text-[#10978f]">{doctor.role}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#d6e4df] bg-white px-4 py-2 text-sm font-semibold text-[#294652]">
              {doctor.qualification}
            </span>
            <span className="rounded-full border border-[#d6e4df] bg-white px-4 py-2 text-sm font-semibold text-[#294652]">
              {doctor.experience}
            </span>
          </div>

          <p className="mt-6 text-[16px] leading-7 text-[#5f7480]">{doctor.bio}</p>
          <p className="mt-4 text-[16px] leading-7 text-[#5f7480]">{doctor.summary}</p>

          <div className="mt-7">
            <h4 className="text-[18px] font-semibold text-[#16313b]">
              Services Provided by Dr. Amit Chopra
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {doctor.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-[#e8f6f3] px-4 py-2 text-sm font-medium text-[#1d5354]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DoctorsSection() {
  return (
    <section className="section-shell px-4 sm:px-6 md:px-8">
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-kicker">Meet Our dental doctor</p>
          <h2 className="section-title">Experienced dental care led by Dr. Amit Chopra.</h2>
          <p className="section-copy mx-auto max-w-3xl">
            Learn more about Dr. Amit Chopra, his qualifications, years of clinical experience, and the wide range of
            treatments he provides to help patients maintain strong, healthy, and confident smiles.
          </p>
        </div>

        <div className="mt-14">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
