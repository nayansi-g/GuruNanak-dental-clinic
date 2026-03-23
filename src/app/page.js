import AboutSection from "@/components/About";
import AppointmentCta from "@/components/AppoinmentCTA";
import BlogSection from "@/components/Blogs";
import DoctorsSection from "@/components/Doctor";
import FaqSection from "@/components/Faq";
import HeroSection from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import OurPromises from "@/components/Promises";
import ServicesSection from "@/components/Services";
import TestimonialSection from "@/components/Testimonals";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, faqSchema, homepageKeywords } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Best Dental Clinic in New Delhi for Family, Cosmetic and Emergency Dentistry",
  description:
    "Visit Guru Ram Dass Charitable Dental Clinic in New Delhi for personalized family dentistry, smile makeovers, teeth cleaning, root canal treatment, kids dental care, and emergency appointments.",
  path: "/",
  keywords: homepageKeywords,
});

const homeFaqs = [
  {
    question: "Do you offer same-day emergency dental appointments in New Delhi?",
    answer:
      "Yes. Guru Ram Dass Charitable Dental Clinic helps patients with sudden tooth pain, swelling, broken teeth, and other urgent dental issues with fast scheduling support whenever possible.",
  },
  {
    question: "What dental treatments can I book at Guru Ram Dass Charitable Dental Clinic?",
    answer:
      "You can book checkups, teeth cleaning, smile design consultations, root canal treatment, restorative dentistry, kids dental visits, and emergency dental care.",
  },
  {
    question: "Is Guru Ram Dass Charitable Dental Clinic suitable for children and adults?",
    answer:
      "Yes. We provide personalized dental care for children, teens, adults, and seniors with treatment plans designed around comfort, prevention, and long-term oral health.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <StructuredData data={faqSchema(homeFaqs)} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <OurPromises />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <DoctorsSection />
      <AppointmentCta />
      <BlogSection />
    </div>
  );
}
