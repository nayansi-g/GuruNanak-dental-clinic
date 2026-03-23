import { clinic } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinic.url}/sitemap.xml`,
    host: clinic.url,
  };
}
