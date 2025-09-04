"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Settings, 
  Home, 
  GraduationCap, 
  DollarSign, 
  TrendingUp,
  UserPlus,
  Award,
  Calendar,
  Bell
} from 'lucide-react';

interface AdminDashboardProps {
  onPageChange: (page: string) => void;
}

export function AdminDashboard({ onPageChange }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'instructors', label: 'Instructors', icon: GraduationCap },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Active Courses',
      value: '28',
      change: '+3',
      icon: BookOpen,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      title: 'Revenue',
      value: '$45,230',
      change: '+18%',
      icon: DollarSign,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'Completion Rate',
      value: '89%',
      change: '+5%',
      icon: Award,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ];

  const recentStudents = [
    { name: 'John Doe', course: 'Full Stack Development', status: 'Active', joinDate: '2024-01-15' },
    { name: 'Jane Smith', course: 'Python Programming', status: 'Completed', joinDate: '2024-01-10' },
    { name: 'Mike Johnson', course: 'Mobile Development', status: 'Active', joinDate: '2024-01-12' },
    { name: 'Sarah Wilson', course: 'Full Stack Development', status: 'Pending', joinDate: '2024-01-16' },
  ];

  const upcomingClasses = [
    { course: 'React Advanced Concepts', instructor: 'Dr. Smith', time: '10:00 AM', students: 24 },
    { course: 'Python Data Science', instructor: 'Prof. Johnson', time: '2:00 PM', students: 18 },
    { course: 'Mobile UI/UX Design', instructor: 'Ms. Davis', time: '4:00 PM', students: 15 },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <div className={`p-2 rounded-full ${stat.bg}`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center text-sm text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change} from last month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Students and Upcoming Classes */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Students */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserPlus className="h-5 w-5 mr-2" />
                    Recent Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudents.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-gray-600">{student.course}</div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={student.status === 'Active' ? 'default' : student.status === 'Completed' ? 'secondary' : 'outline'}
                            className={student.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {student.status}
                          </Badge>
                          <div className="text-xs text-gray-500 mt-1">{student.joinDate}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Classes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Today's Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingClasses.map((class_, index) => (
                      <div key={index} className="p-3 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium">{class_.course}</div>
                          <Badge variant="outline">{class_.time}</Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          Instructor: {class_.instructor}
                        </div>
                        <div className="text-sm text-gray-500">
                          {class_.students} students enrolled
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 'students':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Manage student enrollments, track progress, and view detailed analytics.</p>
              <Button>Add New Student</Button>
            </CardContent>
          </Card>
        );
      
      case 'courses':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Course Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Create and manage courses, set curriculum, and assign instructors.</p>
              <Button>Create New Course</Button>
            </CardContent>
          </Card>
        );
      
      case 'instructors':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Instructor Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Manage instructor profiles, assignments, and performance metrics.</p>
              <Button>Add New Instructor</Button>
            </CardContent>
          </Card>
        );
      
      case 'analytics':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">View detailed analytics on student performance, course completion rates, and revenue.</p>
              <Button>Generate Report</Button>
            </CardContent>
          </Card>
        );
      
      case 'settings':
        return (
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Configure system settings, user permissions, and notification preferences.</p>
              <Button>Save Settings</Button>
            </CardContent>
          </Card>
        );
      
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarContent>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">Admin Dashboard</h2>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onPageChange('home')}
                className="w-full mb-4"
              >
                ← Back to Website
              </Button>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton 
                        onClick={() => setActiveSection(item.id)}
                        isActive={activeSection === item.id}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold capitalize">{activeSection}</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}