import { Geist_Mono, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import NotificationBar from "@/components/NotificationBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { clinic, medicalBusinessSchema, websiteSchema } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(clinic.url),
  title: {
    default: `${clinic.name} | ${clinic.tagline}`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  applicationName: clinic.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "dental clinic in New Delhi",
    "family dentist in New Delhi",
    "cosmetic dentist in New Delhi",
    "emergency dental care in New Delhi",
    "root canal treatment in New Delhi",
    "kids dentist in New Delhi",
  ],
  authors: [{ name: clinic.name }],
  creator: clinic.name,
  publisher: clinic.name,
  category: "healthcare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: clinic.url,
    siteName: clinic.name,
    title: `${clinic.name} | ${clinic.tagline}`,
    description: clinic.description,
    images: [
      {
        url: "/banner-img.png",
        width: 1200,
        height: 630,
        alt: `${clinic.name} patient-first dental care`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | ${clinic.tagline}`,
    description: clinic.description,
    images: ["/banner-img.png"],
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData data={medicalBusinessSchema()} />
        <StructuredData data={websiteSchema()} />
        <NotificationBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
