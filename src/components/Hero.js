"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { clinic } from "@/lib/site";
import { fadeUp, imageReveal, staggerContainer, viewportOnce } from "@/lib/motion";

const highlights = [
  "Comfort-first family dentistry",
  "Smile makeovers and cosmetic care",
  "Emergency appointments available",
];

export default function HeroSection() {
  return (
    <motion.section
      className="relative overflow-hidden px-4 pb-18 pt-10 sm:px-6 md:px-8 lg:px-10"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="absolute inset-0 soft-grid opacity-40" />
      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <motion.div
          className="max-w-[680px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="pill-label flex items-center gap-1">
            <HeartHandshake className="h-4 w-4 text-[#18b7ae]" />
            Personalized dental care in New Delhi
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-[family:var(--font-cormorant)] text-[clamp(2.2rem,6vw,3.8rem)] font-bold leading-[1.2] tracking-[-0.04em] text-[#16313b]"
          >
            A warmer dental experience for every smile in your family.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[610px] text-[17px] leading-7 text-[#5f7480] sm:text-[18px]"
          >
            {clinic.name} blends advanced dentistry with calm communication, honest treatment planning,
            and a polished clinic environment so every visit feels more personal, more reassuring, and
            easier to trust.
          </motion.p>

          <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="rounded-full border border-[#d6e4df] bg-white/80 px-4 py-2 text-sm font-semibold text-[#294652]"
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/book_an_appointment" className="btn-primary gap-2">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Treatments
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[620px]"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="absolute left-8 top-8 h-[72%] w-[76%] rounded-[2rem] bg-[#d7ebe6]" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#18b7ae]/14 blur-3xl" />
          <motion.div
            className="card-surface relative overflow-hidden rounded-[2rem] p-4 sm:p-5"
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.24, ease: "easeOut" } }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,183,174,0.12),rgba(255,255,255,0.24))]" />
            <motion.div
              className="relative rounded-[1.6rem] bg-[#e8f3ef]"
              variants={imageReveal}
            >
              <Image
                src="/Hero-img.png"
                alt="Smiling dentist welcoming a patient at Guru Ram Dass Charitable Dental Clinic in New Delhi"
                width={620}
                height={760}
                className="h-auto w-full object-contain"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-0 right-0 mx-auto grid w-[calc(100%-2.5rem)] gap-3 sm:grid-cols-2"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="rounded-[1.3rem] border border-white/55 bg-[rgba(255,255,255,0.86)] px-5 py-4 shadow-[0_16px_40px_rgba(22,49,59,0.08)] backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10978f]">
                  Local trust
                </p>
                <p className="mt-2 text-lg font-semibold text-[#16313b]">
                  Family-friendly care with modern diagnostics
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-[1.3rem] bg-[#16313b] px-5 py-4 text-white shadow-[0_18px_38px_rgba(22,49,59,0.16)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fe8e2]">
                  Personalized plans
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Clear treatment advice, cost guidance, and gentle follow-ups
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
