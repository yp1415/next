"use client";

import { getCourse , deleteCourse } from "@/lib/model/course";
import { useState, useEffect } from "react";
import { CourseCard } from "@/app/components/courseCard"
import { KhayyamLogo } from "@/app/components/KhayyamLogo";
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { h1, p } from "framer-motion/client";

const lineData = [
  { week: "wk1", a: 40, b: 24 },
  { week: "wk2", a: 30, b: 13 },
  { week: "wk3", a: 20, b: 98 },
  { week: "wk4", a: 27, b: 39 },
  { week: "wk5", a: 18, b: 48 },
];

const barData = [
  { week: "wk1", income: 40, expense: 24 },
  { week: "wk2", income: 30, expense: 13 },
  { week: "wk3", income: 20, expense: 98 },
  { week: "wk4", income: 27, expense: 39 },
  { week: "wk5", income: 18, expense: 48 },
];

export default function Dashboard() {

  const [activeTab,setActiveTab] = useState<"students" | "courses" | "dashboard">("dashboard");
  const [Courses,setCourses] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const result = await getCourse();
      if (result.success) {
        setCourses(result.data.courses) 
      } else {
        // console.error(result.errors);
      }
      setLoading(false);
    }

    fetchCourses();
  },[])



  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-65 bg-blue-600 text-white p-4 space-y-6 hidden md:block">
        <div className="flex items-center space-x-2 text-xl font-bold">
          <KhayyamLogo></KhayyamLogo>
        </div>
        <nav className="space-y-2">
          <button onClick={() => setActiveTab("dashboard")} className={`{ w-full block px-3 py-2 rounded-lg bg-blue-600} ${
              activeTab==="dashboard"
              ? "bg-blue-500"
              : "bg-blue-600"
          }`}
          >
            dashboard
          </button>
          <button onClick={() => setActiveTab("courses")} className={`w-full block px-3 py-2 rounded-lg hover:bg-blue-500 ${
            activeTab==="courses"
            ? "bg-blue-500"
            : "bg-blue-600"
            }`}>
            دوره‌ها
          </button>
          <button className="w-full block px-3 py-2 rounded-lg hover:bg-blue-500">
            دانش‌آموزان
          </button>
            
          
          <button className="w-full block px-3 py-2 rounded-lg hover:bg-blue-500" value={'Reports'}/>
            
          
        </nav>
      </aside>

      {/* Main */}
      {activeTab==="dashboard" && (
      <main className="flex-1 p-6 space-y-6">
        {/* Topbar */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Finance</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-lg border"
            />
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </header>

        {/* Stat Cards */}
        <div className="grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500">Total Students</p>
            <h2 className="text-2xl font-bold">932</h2>
            <span className="text-green-500 text-sm">+10% from last month</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500">Paid Students</p>
            <h2 className="text-2xl font-bold">754</h2>
            <span className="text-red-500 text-sm">-5% from last month</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <p className="text-gray-500">School Income</p>
            <h2 className="text-2xl font-bold">$123,456</h2>
            <span className="text-green-500 text-sm">+8% this month</span>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-4">Balance Analytics</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="a" stroke="#6366f1" />
                  <Line type="monotone" dataKey="b" stroke="#f43f5e" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-4">Finance Map</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="income" fill="#6366f1" />
                  <Bar dataKey="expense" fill="#f43f5e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-4">Unpaid Student Tuition</h3>
            <table className="w-full text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Fee</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jackson Nico</td>
                  <td>WIC</td>
                  <td>$2,000</td>
                  <td><span className="text-red-500">Unpaid</span></td>
                </tr>
                <tr>
                  <td>Sarah Kim</td>
                  <td>BIO</td>
                  <td>$1,500</td>
                  <td><span className="text-red-500">Unpaid</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-4">School Expenses</h3>
            <table className="w-full text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#245</td>
                  <td>Books</td>
                  <td>$760</td>
                  <td><span className="text-green-500">Completed</span></td>
                </tr>
                <tr>
                  <td>#246</td>
                  <td>Transport</td>
                  <td>$980</td>
                  <td><span className="text-green-500">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      )}

{activeTab === "courses" && (
  <div className="flex-1 w-full m-4 cols-1 md:cols-2 gap-2">
  {Courses.map((course, id) => (
    <CourseCard
      key={id} 
      title={course.title} 
      price={`${course.price} تومان`}
      time={course.time}
      days={course.days}
      profileImg="/path-to-lang-icon.png"
      isActive={course.is_active}
      startDate={course.start_of_class}
      studentCount={course.students_count}
    />
  ))}
</div>
)}


      {/* {activeTab==="courses" && (

      )} */}

    </div>
  );
}
``