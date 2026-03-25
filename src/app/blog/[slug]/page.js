import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { absoluteUrl, buildMetadata } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Article",
      description: "Dental blog article",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, ...post.tags],
    image: post.image,
  });
}

export default function BlogDetailsPage({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.image)],
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "CHOPRA Dental Clinic",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/Dental-logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <section className="section-shell px-4 pt-10 sm:px-6 md:px-8">
      <StructuredData data={articleSchema} />

      <div className="site-shell max-w-[1000px]">
        <article className="card-surface overflow-hidden p-3">
          <div className="overflow-hidden rounded-[1.7rem]">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="h-[280px] w-full object-cover sm:h-[420px]"
              priority
            />
          </div>

          <div className="px-4 py-8 sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#10978f]">
              {post.author} | {post.date}
            </p>
            <h1 className="mt-4 font-[family:var(--font-cormorant)] text-[clamp(3rem,5vw,4.8rem)] font-bold leading-[0.95] text-[#16313b]">
              {post.title}
            </h1>
            <p className="mt-6 text-[16px] leading-9 text-[#5f7480]">{post.content}</p>

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#10978f]"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
