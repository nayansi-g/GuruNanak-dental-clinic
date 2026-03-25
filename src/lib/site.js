export const clinic = {
  name: "CHOPRA Dental Clinic",
  shortName: "CHOPRA",
  url: "https://www.chopradentalclinic.com",
  email: "care@chopradentalclinic.com",
  supportEmail: "appointments@chopradentalclinic.com",
  phone: "+91-9350-210-615",
  telephoneHref: "tel:+919350210615",
  priceRange: "$$",
  description:
    "CHOPRA Dental Clinic in New Delhi offers personalized family, cosmetic, restorative, pediatric, and emergency dental care with modern technology, transparent guidance, and a comfort-first patient experience.",
  tagline: "Personalized family and cosmetic dentistry for confident smiles in New Delhi.",
  address: {
    streetAddress: "B-8/187 SECTOR 5 ROHINI DELHI 110085 BEHIND MOUNT AABU PUBLIC SCHOOL,",
    addressLocality: "Delhi",
    addressRegion: "Uttar Pradesh",
    postalCode: "110092",
    addressCountry: "IN",
  },
  geo: {
    latitude: "26.4499",
    longitude: "80.3319",
  },
  openingHours: ["Mo-Sa 09:00-20:00", "Su 10:00-14:00"],
  socialLinks: [
    "https://www.facebook.com/chopradentalclinic",
    "https://www.instagram.com/chopradentalclinic",
    "https://x.com/chopradental",
    "https://www.youtube.com/@chopradentalclinic",
  ],
};

export const primaryNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
   { name: "FAQ", href: "/faq" },
];

export const serviceLinks = [
  { name: "Smile Makeovers", href: "/services#services-list" },
  { name: "Root Canal Treatment", href: "/services#services-list" },
  { name: "Kids Dentistry", href: "/services#services-list" },
  { name: "Teeth Cleaning", href: "/services#services-list" },
  { name: "Dental Implants", href: "/services#services-list" },
  { name: "Emergency Dentistry", href: "/book_an_appointment" },
];

export const homepageKeywords = [
  "best dental clinic in New Delhi",
  "family dentist in New Delhi",
  "cosmetic dentist in New Delhi",
  "emergency dentist in New Delhi",
  "teeth cleaning in New Delhi",
  "root canal treatment in New Delhi",
];

export function absoluteUrl(path = "/") {
  return new URL(path, clinic.url).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/banner-img.png",
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title ? `${title} | ${clinic.name}` : `${clinic.name} | ${clinic.tagline}`;

  return {
    metadataBase: new URL(clinic.url),
    title: title || clinic.tagline,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: clinic.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || clinic.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": `${clinic.url}/#organization`,
    name: clinic.name,
    url: clinic.url,
    description: clinic.description,
    telephone: clinic.phone,
    email: clinic.email,
    image: absoluteUrl("/banner-img.png"),
    priceRange: clinic.priceRange,
    address: {
      "@type": "PostalAddress",
      ...clinic.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...clinic.geo,
    },
    openingHoursSpecification: clinic.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1],
      dayOfWeek:
        hours.startsWith("Mo-Sa")
          ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          : ["Sunday"],
    })),
    sameAs: clinic.socialLinks,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${clinic.url}/#website`,
    url: clinic.url,
    name: clinic.name,
    description: clinic.description,
    publisher: {
      "@id": `${clinic.url}/#organization`,
    },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "MedicalProcedure",
      position: index + 1,
      name: service.title,
      description: service.description,
      procedureType: "DentalProcedure",
      provider: {
        "@id": `${clinic.url}/#organization`,
      },
    })),
  };
}
