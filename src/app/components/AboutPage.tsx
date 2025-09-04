import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Award, Users, Code, Target, Heart, Lightbulb } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support.',
    },
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'Our students are at the heart of everything we do. Their success is our success.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods to stay ahead of industry trends.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former Google engineer with 15+ years of experience in software development and education.',
      image: '/api/placeholder/150/150',
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Head of Curriculum',
      bio: 'Computer Science PhD with expertise in AI/ML and 10+ years of teaching experience.',
      image: '/api/placeholder/150/150',
    },
    {
      name: 'Alex Rodriguez',
      role: 'Director of Student Success',
      bio: 'Education specialist focused on student outcomes and career placement success.',
      image: '/api/placeholder/150/150',
    },
    {
      name: 'Emily Davis',
      role: 'Lead Instructor',
      bio: 'Full-stack developer and former startup CTO with passion for teaching modern web technologies.',
      image: '/api/placeholder/150/150',
    },
  ];

  const achievements = [
    { icon: Users, number: '5,000+', label: 'Students Graduated' },
    { icon: Award, number: '95%', label: 'Job Placement Rate' },
    { icon: Code, number: '50+', label: 'Industry Partners' },
    { icon: Target, number: '4.9/5', label: 'Student Satisfaction' },
  ];

  const milestones = [
    { year: '2018', event: 'CodeInstitute Founded', description: 'Started with a vision to democratize programming education' },
    { year: '2019', event: 'First 100 Graduates', description: 'Celebrated our first milestone with 95% job placement rate' },
    { year: '2020', event: 'Online Platform Launch', description: 'Expanded to online learning during the global pandemic' },
    { year: '2021', event: 'Corporate Partnerships', description: 'Partnered with leading tech companies for direct hiring' },
    { year: '2022', event: '1,000+ Graduates', description: 'Reached four-figure graduate milestone with expanded curriculum' },
    { year: '2023', event: 'International Expansion', description: 'Opened offices in 5 countries to serve global students' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About CodeInstitute
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            We're on a mission to empower the next generation of programmers through 
            world-class education, mentorship, and career support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To bridge the gap between traditional education and industry needs by providing 
                practical, hands-on programming education that prepares students for successful 
                careers in technology.
              </p>
              <p className="text-lg text-gray-600">
                We believe that quality programming education should be accessible to everyone, 
                regardless of their background or previous experience.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the world's leading platform for practical programming education, 
                creating a global community of skilled developers who drive innovation and 
                positive change through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to student success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform programming education
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{milestone.event}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white z-10 relative"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate educators and industry experts dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4"></div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Become part of a thriving community of learners and start your programming journey today.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Start Learning Today
          </Button>
        </div>
      </section>
    </div>
  );
}