"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, CalendarDays, Facebook, Twitter, Instagram } from "lucide-react";

function SidebarBox({ title, children }) {
  return (
    <div className="card-surface p-5">
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#10978f]">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <article className="card-surface overflow-hidden p-3">
      <div className="overflow-hidden rounded-[1.5rem]">
        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={520}
          className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[340px]"
        />
      </div>

      <div className="px-3 pb-4 pt-5">
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.12em] text-[#7b909a]">
          <span className="inline-flex items-center gap-2">
            <User className="h-3.5 w-3.5" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
        </div>

        <h2 className="mt-4 text-[30px] font-semibold leading-tight text-[#16313b]">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-[#10978f]">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 text-[15px] leading-8 text-[#5f7480]">{post.excerpt}</p>

        <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#10978f]">
          Read More
        </Link>
      </div>
    </article>
  );
}

export default function BlogArchiveClient({ posts, categories, tags }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesTag = activeTag === "All" || post.tags.includes(activeTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [activeCategory, activeTag, posts, searchTerm]);

  const recentPosts = posts.slice(0, 3);

  return (
    <section className="section-shell px-4 pt-10 sm:px-6 md:px-8">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="space-y-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <div className="card-surface px-6 py-14 text-center">
                <h2 className="text-2xl font-semibold text-[#16313b]">No articles found</h2>
                <p className="mt-3 text-[#5f7480]">Try a different search term, category, or topic.</p>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <SidebarBox title="Search">
              <div className="flex overflow-hidden rounded-full border border-[#d6e4df] bg-white">
                <div className="flex flex-1 items-center px-4">
                  <Search className="mr-2 h-4 w-4 text-[#8ba0a8]" />
                  <input
                    type="text"
                    placeholder="Search dental articles"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 w-full bg-transparent text-sm text-[#16313b] placeholder:text-[#8ba0a8]"
                  />
                </div>
              </div>
            </SidebarBox>

            <SidebarBox title="Follow Us">
              <div className="flex gap-2">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e4df] text-[#5f7480] transition hover:border-[#18b7ae] hover:text-[#10978f]"
                    aria-label="Clinic social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </SidebarBox>

            <SidebarBox title="Categories">
              <div className="space-y-3">
                {["All", ...categories].map((category) => {
                  const count =
                    category === "All"
                      ? posts.length
                      : posts.filter((post) => post.category === category).length;

                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`flex w-full items-center justify-between rounded-[1rem] px-4 py-3 text-left text-sm ${
                        activeCategory === category
                          ? "bg-[#edf8f6] font-semibold text-[#10978f]"
                          : "bg-[#f7faf8] text-[#5f7480]"
                      }`}
                    >
                      <span>{category}</span>
                      <span>({count})</span>
                    </button>
                  );
                })}
              </div>
            </SidebarBox>

            <SidebarBox title="Recent Posts">
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block rounded-[1rem] bg-[#f7faf8] px-4 py-4">
                    <h3 className="text-[15px] leading-7 text-[#294652] transition hover:text-[#10978f]">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8ba0a8]">{post.date}</p>
                  </Link>
                ))}
              </div>
            </SidebarBox>

            <SidebarBox title="Topics">
              <div className="flex flex-wrap gap-2">
                {["All", ...tags].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                      activeTag === tag
                        ? "border-[#18b7ae] bg-[#18b7ae] text-white"
                        : "border-[#d6e4df] text-[#5f7480]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </SidebarBox>
          </aside>
        </div>
      </div>
    </section>
  );
}
