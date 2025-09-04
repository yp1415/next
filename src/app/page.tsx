"use client";
import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { CoursesPage } from './components/CoursesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { KhayyamLogo } from './components/KhayyamLogo';
import { Github, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'courses':
        return <CoursesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <KhayyamLogo size="md" className="text-white" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Khayyam Institute of Technology - Where innovation meets excellence. Transforming careers through 
                world-class education and cutting-edge technology training since our founding.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Programs</h3>
              <ul className="space-y-3">
                <li><button onClick={() => setCurrentPage('courses')} className="text-gray-300 hover:text-emerald-400 transition-colors">Full Stack Development</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Python & AI/ML</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Mobile Development</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">DevOps & Cloud</button></li>
                <li><button onClick={() => setCurrentPage('courses')} className="text-gray-300 hover:text-emerald-400 transition-colors">All Programs</button></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                <li><button onClick={() => setCurrentPage('about')} className="text-gray-300 hover:text-emerald-400 transition-colors">About Khayyam</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Faculty</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Careers</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Research</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">News</button></li>
              </ul>
            </div>
            
            {/* Support & Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Support</h3>
              <ul className="space-y-3 mb-6">
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Help Center</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Alumni Network</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</button></li>
                <li><button className="text-gray-300 hover:text-emerald-400 transition-colors">Student Portal</button></li>
              </ul>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                  admissions@khayyam.edu
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="h-4 w-4 mr-2 text-emerald-400" />
                  +1 (555) KHAYYAM
                </div>
                <div className="flex items-start text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-emerald-400 flex-shrink-0" />
                  1001 Technology Blvd<br />
                  Silicon Valley, CA 94301
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-bold text-lg mb-2">Stay Updated</h4>
                <p className="text-gray-300 text-sm">Get the latest course updates and career tips delivered to your inbox.</p>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2024 Khayyam Institute of Technology. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <button className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
                <button className="hover:text-emerald-400 transition-colors">Terms of Service</button>
                <button className="hover:text-emerald-400 transition-colors">Cookie Policy</button>
                <button className="hover:text-emerald-400 transition-colors">Accessibility</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}