import BannerHero from "@/components/BannerHero";
import StructuredData from "@/components/StructuredData";
import BlogArchiveClient from "@/components/client/BlogArchiveClient";
import { blogCategories, blogPosts, blogTags } from "@/lib/blog-data";
import { breadcrumbSchema, buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Dental Blog With Oral Health Tips for New Delhi Patients",
  description:
    "Read dental blog articles from CHOPRA Dental Clinic in New Delhi covering teeth cleaning, cosmetic dentistry, kids dental care, root canal treatment, and emergency oral health advice.",
  path: "/blog",
  keywords: [
    "dental blog New Delhi",
    "oral health tips New Delhi",
    "emergency dentist advice",
    "kids dentist blog",
  ],
});

export default function BlogPage() {
  return (
    <div>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <BannerHero heading="All Blogs " pagename="Blog" />
      <BlogArchiveClient posts={blogPosts} categories={blogCategories} tags={blogTags} />
    </div>
  );
}
