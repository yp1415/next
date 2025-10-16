"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getBlogs } from "@/lib/model/blog";

interface BlogPost {
  id: string | number;
  tag: string;
  title: string;
  image: string;
  about: string;
}

export function BlogPage() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]); // rename variable
  
    useEffect(() => {
      async function fetchBlogs() {
        const result = await getBlogs();
        if (result.success && result.data) {
          setPosts(result.data.blogs);
        } else {
          console.error(result.errors);
        }
      }
      fetchBlogs();
    }, []);

  // Filter posts dynamically
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.tag.toLowerCase().includes(search.toLowerCase())
  );

  // Use the first post as featured
  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
          بلاگ‌ها
        </h2>
        <p className="text-gray-600 mt-3">
            مقالات و راهنمایی‌های درباره برنامه‌نویسی و زبان‌های آن
        </p>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search by title or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 p-3 rounded-2xl border border-cyan-400/50 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition"
          />
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-center">
          {/* Featured Image */}
          {/* <div className="w-full md:w-1/2 relative aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div> */}

          {/* Featured Info */}
          <div className="md:w-1/2">
            <span className="text-sm font-semibold text-cyan-600 uppercase">
              {featuredPost.tag}
            </span>
            <h3 className="text-3xl font-bold mt-2 text-gray-900">
              {featuredPost.title}
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {featuredPost.about}
            </p>
            <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition">
              بیشتر بخوانید
            </button>
          </div>
        </div>
      )}

      {/* Other Posts */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {otherPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl overflow-hidden bg-white/80 shadow-md hover:shadow-lg transition border border-transparent hover:border-cyan-400/40"
          >
            <div className="relative w-full aspect-[16/10]">
              {/* <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              /> */}
            </div>
            <div className="p-5">
              <span className="text-s text-indigo-400">
                {post.tag}
              </span>
              <h4 className="text-lg text-teal-600 font-bold mt-2">{post.title}</h4>
              <p className="text-sm text-gray-600 mt-2 my-3 line-clamp-3">
                {post.about}
              </p>
              <button className="mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition">
              بیشتر بخوانید
            </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          پست مشابه یافت نشد “{search}”
        </p>
      )}
    </section>
  );
}
