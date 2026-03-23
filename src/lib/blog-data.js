export const blogPosts = [
  {
    id: 1,
    title: "How to know when tooth pain needs a root canal and not just a painkiller",
    slug: "when-tooth-pain-needs-root-canal",
    author: "Dr. Howard Holmes",
    date: "March 8, 2026",
    image: "/blog1.png",
    excerpt:
      "Persistent pain, swelling, and sensitivity can point to a deeper infection. Here is how to recognize when a root canal consultation may be the smarter next step.",
    content:
      "Tooth pain is not always simple. If pain lingers, wakes you up at night, worsens while chewing, or comes with swelling, the issue may be deeper than enamel sensitivity. In those cases, a root canal evaluation can help save the natural tooth and stop infection from spreading. At Guru Ram Dass Charitable Dental Clinic in New Delhi, we explain what we see, what is urgent, and what treatment is actually necessary so patients can move forward with confidence.",
    category: "Restorative Dentistry",
    tags: ["Root Canal", "Tooth Pain", "Emergency Dentistry"],
    featured: false,
  },
  {
    id: 2,
    title: "Why professional teeth cleaning matters even if you brush every day",
    slug: "why-professional-teeth-cleaning-matters",
    author: "Dr. Ella Thompson",
    date: "February 18, 2026",
    image: "/blog-2.png",
    excerpt:
      "Daily brushing is essential, but regular cleaning at a dental clinic helps remove tartar, protect the gums, and catch issues before they become expensive.",
    content:
      "Brushing and flossing at home are powerful, but they are not always enough to prevent tartar buildup or early gum inflammation. Professional teeth cleaning helps remove what home care cannot, improves freshness, and gives your dentist a chance to spot small problems early. Patients looking for preventive dental care in New Delhi often benefit from simple, consistent cleaning visits more than they realize.",
    category: "Preventive Care",
    tags: ["Teeth Cleaning", "Gum Care", "Preventive Dentistry"],
    featured: true,
  },
  {
    id: 3,
    title: "Preparing your child for a first dental visit without stress",
    slug: "preparing-child-for-first-dental-visit",
    author: "Dr. Vincent Cooper",
    date: "January 26, 2026",
    image: "/blog-3.png",
    excerpt:
      "A child&apos;s first dental appointment shapes how they feel about dentistry for years. These simple steps can help make that visit easier and more positive.",
    content:
      "A great first dental visit should feel calm, friendly, and age-appropriate. Parents can help by speaking positively about the dentist, choosing a quiet appointment time, and framing the visit as a chance to learn about healthy teeth rather than something scary. At Guru Ram Dass Charitable Dental Clinic, we make kids dental care more approachable through gentle introductions, short explanations, and a patient pace.",
    category: "Pediatric Dentistry",
    tags: ["Kids Dentist", "Family Dentistry", "First Visit"],
    featured: false,
  },
  {
    id: 4,
    title: "What to do after you crack a tooth before you reach the dentist",
    slug: "what-to-do-after-you-crack-a-tooth",
    author: "Dr. Danielle Bryant",
    date: "January 9, 2026",
    image: "/blog1.png",
    excerpt:
      "A cracked tooth should never be ignored. Here are the safest first steps to take while you arrange urgent dental care.",
    content:
      "If you crack a tooth, rinse gently with lukewarm water, avoid chewing on that side, and contact your dentist as soon as possible. Fast treatment can reduce pain and improve the chance of preserving the tooth. Depending on the damage, care may involve bonding, a crown, root canal treatment, or another restorative step. When patients search for an emergency dentist in New Delhi, speed and clarity matter most.",
    category: "Emergency Dentistry",
    tags: ["Emergency Dentistry", "Broken Tooth", "Urgent Care"],
    featured: false,
  },
];

export const blogCategories = [
  "Restorative Dentistry",
  "Preventive Care",
  "Pediatric Dentistry",
  "Emergency Dentistry",
];

export const blogTags = [
  "Root Canal",
  "Tooth Pain",
  "Emergency Dentistry",
  "Teeth Cleaning",
  "Gum Care",
  "Preventive Dentistry",
  "Kids Dentist",
  "Family Dentistry",
  "First Visit",
  "Broken Tooth",
  "Urgent Care",
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
