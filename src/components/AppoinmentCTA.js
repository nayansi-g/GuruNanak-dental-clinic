import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AppointmentCta() {
  return (
    <section className="section-shell px-4 pt-0 sm:px-6 md:px-8">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#16313b] px-6  sm:px-10 lg:px-12">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,rgba(24,183,174,0.24),transparent_34%),radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_26%)]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative hidden md:block flex justify-center lg:justify-start">
              <div className="absolute bottom-6 h-[78%] w-[74%] rounded-[2rem] bg-[#18b7ae]" />
              <Image
                src="/cta-img.png"
                alt="Friendly dentist encouraging patients to book a visit"
                width={420}
                height={500}
                className="relative z-10 h-auto w-[260px] object-contain sm:w-[320px] lg:w-[370px]"
              />
            </div>

            <div className="relative text-white py-5">
              <p className="section-kicker text-[#8fe8e2]">Book your dental appointment</p>
              <h2 className="mt-4 font-[family:var(--font-cormorant)] text-[clamp(2.2rem,5vw,5rem)] font-bold leading-[1.2] md:leading-[0.94]">
                Ready for a more personal, modern dental visit?
              </h2>
              <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-white/76">
                Whether you need a routine checkup, cosmetic consultation, second opinion, or urgent dental treatment,
                our team will help you schedule the right visit without confusion.
              </p>

              <Link href="/book_an_appointment" className="btn-primary mt-8 gap-2">
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
