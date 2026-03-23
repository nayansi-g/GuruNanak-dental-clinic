"use client";

import { motion } from "framer-motion";
import { Stethoscope, ScanLine, ClipboardList, Sparkles, Users, Hospital } from "lucide-react";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const promises = [
  {
    title: "Experienced dentists who listen first",
    desc: "We start with your concerns, not assumptions, so the treatment plan feels specific to you from the beginning.",
    icon: Stethoscope,
  },
  {
    title: "Modern diagnostics with better clarity",
    desc: "Digital evaluations help us explain what we see clearly and plan treatment with more precision and confidence.",
    icon: ScanLine,
  },
  {
    title: "Comprehensive dental care in one clinic",
    desc: "From checkups and cleaning to restorative and cosmetic dentistry, you do not need to bounce between providers.",
    icon: ClipboardList,
  },
  {
    title: "A calmer, more supportive environment",
    desc: "We focus on gentle visits, patient comfort, and simple communication that lowers anxiety for adults and children.",
    icon: Sparkles,
  },
  {
    title: "Truly personalized treatment planning",
    desc: "Your oral health, schedule, smile goals, and budget all matter when we recommend the next step in care.",
    icon: Users,
  },
  {
    title: "Quick help for urgent dental problems",
    desc: "When pain, swelling, or a broken tooth interrupts your day, our team works to guide you without delay.",
    icon: Hospital,
  },
];

export default function OurPromises() {
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
            Our promise to every patient
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            A polished clinic experience grounded in empathy and real expertise.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-copy mx-auto max-w-3xl">
            Patients searching for the best dental clinic in New Delhi want more than technology. They want confidence,
            comfort, and a team that treats them like people, not appointments.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {promises.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={cardHover}
                className="card-surface p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf8f6]">
                  <Icon className="h-7 w-7 text-[#18b7ae]" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-[24px] font-semibold leading-tight text-[#16313b]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5f7480]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
