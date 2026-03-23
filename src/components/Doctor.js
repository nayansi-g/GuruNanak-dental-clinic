import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Howard Holmes",
    role: "Restorative and root canal dentist",
    image: "/doctor-1.png",
  },
  {
    id: 2,
    name: "Dr. Ella Thompson",
    role: "Cosmetic smile design specialist",
    image: "/doctor-2.png",
  },
  {
    id: 3,
    name: "Dr. Vincent Cooper",
    role: "Family and preventive care dentist",
    image: "/Doctor3.png",
  },
  {
    id: 4,
    name: "Dr. Danielle Bryant",
    role: "Kids and comfort-focused dentistry",
    image: "/doctor4.png",
  },
];

function DoctorCard({ doctor }) {
  return (
    <div className="card-surface overflow-hidden p-3">
      <div className="overflow-hidden rounded-[1.1rem] bg-[#edf4f1]">
        <Image
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.role} at Guru Ram Dass Charitable Dental Clinic`}
          width={280}
          height={340}
          className="h-[320px] w-full object-cover object-top"
        />
      </div>

      <div className="px-3 pb-4 pt-5 text-center">
        <h3 className="text-[24px] font-semibold text-[#16313b]">{doctor.name}</h3>
        <p className="mt-2 text-[14px] font-medium text-[#10978f]">{doctor.role}</p>
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
    </div>
  );
}

export default function DoctorsSection() {
  return (
    <section className="section-shell px-4 sm:px-6 md:px-8">
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-kicker">Meet the dental team</p>
          <h2 className="section-title">Experienced clinicians with a gentler way of caring for patients.</h2>
          <p className="section-copy mx-auto max-w-3xl">
            Your content now highlights specialists in restorative, cosmetic, preventive, and pediatric dental care so
            the team feels more relevant to real patient intent and local search visibility.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
