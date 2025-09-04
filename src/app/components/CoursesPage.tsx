import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Users, Star, CheckCircle, Code, Database, Smartphone, Filter, Search, ArrowRight, Trophy, Zap, BookOpen, Play, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development Bootcamp',
      description: 'Master modern web development with React, Node.js, and cloud deployment. Build 8+ real-world projects.',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NTY1NDE0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '24 weeks',
      students: '3,240',
      rating: 4.9,
      level: 'Beginner to Advanced',
      price: '$2,499',
      originalPrice: '$3,999',
      discount: '38% OFF',
      features: ['React 18 & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'AWS Deployment', '8+ Real Projects', 'Job Guarantee'],
      instructor: 'Sarah Chen',
      instructorTitle: 'Ex-Google Engineer',
      nextBatch: 'Starting March 1',
      popular: true,
      tag: 'Most Popular'
    },
    {
      id: 2,
      title: 'Python & AI/ML Mastery',
      description: 'Complete Python programming with AI/ML focus. From fundamentals to deploying ML models in production.',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGRhdGElMjBzY2llbmNlfGVufDF8fHx8MTc1NjQ5OTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '20 weeks',
      students: '2,180',
      rating: 4.8,
      level: 'Intermediate',
      price: '$2,299',
      originalPrice: '$3,499',
      discount: '34% OFF',
      features: ['Python Mastery', 'Machine Learning', 'Deep Learning', 'Data Science', 'TensorFlow & PyTorch', 'MLOps'],
      instructor: 'Dr. Michael Zhang',
      instructorTitle: 'AI Research Scientist',
      nextBatch: 'Starting March 8',
      popular: false,
      tag: 'Career Track'
    },
    {
      id: 3,
      title: 'Mobile App Development Pro',
      description: 'Build cross-platform mobile apps with React Native & Flutter. Deploy to App Store and Google Play.',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1614020661483-d2bb855eee1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHBob25lfGVufDF8fHx8MTc1NjU0NTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '18 weeks',
      students: '1,850',
      rating: 4.7,
      level: 'Intermediate',
      price: '$1,999',
      originalPrice: '$2,999',
      discount: '33% OFF',
      features: ['React Native', 'Flutter & Dart', 'Native Features', 'App Store Deployment', 'Push Notifications', 'In-App Purchases'],
      instructor: 'Emma Rodriguez',
      instructorTitle: 'Senior Mobile Architect',
      nextBatch: 'Starting March 15',
      popular: false,
      tag: 'Practical Focus'
    },
    {
      id: 4,
      title: 'AI & Machine Learning Engineer',
      description: 'Advanced AI/ML engineering track. Build and deploy intelligent systems at enterprise scale.',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NjQ5OTA5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '28 weeks',
      students: '980',
      rating: 4.9,
      level: 'Advanced',
      price: '$3,299',
      originalPrice: '$4,999',
      discount: '34% OFF',
      features: ['Advanced ML Algorithms', 'Deep Learning', 'Computer Vision', 'NLP & LLMs', 'MLOps & Deployment', 'AI Ethics'],
      instructor: 'Prof. David Kim',
      instructorTitle: 'Stanford AI Professor',
      nextBatch: 'Starting March 22',
      popular: false,
      tag: 'Expert Level'
    },
    {
      id: 5,
      title: 'DevOps & Cloud Architecture',
      description: 'Master modern DevOps practices and cloud infrastructure. AWS, Docker, Kubernetes, and more.',
      icon: Code,
      duration: '16 weeks',
      students: '1,420',
      rating: 4.6,
      level: 'Intermediate to Advanced',
      price: '$1,799',
      originalPrice: '$2,699',
      discount: '33% OFF',
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Security'],
      instructor: 'Alex Johnson',
      instructorTitle: 'Principal DevOps Engineer',
      nextBatch: 'Starting March 29',
      popular: false,
      tag: 'High Demand'
    },
    {
      id: 6,
      title: 'Cybersecurity Specialist',
      description: 'Comprehensive cybersecurity training. Ethical hacking, penetration testing, and security analysis.',
      icon: Code,
      duration: '22 weeks',
      students: '720',
      rating: 4.8,
      level: 'Beginner to Advanced',
      price: '$2,199',
      originalPrice: '$3,299',
      discount: '33% OFF',
      features: ['Ethical Hacking', 'Penetration Testing', 'Security Analysis', 'Network Security', 'Incident Response', 'Compliance'],
      instructor: 'Marcus Wilson',
      instructorTitle: 'Cybersecurity Consultant',
      nextBatch: 'Starting April 5',
      popular: false,
      tag: 'Security Focus'
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
    { number: '50K+', label: 'Students Enrolled', icon: Users },
    { number: '96%', label: 'Job Placement Rate', icon: Trophy },
    { number: '4.8/5', label: 'Average Rating', icon: Star },
    { number: '24/7', label: 'Learning Support', icon: Clock },
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
            <Badge className="mb-6 bg-amber-500 text-black px-4 py-2 text-sm font-semibold">
              🎯 Limited Time: Up to 38% OFF All Programs
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Khayyam{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Prestigious programs designed by world-class faculty and industry leaders. 
              Excellence through innovation and academic rigor.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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
            </div>
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

      {/* Categories Filter */}
      <section className="py-8 bg-gradient-to-r from-gray-100 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  category.active 
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg" 
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-emerald-300 hover:text-emerald-600"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-600">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white group relative">
                  {/* Popular Badge */}
                  {course.popular && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1">
                        🔥 {course.tag}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-red-500 text-white font-bold px-3 py-1">
                      {course.discount}
                    </Badge>
                  </div>

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
                        <course.icon className="h-6 w-6 text-white" />
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
                      <Badge variant="outline" className="border-emerald-200 text-emerald-600 px-3 py-1">
                        {course.level}
                      </Badge>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed mb-4">{course.description}</p>

                    {/* Course Stats */}
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}+ enrolled
                      </div>
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{course.instructor}</div>
                        <div className="text-sm text-gray-600">{course.instructorTitle}</div>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    {/* Features Preview */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        {course.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      {course.features.length > 4 && (
                        <div className="mt-2 text-sm text-indigo-600 font-medium">
                          +{course.features.length - 4} more skills
                        </div>
                      )}
                    </div>

                    {/* Next Batch */}
                    <div className="flex items-center justify-between mb-6 p-3 bg-indigo-50 rounded-lg">
                      <div className="flex items-center text-indigo-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{course.nextBatch}</span>
                      </div>
                      <Zap className="h-4 w-4 text-indigo-500" />
                    </div>

                    {/* Pricing */}
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-3xl font-bold text-indigo-600">{course.price}</span>
                        <span className="text-lg text-gray-500 line-through ml-3">{course.originalPrice}</span>
                      </div>
                      <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Enroll Now
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
              Still Deciding Which{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Bootcamp?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get personalized recommendations based on your goals, experience level, and career aspirations. 
              Our career counselors will help you choose the perfect program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}