"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldPlus, SmilePlus, ScanLine, Users, Stethoscope, Sparkles } from "lucide-react";
import { cardHover, fadeUp, imageReveal, staggerContainer, viewportOnce } from "@/lib/motion";

const services = [
  {
    title: "Preventive Dental Checkups",
    description: "Routine exams, digital screenings, and cleaning plans that help you stay ahead of cavities and gum concerns.",
    icon: ShieldPlus,
  },
  {
    title: "Smile Design and Cosmetic Dentistry",
    description: "Natural-looking smile enhancements for patients who want brighter, more balanced teeth with expert guidance.",
    icon: Sparkles,
  },
  {
    title: "Kids and Family Dentistry",
    description: "Gentle visits for children, teens, and adults with a calm approach that makes every age group feel comfortable.",
    icon: Users,
  },
  {
    title: "Teeth Cleaning and Gum Care",
    description: "Professional cleaning and hygiene support that keeps your smile fresh while protecting long-term oral health.",
    icon: SmilePlus,
  },
  {
    title: "Root Canal and Restorative Care",
    description: "Save damaged or infected teeth with precise care focused on relief, restoration, and lasting function.",
    icon: ScanLine,
  },
  {
    title: "Consultations and Emergency Dentistry",
    description: "Fast support for sudden pain, swelling, broken teeth, and treatment decisions that should not wait.",
    icon: Stethoscope,
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      className="section-shell px-4 sm:px-6 md:px-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="site-shell">
        <motion.div
          className="section-heading"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="section-kicker">
            Dental services in New Delhi
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Personalized treatment for the smile you have and the smile you want.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-copy mx-auto max-w-4xl">
            Whether you are booking your child&apos;s first checkup, planning cosmetic dentistry, or looking for an
            emergency dentist in New Delhi, our team creates care plans that match your goals, schedule, and comfort level.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.05fr_0.9fr]">
          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={cardHover}
                  className="card-surface p-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf8f6]">
                    <Icon className="h-7 w-7 text-[#18b7ae]" />
                  </div>
                  <h3 className="mt-3 text-[16px] font-semibold leading-tight text-[#16313b]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-5 text-[#5f7480]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="relative"
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="absolute right-4 top-4 h-32 w-32 rounded-full bg-[#18b7ae]/16 blur-3xl" />
            <motion.div className="card-surface relative overflow-hidden rounded-[2rem] p-4" whileHover={cardHover}>
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(24,183,174,0.1),rgba(255,255,255,0.4))]" />
              <motion.div className="relative overflow-hidden rounded-[1.6rem] bg-[#e8f2ee]" variants={imageReveal}>
                <Image
                  src="/services.png"
                  alt="Comprehensive dental services including cosmetic, preventive, restorative, and family care"
                  width={520}
                  height={660}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="absolute bottom-4 md:bottom-8 left-8 max-w-[260px] rounded-md   md:rounded-[1.4rem] bg-[#16313b] px-3 md:px-5 py-2 md:py-5 text-white shadow-[0_18px_40px_rgba(22,49,59,0.18)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fe8e2]">
                  Local SEO focus
                </p>
                <p className="mt-2 text-sm md:text-lg font-semibold leading-5 md:leading-7">
                  Family dentistry, smile design, and emergency dental appointments in New Delhi.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-10 flex justify-center">
          <Link href="/services" className="btn-primary gap-2">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
