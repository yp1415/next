"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, BookOpen, Play } from 'lucide-react';
import { KhayyamLogo } from './KhayyamLogo';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { label } from 'framer-motion/client';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/courses", label: "دوره‌ها" },
  { href: "/blogs", label:"بلاگ‌ها" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label:"ارتباط با ما" }
];


  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <KhayyamLogo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                  isActive
                    ? 'text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-sm'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-indigo-50'
                }`}

                >
                  {link.label}
                </Link>
              );
            })}

            <div className="ml-6 flex items-center space-x-3">
              <Button 
                variant="outline"
                className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                محتوای رایگان
              </Button>
              <Button className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Play className="h-4 w-4 mr-2" />
                آموزش را شروع کن
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl mt-2 border border-indigo-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-indigo-600 bg-white shadow-sm'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 space-y-2">
                <Button 
                  variant="outline"
                  className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Free Trial
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 text-white shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}