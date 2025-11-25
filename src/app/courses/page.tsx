'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Clock, Users, Star, CheckCircle, Code, Database, Smartphone, Filter, Search, ArrowRight, Trophy, Zap, BookOpen, Play, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCourse } from '@/lib/model/course';
import { useState, useEffect } from 'react';

export default function CoursesPage() {

  const [coursesData, setCoursesData] = useState<any[]>([]); // rename variable

  useEffect(() => {
    async function fetchCourses() {
      const result = await getCourse();
      if (result.success && result.data) {
        setCoursesData(result.data.courses);
      } else {
        console.error(result.errors);
      }
    }
    fetchCourses();
  }, []);

  const courses = [
    {
      id: 1,
      icon: Code,
    },
    {
      id: 2,
      icon: Database,
    },
    {
      id: 3,
      icon: Smartphone,
    },
    {
      id: 4,
      icon: Database,
    },
    {
      id: 5,
      icon: Code,
    },
  ];

  const categories = [
    { name: 'All Programs', count: courses.length, active: true },
    { name: 'Web Development', count: 2, active: false },
    { name: 'Mobile Development', count: 1, active: false },
    { name: 'AI & Data Science', count: 2, active: false },
    { name: 'DevOps', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
  ];

  const stats = [
    { number: '50K+', label: 'دانش‌آموخته', icon: Users },
    { number: '96%', label: 'موفقیت شغلی', icon: Trophy },
    { number: '4.8/5', label: 'امتیاز متوسط', icon: Star },
    { number: '24/7', label: 'پشتیبانی دایمی', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NTY1NDY1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.2'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <Badge className="mb-6 bg-amber-500 text-black px-4 py-2 text-sm font-semibold">
              🎯 Limited Time: Up to 38% OFF All Programs
            </Badge> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r ml-1 from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
               برنامه‌های 
              </span>      
              خیام{' '}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              برنامه‌های آموزشی معتبر و سطح بالا که با تأکید بر نوآوری و سخت‌گیری علمی برای تضمین کیفیت و برتری
            </p>
            
            {/* Search and Filter Bar */}
            {/* <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search bootcamps..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white group relative">
                  {/* Course Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Course Icon Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="p-6">
                    <div className="flex justify-between items-start mb-3">
                    </div>
                    <CardTitle className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed mb-4">{course.about}</p>

                    {/* Course Stats */}
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mx-1 " />
                        {course.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mx-1" />
                        {course.students_count}+ شرکت کننده
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                      <Zap className="h-4 w-4 text-indigo-500" />

                    {/* Pricing */}
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-3xl font-bold text-indigo-600">{course.price} ت</span>
                      </div>
                      <Button onClick={() => onPageChange("dashboard")} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                          <BookOpen className="h-4 w-4 mr-2" />
                          اطلاعات بیشتر
                          <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
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
            <Badge className="mb-6 bg-yellow-500 text-black px-4 py-2 font-bold">
              ⚡ Enrollment Closes Soon - Don't Miss Out!
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              همچنان مطمین نیستی کدوم 
              {' '} 
              <span className="bg-gradient-to-r ml-1 from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                دوره?
              </span>
              رو انتخاب کنی؟ 
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              دریافت پیشنهادهای آموزشی متناسب با اهداف، سطح تجربه و آرزوهای شغلی شما. به شما کمک می‌کنیم بهترین برنامه را برای موفقیت انتخاب کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
              <Award className="mr-2 h-5 w-5" />
                دریافت مشاوره رایگان
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                مشاهده داستان موفقیت ما
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}