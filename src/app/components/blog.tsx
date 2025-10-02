"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getBlogPosts } from "@/lib/model/blog"; // assume similar API to getCourse
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

export function BlogPage({ onPageChange }: BlogPageProps) {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const result = await getBlogPosts(); // { success, data, errors }
      if (result.success && result.data) {
        setPosts(result.data.posts ?? []);
      } else {
        console.error(result.errors);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-white to-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            بلاگ خیام
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            جدیدترین مطالب، آموزش‌ها و نکات کاربردی در دنیای برنامه‌نویسی و فناوری
          </p>
        </motion.div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                {post.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 font-bold">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-4 py-2 text-sm hover:from-emerald-500 hover:to-teal-500 transition-all duration-300"
                    onClick={() => onPageChange(`blog/${post.slug}`)}
                  >
                    ادامه مطلب <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onPageChange("blog")}
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg transition-all duration-300"
          >
            مشاهده همه پست‌ها
          </Button>
        </div>
      </section>
    </div>
  );
}
