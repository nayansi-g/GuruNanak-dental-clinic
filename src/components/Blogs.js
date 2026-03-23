import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const blogs = blogPosts.slice(0, 3);

function BlogCard({ blog }) {
  return (
    <article className="card-surface overflow-hidden p-3">
      <div className="overflow-hidden rounded-[1.5rem]">
        <Image
          src={blog.image}
          alt={blog.title}
          width={360}
          height={240}
          className="h-[230px] w-full object-cover"
        />
      </div>

      <div className="px-2 pb-3 pt-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#edf8f6] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#10978f]">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>{blog.date}</span>
        </div>

        <h3 className="mt-4 text-[26px] font-semibold leading-tight text-[#16313b]">
          {blog.title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-[#5f7480]">{blog.excerpt}</p>

        <Link href={`/blog/${blog.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#10978f]">
          Read Article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="section-shell px-4 pt-0 sm:px-6 md:px-8">
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-kicker">Dental blog and oral health tips</p>
          <h2 className="section-title">Helpful content that sounds informed, local, and genuinely useful.</h2>
          <p className="section-copy mx-auto max-w-3xl">
            These updated articles support SEO around emergency dentistry, kids dental care, hygiene, and restorative
            treatment while still reading like advice a real clinic would publish.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
