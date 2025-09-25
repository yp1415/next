"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { getCourse } from "@/lib/model/course";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { KhayyamLogo } from "./KhayyamLogo";
import {
  Users,
  BookOpen,
  Star,
  PlayCircle,
  Zap,
  Globe,
  Trophy,
  Clock,
  TrendingUp,
  Rocket,
  Brain,
  Target,
  ArrowRight,
} from "lucide-react";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {

  const [coursesData, setCoursesData] = useState<any[]>([]); // rename variable

  useEffect(() => {
    async function fetchCourses() {
      const result = await getCourse(); // getCourse برمی‌گردونه { success, data, errors }
      if (result.success && result.data) {
        setCoursesData(result.data.courses?? []);
        console.log(result.data.courses);
        
      } else {
        console.error(result.errors);
      }
    }
    fetchCourses();
  }, []);
  // ---------- data ----------
  const languages = [
    { name: "Html css", icon: "🟨" },
    { name: "Java script", icon: "🟢" },
    { name: "php", icon: "🐹" },
    { name: "Python", icon: "🐍" },
    { name: "Artificial Intelligence", icon: "🔷" },
    { name: "Bootstrap & Tailwind css", icon: "☕" },
    { name: "Laravel", icon: "🔧" },
    { name: "React Next", icon: "⚛️" },
  ];

  const features = [
    {
      icon: Rocket,
      title: "دوره‌های پروژه‌محور",
      description:
        "تمام دوره‌ها همراه با انجام پروژه تدریس می‌شوند.",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Brain,
      title: "پشتیبانی دایمی استاد",
      description:
        "استاد در تمام طول دوره و پس از آن، پاسخگوی سوالات شما خواهد بود.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Globe,
      title: "همراهی در کسب درآمد",
      description:
        "عضوی از تیم ما شوید، پروژه دریافت کنید و در محیط مناسب کار و درآمد کسب کنید.",
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      icon: Target,
      title: "آموزش مهارت‌های مفید",
      description:
        "با یادگیری برنامه‌نویسی آینده خود را تضمین کنید.",
      gradient: "from-blue-400 to-cyan-500",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Students Graduated", icon: Users },
    { number: "96%", label: "Job Placement Rate", icon: Trophy },
    { number: "150+", label: "Industry Partners", icon: Globe },
    { number: "4.9/5", label: "Student Satisfaction", icon: Star },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      text: "CodeAcademy transformed my career. The mentorship and real-world projects prepared me perfectly for my dream job.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer at Stripe",
      text: "The curriculum is incredibly comprehensive and the community support is amazing. Highly recommended!",
      avatar: "MC",
    },
    {
      name: "Emily Davis",
      role: "Lead Developer at Airbnb",
      text: "Best investment I ever made. The skills I learned here directly led to my promotion.",
      avatar: "ED",
    },
  ];

  // ---------- HYDRATION-SAFE random dots ----------
  // روی سرور، چیزی رندر نمی‌کنیم. بعد از mount در کلاینت می‌سازیم.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const heroDots = useMemo(() => {
    if (!mounted) return [] as Array<{
      left: string;
      top: string;
      duration: number;
      delay: number;
    }>;
    return [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, [mounted]);

  const ctaDots = useMemo(() => {
    if (!mounted) return [] as Array<{
      left: string;
      top: string;
      duration: number;
      delay: number;
    }>;
    return [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, [mounted]);

  // ---------- UI ----------
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-900 to-violet-900">
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1582138825658-fb952c08b282?w=1080')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.3",
            }}
          />
        </div>

        {/* animated dots (rendered only after mount) */}
        <div className="absolute inset-0">
          {heroDots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{ left: dot.left, top: dot.top }}
              animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-amber-400 to-orange-500 text-black border-0 px-6 py-2">
              🎯 فرصت محدود: 30% تخفیف برای هر دوره
            </Badge>

            <div className="flex justify-center mb-8">
              <KhayyamLogo size="lg" animated />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              از صفر تا حرفه‌ای با{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                خیام
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              به جمع توسعه‌دهندگانی بپیوندید که مسیر حرفه‌ای خود را در مؤسسه خیام با آموزش پروژه‌محور و پشتیبانی دائمی استاد متحول کرده‌اند.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                onClick={() => onPageChange("courses")}
              >
                <Rocket className="mr-2 h-5 w-5" />
                شروع با خیام
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                داستان موفقیت ما
              </Button>
            </div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Programming Languages */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">تسلط بر فناوری‌های پرطرفدار</h2>
            <p className="text-xl text-gray-300">
              Learn the most in-demand programming languages and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {lang.icon}
                </div>
                <div className="font-semibold text-sm">{lang.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-bold mb-6">
              مزیت‌های خیام
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              با برنامه درسی پیشرو در صنعت و امکانات درجه یک، آینده آموزش فناوری را تجربه کنید.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
                  <CardHeader>
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-blue-400 md:text-5xl font-bold mb-6">
              آموزشگاهی برای تنبل‌ها!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نگران خستگی و بی‌حوصلگی نباشید، ما در کنارتان هستیم!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=1080"
                  alt="Modern Tech Workspace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">پرورش خلاقیت</h3>
                  <p className="text-sm text-gray-200">
                    پرسش‌های نوآورانه برای ارتقای قدرت حل مسیله
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558301204-e3226482a77b?w=1080"
                  alt="Programming Education"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">کلاس‌های هوشمند</h3>
                  <p className="text-sm text-gray-200">
                    آموزش همراه با تکنولوژی بالا در اختیار همه
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl group md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632761637833-b8be546ff075?w=1080"
                  alt="Graduation Success"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">داستان موفقیت</h3>
                  <p className="text-sm text-gray-200">
                    چه بودیم و چه شدیم
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-blue-400 md:text-5xl font-bold mb-6">
              محبوب‌ترین دوره‌ها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              دوره‌های پروژه‌محور با پشتیبانی دائمی برای آماده سازی هرچه سریع‌تر برای شغل‌های واقعی
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coursesData.slice(0,3).map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 bg-gradient-to-br from-white to-gray-50">
                  {course.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                        🔥 محبوب‌ترین‌ دوره‌ها
                      </Badge>
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-gray-700 font-bold">
                        {course.title}
                      </CardTitle>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold">
                          {course.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {course.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.time}
                      </div>
                        <Users className="h-4 w-4 ml-2 mr-5" />
                      <div className="flex items-center">
                        {course.students_count} شرکت کننده
                      </div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-indigo-600">
                          {course.price} تومان
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {course.originalPrice}
                        </span>
                      </div>
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg">
                        اطلاعات بیشتر
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onPageChange("courses")}
              className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View All Bootcamps
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Real students, real results. See how our graduates landed their
              dream jobs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-gray-900">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-indigo-200">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-indigo-100 italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        {/* animated dots (rendered only after mount) */}
        <div className="absolute inset-0">
          {ctaDots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{ left: dot.left, top: dot.top }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2">
              ⚡ Don't Miss Out - Enrollment Closes Soon!
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your Coding Career Starts{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Today
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of developers who've transformed their careers. Get
              job-ready skills in months, not years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
                onClick={() => onPageChange("contact")}
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Your Transformation
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg transition-all duration-300"
                onClick={() => onPageChange("courses")}
              >
                <Zap className="mr-2 h-5 w-5" />
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
