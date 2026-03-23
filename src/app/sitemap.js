import { clinic } from "@/lib/site";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/faq",
    "/blog",
    "/contact",
    "/book_an_appointment",
  ].map((path) => ({
    url: `${clinic.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${clinic.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
