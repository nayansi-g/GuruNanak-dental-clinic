import { clinic } from "@/lib/site";

export default function manifest() {
  return {
    name: clinic.name,
    short_name: clinic.shortName,
    description: clinic.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d2b63",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
